import React from 'react'

export default function Title({ className, text, children }) {
  return (
    <h1 className={className}>
      {text} {children}{' '}
    </h1>
  )
}
