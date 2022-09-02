import { useRef, useEffect } from 'react';

export function useInterval(callback: Function, delay?: number) {
  const savedCallback = useRef<Function>(() => {});
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
      function tick() {
          savedCallback.current();
      }
      if (delay) {
          let id = setInterval(tick, delay);
          return () => clearInterval(id);
      }
  }, [delay]);
}
