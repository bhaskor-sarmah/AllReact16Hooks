import { render } from "@testing-library/react";

import { useRef } from "react";
export const useCountRenders = () => {
  const renders = useRef(0);
  console.log("renders: ", renders.current++);
};
