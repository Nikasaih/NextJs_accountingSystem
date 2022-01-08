import { createContext, useState } from "react";
export const AppContext = createContext({});
import { nanoid } from "nanoid";

function ContextWrapper(props) {
  const { children, ...otherProps } = props;

  const initialState = [
    {
      id: nanoid(),
      count: "5651",
      justification: "justification 1",
      state: "pos",
    },
    {
      id: nanoid(),
      count: "43",
      justification: "justification 2",
      state: "neg",
    },
  ];
  const [data, setData] = useState(initialState);

  const addData = (newData, state) => {
    newData = { ...newData, id: nanoid(), state };

    setData([...data, newData]);
  };

  const test = { data, addData };
  return (
    <AppContext.Provider {...otherProps} value={test}>
      {children}
    </AppContext.Provider>
  );
}

export { ContextWrapper };
