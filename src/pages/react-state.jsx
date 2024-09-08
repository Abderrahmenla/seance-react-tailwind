import React from 'react'
import Child from '../components/child'
import { CountProvider } from '../hooks/count'

export default function ReactState() {
  return (
    <CountProvider>
      <div className="h-screen w-full flex flex-col gap-10">
        <Child />
      </div>
    </CountProvider>
  )
}
