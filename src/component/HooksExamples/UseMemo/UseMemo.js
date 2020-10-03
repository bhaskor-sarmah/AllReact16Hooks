import React from "react";
import { useMemo, useCallback } from "react";
import { useState } from "react";
import { useFetch } from "./UseFetch";

export const UseMemo1 = () => {
  const [count, setCount] = useState(0);
  const { data } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json"
  );

  // Or we can move this function to outside of the compoment
  const computeLongestWord = useCallback((arr) => {
    if (!arr) {
      return [];
    }
    console.log("Computing Longest Word");
    let longestWord = "";

    arr.forEach((sentence) =>
      sentence.split(" ").forEach((word) => {
        if (word.length > longestWord.length) longestWord = word;
      })
    );

    return longestWord;
  }, []);

  // If we remove computeLongestWord to outside of the component,
  // then this need not to be passed as a dependency
  const longestWord = useMemo(() => computeLongestWord(data), [
    data,
    computeLongestWord,
  ]);

  return (
    <>
      <div>Count {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <div>{longestWord}</div>
    </>
  );
};
