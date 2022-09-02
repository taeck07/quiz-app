import { atom } from 'recoil';
import { StatusType } from '../types/processStatus.type';
import { KEY_PROCESS_STATUS } from '../constant/keys';

export const processStatus = atom<StatusType>({
  key: KEY_PROCESS_STATUS,
  default: {
    step: -1,
    duration: 0,
    difficulty: '',
    quizList: [],
    category: 0,
    amount: 0,
  },
});
