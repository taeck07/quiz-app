import { ResultContent } from '../components/result';
import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {resultStatus} from "../recoil/resultStatus";
import styled from "styled-components";

const ResultContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 50px 0;
`;

export const Result = () => {
  const navigate = useNavigate();
  const { resultId } = useRecoilValue(resultStatus);
  useLayoutEffect(() => {
    if (!resultId) {
      navigate('/');
      return;
    }
  }, [navigate, resultId]);
  return (
    <ResultContainer>
      <ResultContent />
    </ResultContainer>
  );
};
