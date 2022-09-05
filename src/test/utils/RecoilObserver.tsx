import { RecoilValue, useRecoilValue } from 'recoil';
import { useEffect } from 'react';

type Props = {
  node: RecoilValue<any>;
  onChange: (value: any) => void;
};

export const RecoilObserver = ({ node, onChange }: Props) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
};
