import styled from 'styled-components';
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, CartesianGrid } from 'recharts';
import { useQuery } from 'react-query';
import { KEY_GET_STATISTICS } from '../../constant/keys';
import { resultsApi } from '../../services/api/results/resultsApi';

const ResultChartContent = styled.div``;

export const ResultStatisticsChart = () => {
  const { data, isLoading } = useQuery(KEY_GET_STATISTICS, resultsApi.getStatistics, {
    select: ({ data }) => {
      return data.statistics;
    },
  });
  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <ResultChartContent>
      <h3>통계</h3>
      <LineChart width={1000} height={350} data={data || []} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="easy" stroke="#8884d8" />
        <Line type="monotone" dataKey="medium" stroke="#82ca9d" />
        <Line type="monotone" dataKey="hard" stroke="rgb(241, 225, 91)" />
      </LineChart>
    </ResultChartContent>
  );
};
