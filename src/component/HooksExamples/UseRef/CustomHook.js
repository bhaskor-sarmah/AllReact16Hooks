import { useState, useEffect, useRef } from "react";

// This is a custom hook
export const CustomHook = (count) => {
  const isMounted = useRef(true);
  const [data, setData] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData((data) => !data);
    }, 2000);
    // Set State variable after 2 seconds. It will show error
    // if component is unmounted during this call
  }, [count]);

  // This hook will be called once when component is mounted
  useEffect(() => {
    //This return will be called once when component is unmounted
    return () => {
      isMounted.current = false;
    };
  }, []);

  return data;
};
