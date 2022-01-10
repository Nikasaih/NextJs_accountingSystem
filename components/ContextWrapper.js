import { createContext, useState } from "react"

export const AppContext = createContext({})

function ContextWrapper(props) {
  const { children, ...otherProps } = props

  const initialState = [
    {
      count: "51",
      justification: "justification 1",
      state: "earn",
    },
    {
      count: "1000000",
      justification: "Gagner au loto",
      state: "earn",
    },
    {
      count: "43",
      justification: "justification 2",
      state: "loose",
    },
    {
      count: "1000000",
      justification: "Corrompre M.KAZARIAN",
      state: "loose",
    },
  ]
  const [data, setData] = useState(initialState)

  const addData = (newData, state) => {
    newData = { ...newData, state }

    setData([...data, newData])
  }

  const contextProps = { data, addData }

  return (
    <AppContext.Provider {...otherProps} value={contextProps}>
      {children}
    </AppContext.Provider>
  )
}

export { ContextWrapper }
