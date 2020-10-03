import React from "react";
import { useCountRenders } from "./UseCountRenders";

// React.memo only rerenders if the props are changed,
// By Default reacts rerender all the child if the parent is rerender
export const Square = React.memo(({ n, increment }) => {
  useCountRenders();
  return (
    <div>
      <button onClick={() => increment(n)}>{n}</button>
    </div>
  );
});
