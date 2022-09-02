import { client } from './client';
import { PostResultsReqType } from '../../../types/api.type';

export const resultsApi = {
  get: async () => client.get('/results'),
  set: async ({ difficulty, amount, duration, answer, category }: PostResultsReqType) =>
    client.post('/results', { difficulty, amount, duration, answer, category }),
  getStatistics: async ()=> client.get('/result/statistics'),
};
