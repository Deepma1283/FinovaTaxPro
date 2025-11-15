'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SERVICES } from '../../data/services'

export default function Checkout(){
  const params = useSearchParams()
  const router = useRouter()
  const slug = params.get('service')
  const [service, setService] = useState(null)

  useEffect(()=>{
    if(!slug) return
    for(const cat of SERVICES){
      const found = cat.sub.find(s => s.slug === slug)
      if(found){ setService({...found, category: cat}); break }
    }
  }, [slug])

  if(!service) return <div className="container px-4 py-12">Select a service to checkout.</div>

  const handlePay = async () => {
    // Mock auth check: replace with real auth logic
    const isLoggedIn = false
    if(!isLoggedIn){
      router.push(`/login?next=/checkout?service=${slug}`)
      return
    }
    // In production: call server /api/checkout to create a payment session
    alert('Demo payment flow. Integrate Stripe/Razorpay server-side.')
    router.push('/order-success')
  }

  return (
    <div className="container px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 border p-4 rounded">
          <h3 className="font-semibold mb-2">Customer details</h3>
          <input className="w-full border p-2 rounded mb-2" placeholder="Name" />
          <input className="w-full border p-2 rounded mb-2" placeholder="Email" />
          <input className="w-full border p-2 rounded mb-2" placeholder="Phone" />
        </div>

        <aside className="p-4 border rounded">
          <div className="mb-4">
            <div className="text-sm text-gray-600">Service</div>
            <div className="font-semibold">{service.title}</div>
            <div className="text-2xl font-bold">₹{service.price}</div>
          </div>
          <button onClick={handlePay} className="w-full bg-blue-600 text-white py-2 rounded">Proceed to payment</button>
          <p className="text-xs text-gray-500 mt-2">Demo flow — integrate Stripe/Razorpay for live payments.</p>
        </aside>
      </div>
    </div>
  )
}
