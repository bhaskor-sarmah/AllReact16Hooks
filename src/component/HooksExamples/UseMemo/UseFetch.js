import React, { useRef, useState, useEffect } from "react";

// This is a custom hook
export const useFetch = (url) => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState((state) => ({
      data: state.data,
      loading: true,
    }));
    fetch(url)
      .then((res) => res.json())
      .then((text) => {
        if (isCurrent.current) {
          setState({
            data: text,
            loading: false,
          });
        }
      });
  }, [url, setState]);

  return state;
};
