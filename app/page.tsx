import Hero from '../components/home/hero'
import Services from '../components/home/Services'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Testimonials from '../components/home/Testimonial'
import CTA from '../components/home/CTA'

export default function Page(){
  return (
    <>
      <Hero />
      <ValueProposition />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  )
}

// Value Proposition Section (inline component)
function ValueProposition() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to File and Grow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We simplify the complexities of tax compliance so you can focus on what you do best
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Guidance</h3>
            <p className="text-gray-600">
              Our specialists are here to help you navigate every step of the process, ensuring everything is done right.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Pricing</h3>
            <p className="text-gray-600">
              No hidden fees or surprises. We provide clear, upfront costs for all our services.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Lifetime Support</h3>
            <p className="text-gray-600">
              We're with you for the long haul, offering support and resources throughout your business journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}