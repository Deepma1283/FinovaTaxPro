// export default function OrderSuccess(){
//   return (
//     <div className="container px-4 py-12 text-center">
//       <h1 className="text-3xl font-bold mb-4">Order successful</h1>
//       <p className="text-gray-700 mb-6">Thank you — your order has been received. We'll send updates to your email.</p>
//       <a href="/" className="bg-blue-600 text-white px-4 py-2 rounded">Back to home</a>
//     </div>
//   )
// }
"use client";
import { useState, useEffect } from 'react';

interface OrderItem {
  slug: string;
  title: string;
  icon: string;
  price: number;
  price_display: string;
  category: string;
}

interface OrderData {
  items: OrderItem[];
  total: number;
  userEmail: string;
  userName: string;
  orderDate: string;
  orderId?: string;
}

export default function OrderSuccess() {
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [orderNumber, setOrderNumber] = useState<string>('');

  useEffect(() => {
    // Retrieve order data from localStorage
    const savedOrder = localStorage.getItem('completedOrder');
    if (savedOrder) {
      const order = JSON.parse(savedOrder);
      setOrderData(order);
      
      // Generate order number if not exists
      const orderId = order.orderId || `FTP${Date.now().toString().slice(-8)}`;
      setOrderNumber(orderId);
      
      // Clear cart and pending order
      localStorage.removeItem('cartItems');
      localStorage.removeItem('pendingOrder');
    }
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Success Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center mb-8">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Order Successful! 🎉
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for choosing FinovaTaxPro. Your order has been received and is being processed.
          </p>

          {orderNumber && (
            <div className="inline-flex items-center bg-blue-50 border-2 border-blue-200 rounded-lg px-6 py-3 mb-4">
              <span className="text-sm text-gray-600 mr-2">Order Number:</span>
              <span className="text-lg font-bold text-blue-600">{orderNumber}</span>
            </div>
          )}

          {orderData && (
            <p className="text-sm text-gray-500">
              Confirmation sent to <span className="font-medium text-gray-700">{orderData.userEmail}</span>
            </p>
          )}
        </div>

        {/* Order Details */}
        {orderData && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Details</h2>

            {/* Customer Info */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Customer Name</p>
                  <p className="font-semibold text-gray-900">{orderData.userName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email Address</p>
                  <p className="font-semibold text-gray-900">{orderData.userEmail}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Order Date</p>
                  <p className="font-semibold text-gray-900">{formatDate(orderData.orderDate)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Payment Status</p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                    Paid
                  </span>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="space-y-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Services Ordered</h3>
              {orderData.items.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-blue-600">{item.price_display}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="border-t pt-4">
              <div className="flex justify-between text-gray-600 mb-2">
                <span>Subtotal ({orderData.items.length} {orderData.items.length === 1 ? 'item' : 'items'})</span>
                <span>₹{orderData.total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600 mb-2">
                <span>Service Fee</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-gray-600 mb-4">
                <span>Govt. Fees</span>
                <span>As applicable</span>
              </div>
              <div className="border-t pt-4 flex justify-between text-xl font-bold">
                <span>Total Paid</span>
                <span className="text-blue-600">₹{orderData.total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}

        {/* What's Next Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            What Happens Next?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Confirmation</h3>
              <p className="text-sm text-gray-600">
                You'll receive a detailed confirmation email with all order information within 5 minutes.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Assignment</h3>
              <p className="text-sm text-gray-600">
                Our team will assign a dedicated expert to handle your services within 24 hours.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Service Delivery</h3>
              <p className="text-sm text-gray-600">
                We'll keep you updated throughout the process and deliver completed services on time.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </a>
          <a
            href="/#services"
            className="inline-flex items-center justify-center bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold text-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Browse More Services
          </a>
        </div>

        {/* Support Section */}
        <div className="mt-12 bg-white rounded-xl border-2 border-gray-200 p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Need Help?</h3>
          <p className="text-gray-600 mb-6">
            Our support team is available 24/7 to assist you with any questions.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center px-6 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Support
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href="mailto:support@finovataxpro.com"
              className="inline-flex items-center px-6 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}