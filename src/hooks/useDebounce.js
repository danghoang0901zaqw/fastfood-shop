import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [valueDebounce, setValueDebounce] = useState(value);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setValueDebounce(value);
    }, delay);
    return () => clearTimeout(timerId);
  }, [value,delay]);
  return valueDebounce;
};

export default useDebounce;
