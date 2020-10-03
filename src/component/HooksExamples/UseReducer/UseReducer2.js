import React, { useReducer, useState } from "react";

// npm install immer use-immer
// User immer for state mutation handling

function reducer(state, action) {
  switch (action.type) {
    case "SET_TODO":
      return {
        todos: [...state.todos, { text: action.payload, completed: false }],
      };
    default:
      return state;
  }
}

const UseReducer2 = () => {
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_TODO", payload: text });
    setText("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </>
  );
};

export default UseReducer2;
