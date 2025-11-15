'use client';
import { useRouter } from 'next/navigation';
import SectionHeading from '../../components/ui/SectionHeading';
import Card from '../../components/ui/card';
import { servicesData } from '../../data/services';

export default function Services() {
  const router = useRouter();
  
  // Convert servicesData object to array of categories
  const categories = Object.entries(servicesData).map(([key, category]) => ({
    title: category.title,
    slug: category.slug,
    description: category.description,
    serviceCount: category.services.length,
    icon: category.icon
  }));

  const handleCategoryClick = (categorySlug: string) => {
    router.push(`/services/category/${categorySlug}`);
  };

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container px-4 max-w-7xl mx-auto">
        <SectionHeading>Our Service Categories</SectionHeading>
        
        {/* Category Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.slug}
              onClick={() => handleCategoryClick(category.slug)}
              className="cursor-pointer group hover:shadow-xl transition-all duration-300"
            >
              <Card>
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mr-3 group-hover:bg-blue-200 transition-colors">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {category.serviceCount} services available
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-medium">
                  Explore Services
                </button>
              </Card>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => router.push('/services')}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}