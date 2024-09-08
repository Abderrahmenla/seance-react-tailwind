import React, { useReducer } from 'react'
import ChildChild from './child-child'
import { useContext } from 'react'
import { CountContext } from '../hooks/count'
import {
  initialState,
  filterReducer,
  handleCountryChange,
  handleLastNameChange,
  handleNameChange,
  handleUserNameChange,
  handlePhoneNumberChange,
} from '../store/child'

export default function Child() {
  const { counter, add, substract } = useContext(CountContext)
  const [filters, dispatch] = useReducer(filterReducer, initialState)

  return (
    <div className="flex flex-col gap-5">
      <span>Child component</span>
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
      <ChildChild />

      <section className="flex flex-col gap-4 mt-10 px-10">
        <div className="flex items-center gap-2 justify-start">
          <span>Name :</span>
          <span>{filters.name}</span>
          <input
            type="text"
            className="rounded bg-gray-100 px-4 py-2 border focus:border-green-400"
            placeholder="Write your name"
            value={filters.name}
            onChange={(e) => handleNameChange(e.target.value, dispatch)}
          />
        </div>
        <div className="flex items-center gap-2 justify-start">
          <span>Last Name :</span>
          <span>{filters.lastName}</span>
          <input
            type="text"
            className="rounded bg-gray-100 px-4 py-2 border focus:border-green-400"
            placeholder="Write your last name"
            value={filters.lastName}
            onChange={(e) => handleLastNameChange(e.target.value, dispatch)}
          />
        </div>
        <div className="flex items-center gap-2 justify-start">
          <span>Username :</span>
          <span>{filters.userName}</span>
          <input
            type="text"
            className="rounded bg-gray-100 px-4 py-2 border focus:border-green-400"
            placeholder="Write your username"
            value={filters.userName}
            onChange={(e) => handleUserNameChange(e.target.value, dispatch)}
          />
        </div>
        <div className="flex items-center gap-2 justify-start">
          <span>Country :</span>
          <span>{filters.country}</span>
          <input
            type="text"
            className="rounded bg-gray-100 px-4 py-2 border focus:border-green-400"
            placeholder="Write your country"
            value={filters.country}
            onChange={(e) => handleCountryChange(e.target.value, dispatch)}
          />
        </div>
        <div className="flex items-center gap-2 justify-start">
          <span>Phone :</span>
          <span>{filters.phoneNumber}</span>
          <input
            type="text"
            className="rounded bg-gray-100 px-4 py-2 border focus:border-green-400"
            placeholder="Provide us with your phone number"
            value={filters.phoneNumber}
            onChange={(e) => handlePhoneNumberChange(e.target.value, dispatch)}
          />
        </div>
      </section>
    </div>
  )
}
