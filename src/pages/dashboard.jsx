import React from 'react'
import { auth } from '../providers/firebase'
export default function Dashboard() {
  const user = auth.currentUser.displayName

  return <section>Dashboard, vous etes authentifié {user} </section>
}
