import React, { useContext } from 'react'
import { CountContext } from '../hooks/count'

export default function ChildChild() {
  const { counter, add, substract } = useContext(CountContext)
  return (
    <div className="flex flex-col gap-5">
      <span>Child Child component</span>
      <span className="font-semibold text-3xl leading-6 text-center">
        {counter}
      </span>
      <div className="flex items-center justify-center w-full p-4 border border-solid border-[#000] gap-4 mt-5">
        <button
          className="border border-solid border-black p-3 rounded-lg"
          onClick={add}
        >
          Add
        </button>
        <button
          className="border border-solid border-black p-3 rounded-lg"
          onClick={substract}
        >
          Substract
        </button>
      </div>
    </div>
  )
}
