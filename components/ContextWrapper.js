import { createContext, useState } from "react";
import { nanoid } from "nanoid";

export const AppContext = createContext({});

function ContextWrapper(props) {
  const { children, ...otherProps } = props;

  const initialState = [
    {
      id: nanoid(),
      count: "51",
      justification: "justification 1",
      state: "earn",
    },
    {
      id: nanoid(),
      count: "1000000",
      justification: "Gagner au loto",
      state: "earn",
    },
    {
      id: nanoid(),
      count: "43",
      justification: "justification 2",
      state: "loose",
    },
    {
      id: nanoid(),
      count: "1000000",
      justification: "Corrompre M.KAZARIAN",
      state: "loose",
    },
  ];
  const [data, setData] = useState(initialState);

  const addData = (newData, state) => {
    newData = { ...newData, id: nanoid(), state };

    setData([...data, newData]);
  };

  const contextProps = { data, addData };
  return (
    <AppContext.Provider {...otherProps} value={contextProps}>
      {children}
    </AppContext.Provider>
  );
}

export { ContextWrapper };
