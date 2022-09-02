import { QuizResType } from '../types/api.type';
import { QuizType } from '../types/processStatus.type';

export const quizUtil = (quizList: QuizResType[]): QuizType[] => {
  return quizList.map(({ question, correct_answer, incorrect_answers }) => {
    const answerIndex = Math.floor(Math.random() * 3);
    let examples: string[] = incorrect_answers.sort(() => Math.random() - 0.5);
    examples.splice(answerIndex, 0, correct_answer);
    return {
      question,
      examples,
      answerIndex,
    };
  });
};
