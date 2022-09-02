import styled from 'styled-components';
import { useLayoutEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { processStatus } from '../recoil/processStatus';
import { QuizList } from '../components/quizList';

const QuizContainer = styled.div``;

export const Quiz = () => {
  const { quizList } = useRecoilValue(processStatus);

  useLayoutEffect(() => {
  }, []);

  return (
    <QuizContainer>
      <QuizList retry={!!quizList.length}/>
    </QuizContainer>
  );
};
