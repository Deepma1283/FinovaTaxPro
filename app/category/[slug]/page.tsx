'use client';
import { useRouter, useParams } from 'next/navigation';
import { getCategoryBySlug } from '../../../data/services';
import Card from '../../../components/ui/card';

export default function CategoryPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  
  const category = getCategoryBySlug(slug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-6">The category you're looking for doesn't exist.</p>
          <button
            onClick={() => router.push('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.push('/#services')}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-4 font-medium transition"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Categories
          </button>
          
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-3xl mr-4">
              {category.icon}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{category.title}</h1>
              <p className="text-gray-600 mt-2">{category.description}</p>
            </div>
          </div>
          
          <p className="text-gray-500">
            {category.services.length} {category.services.length === 1 ? 'service' : 'services'} available in this category
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.services.map((service) => (
            <div
              key={service.slug}
              onClick={() => router.push(`/services/${service.slug}`)}
              className="cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <Card>
                <div className="flex items-start mb-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mr-3 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {service.short}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-xl font-bold text-blue-600">
                    {service.price_display}
                  </div>
                  <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center text-sm">
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Need Help Choosing the Right Service?
          </h3>
          <p className="text-gray-600 mb-6">
            Our experts are here to guide you through the process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push('/contact')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Talk to Expert
            </button>
            <button
              onClick={() => router.push('/#services')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-semibold"
            >
              Browse All Categories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}