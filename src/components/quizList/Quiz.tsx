import styled from 'styled-components';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

const QuizContentWarp = styled.div`
  > div {
    margin-bottom: 30px;
  }
`;

type Props = {
  index: number;
  question: string;
  examples: string[];
  selectedAnswer: (step: number) => void;
  value?: number;
};

export const QuizContent = ({ index, question, examples, selectedAnswer, value }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    selectedAnswer(parseInt((event.target as HTMLInputElement).value));
  };
  return (
    <QuizContentWarp>
      <div>{question}</div>
      <RadioGroup name={`quiz-${index}`} onChange={handleChange} value={value}>
        {examples.map((answer, answerIndex) => (
          <FormControlLabel key={`answers-${answerIndex}`} control={<Radio />} label={answer} value={answerIndex} />
        ))}
      </RadioGroup>
    </QuizContentWarp>
  );
};
