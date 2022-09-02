import { atom } from 'recoil';
import {KEY_RESULT_STATUS} from '../constant/keys';
import {ResultType} from "../types/result.type";

export const resultStatus = atom<ResultType>({
    key: KEY_RESULT_STATUS,
    default: {
        answerArr: [],
        resultId: 0,
    },
});
