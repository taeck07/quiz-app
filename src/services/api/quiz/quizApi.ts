import { client } from './client';
import { QuizReqType } from '../../../types/api.type';

export const QuizApi = {
  get: async (query: QuizReqType) => await client.get('/', { params: query }),
};
