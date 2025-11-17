'use client';
import { useRouter, useParams } from 'next/navigation';
import { getCategoryBySlug } from '../../../../data/services';
import Card from '../../../../components/ui/card';

export default function CategoryPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  
  const category = getCategoryBySlug(slug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center px-4">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-6">
            The category "{slug}" doesn't exist or may have been moved.
          </p>
          <button
            onClick={() => router.push('/#services')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Back to All Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container px-4 max-w-7xl mx-auto">
        {/* Back Button & Header */}
        <div className="mb-8">
          <button
            onClick={() => router.push('/#services')}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-6 font-medium transition group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Categories
          </button>
          
          {/* Category Header */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center text-4xl shadow-lg">
              {category.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {category.title}
              </h1>
              <p className="text-lg text-gray-600">{category.description}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold">
              {category.services.length} {category.services.length === 1 ? 'Service' : 'Services'} Available
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {category.services.map((service) => (
            <div
              key={service.slug}
              onClick={() => router.push(`/services/${service.slug}`)}
              className="cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Card>
                {/* Service Icon & Title */}
                <div className="flex items-start mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-2xl mr-3 flex-shrink-0 shadow-md">
                    {service.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-gray-900 hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                {/* Service Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {service.short}
                </p>
                
                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Starting at</div>
                    <div className="text-2xl font-bold text-blue-600">
                      {service.price_display}
                    </div>
                  </div>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center text-sm group">
                    View Details
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Help Choosing the Right Service?
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Our expert advisors are ready to guide you through the process and help you select the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/contact')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                💬 Talk to Expert
              </button>
              <button
                onClick={() => router.push('/#services')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition font-semibold text-lg"
              >
                Browse All Categories
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-blue-500 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-blue-200 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">4.8★</div>
                <div className="text-blue-200 text-sm">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-blue-200 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}