'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function Login(){
  const router = useRouter()
  const search = useSearchParams()
  const next = search.get('next') || '/'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Replace this with a real auth system (NextAuth / custom)
    alert('Demo login — implement real auth')
    router.push(next)
  }

  return (
    <div className="container px-4 py-12 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="space-y-3">
        <input value={email} onChange={e=>setEmail(e.target.value)} className="w-full border p-2 rounded" placeholder="Email" />
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" className="w-full border p-2 rounded" placeholder="Password" />
        <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
      </form>
      <p className="text-sm mt-3">Don’t have an account? <a href="/register" className="text-blue-600">Register</a></p>
    </div>
  )
}
