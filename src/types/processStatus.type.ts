export interface StatusType {
  step: number;
  duration: number;
  quizList: QuizType[];
  category: number;
  difficulty: string;
  amount: number;
}

export interface QuizType {
  question: string;
  examples: string[];
  answerIndex: number;
}

