import styled from 'styled-components';
import { ResultStatisticsChart } from './ResultStatisticsChart';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { resultStatus } from '../../recoil/resultStatus';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { processStatus } from '../../recoil/processStatus';

const ResultContainer = styled.div``;

const ResultTable = styled.div`
  display: grid;
  grid-auto-rows: 50px;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  width: auto;
`;

const ResultCell = styled.div`
  border: 1px solid #f1f1f3;
  border-collapse: collapse;
  display: flex;
  flex-direction: column;

  > div {
    &:first-of-type {
      border-bottom: 1px solid #fefefe;
    }
    height: 50%;
  }
`;

export const ResultContent = () => {
  const navigate = useNavigate();
  const { answerArr } = useRecoilValue(resultStatus);
  const setResultStatus = useResetRecoilState(resultStatus);
  const setProcessStatus = useResetRecoilState(processStatus);

  const onHandleTry = (retry: boolean) => {
    retry && setProcessStatus();
    setResultStatus();
    navigate('/quiz');
  };

  return (
    <ResultContainer>
      <div>
        <h2>결과</h2>
        <div>
          <ResultTable>
            {answerArr.map((result, index) => (
              <ResultCell key={`result_cell_${index}`}>
                <div>{index + 1}번</div>
                <div>{result ? 'O' : 'X'}</div>
              </ResultCell>
            ))}
          </ResultTable>
        </div>
        <div>
          <Button onClick={() => onHandleTry(true)}>Retry</Button>
          <Button onClick={() => onHandleTry(false)}>Home</Button>
        </div>
      </div>
      <ResultStatisticsChart />
    </ResultContainer>
  );
};
