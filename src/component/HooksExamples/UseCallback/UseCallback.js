import React, { useState, useCallback } from "react";
import { Square } from "./Square";
import { UseCallbackExample } from "./UseCallbackExample";

export const UseCallback1 = () => {
  const [count, setCount] = useState(0);

  // This creates the function each time the component rerenders,
  // but the function created is same each time and so,
  // React.memo in the child component doesnot rerenders the child component
  // We can add parameter to this eg useCallback((n) ..., that will be the first parameter to the function
  // It can also return a value
  const increment = useCallback(() => setCount((c) => c + 1), [setCount]);

  // But this below line will create a new fucntion every time as its depends on count which changes
  // So React.memo in the child component will rerenders the child component
  // const increment = useCallback(() => setCount(count + 1), [count, setCount]);

  // Most of the time it's used when React.memo is used in the child component
  // Other use case, we might have a useEffect that depends on a function,
  // this might prevent the useEffect from firing during rerendering eg
  // useEffect(() => {
  // do something
  // },[increment]);

  return (
    <div>
      {/*The below line makes the child component rerender because each rerender 
      of this component the increment funtion is created again and so 
      React.memo rerenders the child because the props changed*/}
      {/* <UseCallback increment={() => setCount(count + 1)} /> */}
      {/** The below line use useCallback fucntion to stop 
          creating the function each time the component re renders,
          hence the child component will never rerender if the parent is rerendered */}
      <UseCallbackExample increment={increment} />
      <div>Count {count}</div>
    </div>
  );
};

export const UseCallback2 = () => {
  const [count, setCount] = useState(0);

  const favNumbers = [7, 21, 27];

  const increment = useCallback((n) => setCount((c) => c + n), [setCount]);
  return (
    <div>
      <UseCallbackExample increment={increment} />
      <div>Count {count}</div>
      {favNumbers.map((num) => {
        // eslint-disable-next-line no-lone-blocks
        {
          /**The below is the issue of rerendering */
          /* return <Square onClick={() => increment(num)} n={num} key={num} />; */
        }
        return <Square increment={increment} n={num} key={num} />;
      })}
    </div>
  );
};
