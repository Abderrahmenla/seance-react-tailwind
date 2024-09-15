import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/slices/counter'
import { selectCount } from '../store/slices/counter'
export default function ReduxChild() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col gap-5">
      <span>Redux child component</span>
      <span className="font-semibold text-3xl leading-6 text-center">
        {count}
      </span>
      <div className="flex items-center justify-center w-full p-4 border border-solid border-[#000] gap-4 mt-5">
        <button
          className="border border-solid border-black p-3 rounded-lg"
          onClick={() => dispatch(increment())}
        >
          Add
        </button>
        <button
          className="border border-solid border-black p-3 rounded-lg"
          onClick={() => dispatch(decrement())}
        >
          Substract
        </button>
      </div>
    </div>
  )
}
