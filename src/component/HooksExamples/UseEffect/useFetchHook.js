import React from "react";

// This is a custom hook
export const useFetch = (url) => {
  const [state, setState] = React.useState({ data: null, loading: true });

  React.useEffect(() => {
    setState((state) => ({
      data: state.data,
      loading: true,
    }));
    fetch(url)
      .then((res) => res.text())
      .then((text) =>
        setState({
          data: text,
          loading: false,
        })
      );
  }, [url, setState]);

  return state;
};
