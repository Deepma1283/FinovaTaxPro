// import { SERVICES } from '../../../data/services'
// import Link from 'next/link'

// export default function ServiceDetail({ params }) {
//   const slug = params.slug
//   let service = null
//   for(const cat of SERVICES){
//     const found = cat.sub.find(s => s.slug === slug)
//     if(found){ service = { ...found, category: cat }; break }
//   }
//   if(!service) return <div className="container px-4 py-12">Service not found</div>

//   return (
//     <div className="container px-4 py-12">
//       <h1 className="text-3xl font-bold mb-3">{service.title}</h1>
//       <p className="text-gray-600 mb-6">Part of <Link href={`/category/${service.category.slug}`} className="underline">{service.category.title}</Link></p>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="md:col-span-2">
//           <h3 className="font-semibold mb-2">What this service includes</h3>
//           <ul className="list-disc pl-5 text-gray-700 mb-4">
//             <li>Document preparation</li>
//             <li>Filing with authorities</li>
//             <li>Support until closure</li>
//           </ul>

//           <h3 className="font-semibold mb-2">How it works</h3>
//           <ol className="list-decimal pl-5 text-gray-700 mb-6">
//             <li>Place order</li>
//             <li>Upload documents</li>
//             <li>We file & update</li>
//           </ol>

//           <h3 className="font-semibold mb-2">Frequently asked questions</h3>
//           <div className="text-gray-700">Q: Timeline? A: 7-21 days typical depending on service.</div>
//         </div>

//         <aside className="p-4 border rounded">
//           <div className="mb-4">
//             <div className="text-sm text-gray-600">Price</div>
//             <div className="text-2xl font-bold">₹{service.price}</div>
//           </div>
//           <Link href={`/checkout?service=${service.slug}`} className="block bg-green-600 text-white text-center py-2 rounded mb-2">Register / Buy</Link>
//           <Link href="/contact" className="block text-center py-2">Contact us</Link>
//         </aside>
//       </div>
//     </div>
//   )
// }
// app/services/[slug]/page.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { findServiceBySlug, getAllCategories } from '../../../data/services';

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [service, setService] = useState<any>(null);
  const [categorySlug, setCategorySlug] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slug = params?.slug as string;
    const serviceData = findServiceBySlug(slug);
    setService(serviceData);
    
    // Find the correct category slug
    if (serviceData) {
      const categories = getAllCategories();
      const foundCategory = categories.find(cat => 
        cat.services.some(s => s.slug === serviceData.slug)
      );
      if (foundCategory) {
        setCategorySlug(foundCategory.slug);
      }
    }
    
    setLoading(false);
    
    // Check login status from localStorage
    if (typeof window !== 'undefined') {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    }
  }, [params]);

  const handleRegisterNow = () => {
    if (!isLoggedIn) {
      // Store service details for after login
      if (typeof window !== 'undefined') {
        localStorage.setItem('pendingService', JSON.stringify(service));
        localStorage.setItem('returnUrl', window.location.pathname);
      }
      router.push('/register');
    } else {
      // Store service in cart and go to checkout
      if (typeof window !== 'undefined') {
        const existingCart = localStorage.getItem('cartItems');
        const cart = existingCart ? JSON.parse(existingCart) : [];
        
        // Check if service already in cart
        const isInCart = cart.some((item: any) => item.slug === service.slug);
        if (!isInCart) {
          cart.push(service);
          localStorage.setItem('cartItems', JSON.stringify(cart));
        }
      }
      router.push('/checkout');
    }
  };

  const handleContactExpert = () => {
    router.push('/contact');
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  // Service not found
  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
          <Link 
            href="/#services"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Browse All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/#services" className="hover:text-blue-600 transition">Services</Link>
            {categorySlug && (
              <>
                <span className="mx-2">/</span>
                <Link href={`/services/category/${categorySlug}`} className="hover:text-blue-600 transition">
                  {service.category}
                </Link>
              </>
            )}
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{service.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8">
              {/* Service Header */}
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-3xl mr-4 flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                      {service.category}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{service.title}</h1>
                  <p className="text-gray-600 text-lg">{service.short}</p>
                </div>
              </div>

              {/* Full Description */}
              <div className="prose max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed text-lg">{service.fullDescription}</p>
              </div>

              {/* Features Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    ✓
                  </span>
                  What's Included
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    📋
                  </span>
                  Documents Required
                </h2>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <ul className="space-y-3">
                    {service.requirements.map((req: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-600 mr-3 font-bold">•</span>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Deliverables Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    📦
                  </span>
                  What You'll Receive
                </h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <ul className="space-y-3">
                    {service.deliverables.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-3 text-xl">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Why Choose Us Section */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose FinovaTaxPro?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Team</h4>
                      <p className="text-sm text-gray-600">Qualified CAs and legal experts</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Quick Turnaround</h4>
                      <p className="text-sm text-gray-600">Fast processing and delivery</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Transparent Pricing</h4>
                      <p className="text-sm text-gray-600">No hidden charges</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Post-Service Support</h4>
                      <p className="text-sm text-gray-600">Ongoing assistance included</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Price & CTA */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              {/* Pricing */}
              <div className="text-center mb-6 pb-6 border-b">
                <div className="text-sm text-gray-600 mb-2">Starting at</div>
                <div className="text-4xl font-bold text-gray-900">{service.price_display}</div>
                <div className="text-sm text-gray-500 mt-2">+ Government fees (if applicable)</div>
              </div>

              {/* Key Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Delivery Time</div>
                    <div className="text-sm text-gray-600">{service.timeline}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Expert Support</div>
                    <div className="text-sm text-gray-600">Qualified professionals</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">24/7 Assistance</div>
                    <div className="text-sm text-gray-600">Always available</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={handleRegisterNow}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {isLoggedIn ? '🛒 Proceed to Checkout' : '🚀 Get Started Now'}
                </button>

                <button
                  onClick={handleContactExpert}
                  className="w-full border-2 border-blue-600 text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-50 transition font-semibold"
                >
                  💬 Talk to Expert
                </button>
              </div>

              {/* Contact Information */}
              <div className="pt-6 border-t">
                <div className="text-sm font-semibold text-gray-900 mb-3">Need Help?</div>
                <div className="space-y-3">
                  <a href="tel:+919876543210" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 98765 43210
                  </a>
                  <a href="mailto:info@finovataxpro.com" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@finovataxpro.com
                  </a>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-600 hover:text-green-600 transition">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t">
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-600">500+</div>
                    <div className="text-xs text-gray-600">Happy Clients</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-blue-600">4.8★</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}