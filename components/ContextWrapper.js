import { createContext, useState } from "react";
export const AppContext = createContext({});

function ContextWrapper(props) {
  const { children, ...otherProps } = props;

  const initialState = [
    { count: "obj 1", justification: "" },
    { count: "obj 2", justification: "" },
  ];
  const [data, setData] = useState(initialState);
  const addData = (newData) => {
    setData(newData);
  };

  const test = { data, addData };
  return (
    <AppContext.Provider {...otherProps} value={test}>
      {children}
    </AppContext.Provider>
  );
}

export { ContextWrapper };
