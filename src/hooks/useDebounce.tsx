import { useEffect, useState } from "react";

export const useDebounce = <T,>(value: T, timeout: number): T => {
  const [state, setState] = useState<T>(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => setState(value), timeout);

    return () => clearTimeout(timeoutId);
  }, [value, timeout]);

  return state;
};
