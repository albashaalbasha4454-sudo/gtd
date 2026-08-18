import { QuizQuestion } from '../types/immunology';
import { QUIZ_QUESTIONS_PART_1 } from './quizQuestionsPart1';
import { QUIZ_QUESTIONS_PART_2 } from './quizQuestionsPart2';
import { QUIZ_QUESTIONS_PART_3 } from './quizQuestionsPart3';
import { QUIZ_QUESTIONS_PART_4 } from './quizQuestionsPart4';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  ...QUIZ_QUESTIONS_PART_1,
  ...QUIZ_QUESTIONS_PART_2,
  ...QUIZ_QUESTIONS_PART_3,
  ...QUIZ_QUESTIONS_PART_4
];

export {
  QUIZ_QUESTIONS_PART_1,
  QUIZ_QUESTIONS_PART_2,
  QUIZ_QUESTIONS_PART_3,
  QUIZ_QUESTIONS_PART_4
};
