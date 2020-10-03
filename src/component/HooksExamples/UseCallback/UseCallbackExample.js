import React from "react";
import { useCountRenders } from "./UseCountRenders";

// React.memo only rerenders if the props are changed,
// By Default reacts rerender all the child if the parent is rerender
export const UseCallbackExample = React.memo(({ increment }) => {
  // useCountRenders();
  // Uncomment for checking UseCallback1
  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
});
