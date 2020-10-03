import { useState } from "react";

// This is a custom hook
export const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);
  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.values,
      });
    },
  ];
};
