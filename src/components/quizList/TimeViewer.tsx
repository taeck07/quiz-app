import styled from 'styled-components';
import { useCallback } from 'react';
import moment from 'moment';
import { useInterval } from '../../hooks/useInterval';

const TimeContainer = styled.div``;

type PropTypes = {
  seconds: number;
  delay?: number;
  passTime: () => void;
};

export const TimeViewer = ({ seconds, delay, passTime }: PropTypes) => {

  useInterval(timeCallback, delay);

  function timeCallback() {
    passTime();
  }

  const timeFormat = useCallback(
    (second: number) => {
      return moment.utc(second * 1000).format('HH:mm:ss');
    },
    [],
  );

  return <TimeContainer>{timeFormat(seconds)}</TimeContainer>;
};
