import { useState } from 'react';
import styled from 'styled-components';
import {Button, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent} from '@mui/material';
import { useRecoilState } from 'recoil';
import { processStatus } from '../recoil/processStatus';
import { useNavigate } from 'react-router-dom';
import {CategoryList} from "../constant/category";

const HomeContainer = styled.div``;
const CountArray = Array.from({length: 6}, (_, index) => index+5);

export const Home = () => {
  let navigate = useNavigate();
  const [process, setProcess] = useRecoilState(processStatus);
  const [category, setCategory] = useState(CategoryList[0].value);
  const [count, setCount] = useState(5);
  const [difficulty, setDifficulty] = useState('easy');

  const onStartHandler = () => {
    setProcess({ ...process, category, amount: count, difficulty });
    navigate('/quiz');
  };

  const onCategoryChange = (event: SelectChangeEvent) => {
    setCategory(parseInt(event.target.value));
  };

  const onCountChange = (event: SelectChangeEvent) => {
    setCount(parseInt(event.target.value));
  };

  const onDifficultyChange = (event: SelectChangeEvent) => {
    setDifficulty(event.target.value);
  };

  return (
    <HomeContainer>
      <div>
        <FormControl  sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            value={category+''}
            label="Category"
            onChange={onCategoryChange}
            autoWidth
            data-testid="select-category"
          >
            {
              CategoryList.map(({value, label}) => <MenuItem value={value} key={value}> {label}</MenuItem>)
            }
          </Select>
        </FormControl>
        <FormControl  sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-label">Count</InputLabel>
          <Select
              value={count+''}
              label="Count"
              onChange={onCountChange}
              autoWidth
              data-testid="select-count"
          >
            {
              CountArray.map((value, label) => <MenuItem value={value} key={value}>{value}</MenuItem>)
            }
          </Select>
        </FormControl>
        <FormControl  sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
          <Select
              value={difficulty}
              label="Difficulty"
              onChange={onDifficultyChange}
              autoWidth
              data-testid="select-difficulty"
          >
            <MenuItem value="easy">??????</MenuItem>
            <MenuItem value="medium">??????</MenuItem>
            <MenuItem value="hard">?????????</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <Button onClick={onStartHandler} data-testid='submit'>Start</Button>
      </div>
    </HomeContainer>
  );
};
