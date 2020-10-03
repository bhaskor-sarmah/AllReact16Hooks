import React, { useEffect } from "react";
import UseEffectExample from "./UseEffectExample";
import { useFetch } from "./useFetchHook";

export const UseEffect1 = () => {
  const [toggle, setToggle] = React.useState(true);
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle Div</button>
      {toggle && <UseEffectExample />}
    </div>
  );
};

export const UseEffect2 = () => {
  const [count, setCount] = React.useState(
    JSON.parse(localStorage.getItem("count")) || 0
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      {loading && !data ? <div>Loading...</div> : data}
      {/*Without loading... for each request */}
      {/* {loading ? <div>Loading...</div> : data} */}
      {/*With loading... for each request*/}
      <br />
      <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
    </div>
  );
};
