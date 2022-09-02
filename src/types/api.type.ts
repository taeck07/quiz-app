export interface QuizReqType {
  amount: number;
  category: number;
  difficulty: string;
}

export interface QuizResType {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface PostResultsReqType {
  amount: number;
  answer: number;
  duration: number;
  difficulty: string;
  category: number;
}

export interface ResultsResType {}

const test = {
  response_code: 0,
  results: [
    {
      category: 'Entertainment: Film',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?',
      correct_answer: 'Harry Potter',
      incorrect_answers: ['Ted', 'Spy Kids', 'Pirates of the Caribbean '],
    },
    {
      category: 'Entertainment: Film',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Who starred as Bruce Wayne and Batman in Tim Burton&#039;s 1989 movie &quot;Batman&quot;?',
      correct_answer: 'Michael Keaton',
      incorrect_answers: ['George Clooney', 'Val Kilmer', 'Adam West'],
    },
    {
      category: 'Entertainment: Film',
      type: 'boolean',
      difficulty: 'easy',
      question: 'In the original Star Wars trilogy, Alec Guinness provided the voice for Darth Vader.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Entertainment: Film',
      type: 'multiple',
      difficulty: 'easy',
      question: 'The 2002 film &quot;28 Days Later&quot; is mainly set in which European country?',
      correct_answer: 'United Kingdom',
      incorrect_answers: ['France', 'Italy', 'Germany'],
    },
    {
      category: 'Entertainment: Film',
      type: 'boolean',
      difficulty: 'easy',
      question: 'George Lucas directed the entire original Star Wars trilogy.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Entertainment: Film',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Who plays the character of Po in the Kung Fu Panda movies?',
      correct_answer: 'Jack Black',
      incorrect_answers: ['Mirana Jonnes', 'McConahey Ramses', 'Jim Petersson'],
    },
    {
      category: 'Entertainment: Film',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What was the first feature-length computer-animated movie?',
      correct_answer: 'Toy Story',
      incorrect_answers: ['Tron', 'Lion king', '101 Dalmatians'],
    },
    {
      category: 'Entertainment: Film',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Which of these Movies was NOT released in 1996?',
      correct_answer: 'Gladiator',
      incorrect_answers: ['Independence Day', 'The Rock', 'Mission: Impossible'],
    },
    {
      category: 'Entertainment: Film',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Which of the following actors has only been in a Quentin Tarantino directed film once?',
      correct_answer: 'John Travolta',
      incorrect_answers: ['Christoph Waltz', 'Harvey Keitel', 'Samuel L. Jackson'],
    },
    {
      category: 'Entertainment: Film',
      type: 'multiple',
      difficulty: 'easy',
      question: 'The 1996 film &#039;Fargo&#039; is primarily set in which US state?',
      correct_answer: 'Minnesota',
      incorrect_answers: ['North Dakota', 'South Dakota', 'Wisconsin'],
    },
  ],
};
