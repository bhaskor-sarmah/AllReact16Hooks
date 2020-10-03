import React, { useEffect, useState } from "react";
import { CustomHook } from "./CustomHook";

const RefExample = () => {
  const [count, setCount] = useState(0);
  CustomHook(count);
  return (
    <div>
      This is a Toggle Component count is {count}
      <button onClick={() => setCount((c) => c + 1)}>Increment Counter</button>
    </div>
  );
};

export default RefExample;
