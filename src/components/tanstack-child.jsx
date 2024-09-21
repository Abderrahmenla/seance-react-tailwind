import React from 'react'
import axios from 'axios'
import { useQuery, useMutation } from '@tanstack/react-query'

export default function TanStackChild() {
  const mutation = useMutation({
    mutationFn: (nouveauPrix) => {
      console.log(nouveauPrix)
      return axios.put(`http://localhost:3001/api/v1/items/${nouveauPrix.id}`, {
        price: nouveauPrix.price,
      })
    },
  })
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['items'],
    queryFn: async () => {
      console.log('hello from the async req')
      const response = await fetch('http://localhost:3001/api/v1/items')
      console.log(response)
      return await response.json()
    },
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  console.log(data)
  return (
    <div className="flex flex-col gap-5">
      <span>Redux child component</span>
      <div className="flex items-center gap-2">
        {data.map((item, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <span className="font-semibold text-3xl leading-6 text-center">
              {item.name}
            </span>
            <button
              onClick={() => {
                mutation.mutate({ id: item.id, price: item.price + 1 })
              }}
              className="border border-solid border-black p-3 rounded-lg"
            >
              Augmenter le prix
            </button>
            <button
              onClick={() => {
                mutation.mutate({ id: item.id, price: item.price - 1 })
              }}
              className="border border-solid border-black p-3 rounded-lg"
            >
              Diminuer le prix
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
