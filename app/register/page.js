'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Register(){
  const router = useRouter()
  const [form, setForm] = useState({name:'', email:'', password:''})

  const handleRegister = (e) => {
    e.preventDefault()
    alert('Demo register — implement server-side user creation')
    router.push('/login')
  }

  return (
    <div className="container px-4 py-12 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Create account</h1>
      <form onSubmit={handleRegister} className="space-y-3">
        <input value={form.name} onChange={e=>setForm({...form, name: e.target.value})} className="w-full border p-2 rounded" placeholder="Full name" />
        <input value={form.email} onChange={e=>setForm({...form, email: e.target.value})} className="w-full border p-2 rounded" placeholder="Email" />
        <input value={form.password} onChange={e=>setForm({...form, password: e.target.value})} type="password" className="w-full border p-2 rounded" placeholder="Password" />
        <button className="w-full bg-blue-600 text-white py-2 rounded">Register</button>
      </form>
    </div>
  )
}
