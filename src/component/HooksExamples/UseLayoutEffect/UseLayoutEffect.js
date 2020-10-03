import React, { useLayoutEffect, useRef } from "react";

export const UseLayoutEffect = () => {
  const inputRef = useRef();
  useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect());
  }, []);
  return (
    <div>
      <input type='text' ref={inputRef} />
    </div>
  );
};
