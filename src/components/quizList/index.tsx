import styled from 'styled-components';
import { Stepper, Button, Step, StepLabel } from '@mui/material';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { processStatus } from '../../recoil/processStatus';
import { useCallback, useState, useLayoutEffect, useMemo } from 'react';
import { QuizContent } from './Quiz';
import { useQuery, useMutation } from 'react-query';
import { GET_QUIZ_LIST } from '../../constant/keys';
import { QuizApi } from '../../services/api/quiz/quizApi';
import { quizUtil } from '../../utils/quizList';
import { PostResultsReqType } from '../../types/api.type';
import { resultsApi } from '../../services/api/results/resultsApi';
import { TimeViewer } from './TimeViewer';
import { useNavigate } from 'react-router-dom';
import { resultStatus } from '../../recoil/resultStatus';

const QuizListWarp = styled.div`
  width: 1000px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  flex: 0 1;
  column-gap: 50px;
`;

const QuizWarp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const ButtonWarp = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  column-gap: 20px;
`;

const InitProps = {
  amount: 10,
  category: 11,
  difficulty: 'medium',
  type: 'multiple',
};

type PropTypes = {
  retry: boolean;
};

export const QuizList = ({retry}: PropTypes) => {
  const navigate = useNavigate();
  const [process, setProcess] = useRecoilState(processStatus);
  const setResult = useSetRecoilState(resultStatus);
  const [userAnswer, setUserAnswer] = useState<number[]>([]);
  const [submitBtnDisable, setSubmitBtnDisable] = useState(true);
  const [delay, setDelay] = useState<number>();
  const [time, setTime] = useState(0);

  const { refetch } = useQuery(GET_QUIZ_LIST, () => QuizApi.get({ ...InitProps, difficulty: process.difficulty,  amount: process.amount, category: process.category}), {
    enabled: false,
    onSuccess: ({ data: { results } }) => {
      const parseQuiz = quizUtil(results);
      setProcess({ ...process, step: 0, quizList: parseQuiz });
      setUserAnswer(Array.from({ length: parseQuiz.length }, () => -1));
      setDelay(1000);
    },
  });

  const { mutate } = useMutation((result: PostResultsReqType) => resultsApi.set(result), {
    onSuccess: ({ data }) => {
      const answerArr = process.quizList.map((curr, index) => curr.answerIndex === userAnswer[index]);
      setResult({ answerArr, resultId: data.id });
      navigate('/result');
    },
  });

  const question = useMemo(() => {
    const { quizList } = process;
    if (!quizList.length) return { question: '', examples: [], selected: -1 };
    return quizList[process.step] || { question: '', examples: [], selected: -1 };
  }, [process.step]);

  const onStepChange = useCallback(
    (step: number) => {
      if (step < 0 || step > process.quizList.length - 1) return;
      setProcess({ ...process, step });
    },
    [process],
  );

  const selectedAnswer = (selectedAnswer: number) => {
    const answerList = userAnswer.map((answer, index) => (index === process.step ? selectedAnswer : answer));
    setUserAnswer(answerList);
    setSubmitBtnDisable(answerList.some(answer => answer < 0));
    onStepChange(process.step + 1);
  };

  const handleSubmit = async () => {
    const answerCount = process.quizList.filter((curr, index) => curr.answerIndex === userAnswer[index]).length;
    mutate({ amount: process.amount, difficulty: process.difficulty, category: process.category , duration: time, answer: answerCount });
  };

  function timerCallback() {
    setTime(time + 1);
  }

  useLayoutEffect(() => {
    if (retry) return;
    refetch();
  }, []);

  return (
    <>
      <div>
        <TimeViewer seconds={time} passTime={timerCallback} delay={delay} />
      </div>
      <QuizListWarp>
        <Stepper activeStep={process.step} orientation="vertical" sx={{ maxHeight: 400 }}>
          {process.quizList.map(({ question, examples }, index) => (
            <Step key={`quiz-step-${index}`} completed={false} sx={{ maxHeight: 30 }}>
              <StepLabel>{`Question${index + 1}`}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <QuizWarp>
          <div>
            {question && (
              <QuizContent
                index={process.step}
                question={question.question}
                examples={question.examples}
                selectedAnswer={selectedAnswer}
                value={userAnswer[process.step] || -1}
              />
            )}
          </div>
          <ButtonWarp>
            {process.step > 0 && <Button onClick={() => onStepChange(process.step - 1)}> 이전 </Button>}
            {process.quizList.length - 1 > process.step && (
              <Button onClick={() => onStepChange(process.step + 1)}> 다음 </Button>
            )}
            <Button onClick={handleSubmit} disabled={submitBtnDisable}>
              완료
            </Button>
          </ButtonWarp>
        </QuizWarp>
      </QuizListWarp>
    </>
  );
};
