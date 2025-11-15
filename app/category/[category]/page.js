import { SERVICES } from '../../../data/services'
import Link from 'next/link'

export default function CategoryPage({ params }) {
  const cat = SERVICES.find(c => c.slug === params.category)
  if(!cat) return <div className="container px-4 py-12">Category not found</div>

  return (
    <div className="container px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{cat.title}</h1>
      <p className="text-gray-600 mb-6">{cat.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cat.sub.map(s => (
          <div key={s.id} className="border p-4 rounded">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-gray-600 mb-3">Starting at ₹{s.price}</p>
            <Link href={`/services/${s.slug}`} className="inline-block bg-blue-600 text-white px-3 py-1 rounded">View service</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
