import React, { createContext, useState } from 'react'

const CountContext = createContext()

const CountProvider = ({ children }) => {
  const [counter, setCounter] = useState(0)

  const add = () => setCounter(counter + 1)
  const substract = () => setCounter(counter - 1)

  return (
    <CountContext.Provider value={{ counter, add, substract }}>
      {children}
    </CountContext.Provider>
  )
}

export { CountProvider, CountContext }
