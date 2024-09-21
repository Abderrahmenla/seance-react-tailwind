import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
export default function TanStackQueryClient({ children }) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
