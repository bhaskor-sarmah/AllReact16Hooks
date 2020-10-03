import React, { useState } from "react";
import { useForm } from "./UseForm";

export const UseState1 = () => {
  const [count, setCount] = useState(10);
  // This is called once per component to initialize the state.
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((oldCount) => oldCount + 1)}>+</button>
    </>
  );
};

export const UseState2 = () => {
  const [{ count, count2 }, setCount] = React.useState({
    count: 10,
    count2: 20,
  });
  return (
    <>
      <p>Count1 - {count}</p>
      <p>Count2 - {count2}</p>
      <button
        onClick={() =>
          setCount((oldState) => {
            return {
              ...oldState,
              count: oldState.count + 1,
            };
          })
        }
      >
        +
      </button>
    </>
  );
};

export const UseState3 = () => {
  const [values, handleChamge] = useForm({ email: "", password: "" });
  return (
    <>
      <input
        type='email'
        name='email'
        values={values.email}
        onChage={handleChamge}
      />
      <input
        type='password'
        name='password'
        values={values.password}
        onChage={handleChamge}
      />
    </>
  );
};
