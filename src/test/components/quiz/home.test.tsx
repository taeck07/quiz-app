import { Home } from '../../../pages/Home';
import { render, screen, fireEvent } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { processStatus } from '../../../recoil/processStatus';
import { RecoilObserver } from '../../utils/RecoilObserver';

describe('home', () => {
  const onChange = jest.fn();
  it('set quiz', async () => {
    render(
      <RecoilRoot>
        <RecoilObserver node={processStatus} onChange={onChange}/>
        <Home />
      </RecoilRoot>,
    );
    const category = screen.getByTestId('select-category') as Element;
    const count = screen.getByTestId('select-count') as Element;
    const difficulty = screen.getByTestId('select-difficulty') as Element;
    fireEvent.change(category, { target: { value: 12 } });
    fireEvent.change(count, { target: { value: 10 } });
    fireEvent.change(difficulty, { target: { value: 'medium' } });

    const submit = screen.getByTestId('submit') as Element;
    fireEvent.click(submit);

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith({category: 12, amount: 10, difficulty: 'medium'});
    expect(window.location.href).toContain('quiz');


  });
});
