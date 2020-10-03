import React, { useState } from "react";
import { useRef } from "react";
import RefExample from "./RefExample";

export const UseRef1 = () => {
  // UseRef is used to store a reference to a variable, function, Component, or Html Element etc..
  const inputRef = useRef();
  return (
    <div>
      <input type='text' ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus
      </button>
    </div>
  );
};

export const UseRef2 = () => {
  const [isVisible, setIsVisible] = useState(true);

  const inputRef = useRef();
  // Uses to store a function
  const hello = useRef(() => console.log("hello"));

  return (
    <div>
      <input type='text' ref={inputRef} value={isVisible} />
      {isVisible && <RefExample />}
      <button
        onClick={() => {
          inputRef.current.focus();
          hello.current();
          setIsVisible((isVisible) => !isVisible);
        }}
      >
        Toggle Component
      </button>
    </div>
  );
};
