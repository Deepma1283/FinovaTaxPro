'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status
    if (typeof window !== 'undefined') {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    }
  }, []);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userName');
    }
    setIsLoggedIn(false);
    router.push('/');
  };

  const services = {
    'Startup': {
      items: [
        { name: 'Proprietorship', href: '/services/sole-proprietorship' },
        { name: 'Limited Liability Partnership', href: '/services/llp-registration' },
        { name: 'One Person Company', href: '/services/one-person-company' },
        { name: 'Partnership', href: '/services/partnership-firm' },
        { name: 'Trust Registration', href: '/services/trust-registration' },
        { name: 'Section 8 Company', href: '/services/section-8-company' },
        { name: 'Private Limited Company', href: '/services/private-limited-company' },
      ]
    },
    'Trademark': {
      items: [
        { name: 'Trademark Registration', href: '/services/trademark-registration' },
        { name: 'Trademark Objection', href: '/services/trademark-objection' },
        { name: 'Trademark Opposition', href: '/services/trademark-opposition' },
        { name: 'Trademark Hearing', href: '/services/trademark-opposition' },
        { name: 'Trademark Rectification', href: '/services/trademark-opposition' },
        { name: 'Trademark Renewal', href: '/services/trademark-renewal' },
        { name: 'Trademark Transfer', href: '/services/trademark-opposition' },
        { name: 'Trademark Protection', href: '/services/trademark-opposition' },
        { name: 'Copyright Registration', href: '/services/copyright-registration' },
        { name: 'Copyright Objection', href: '/services/copyright-registration' },
        { name: 'Patent Registration', href: '/services/patent-registration' },
        { name: 'Designing Registration', href: '/services/design-registration' },
        { name: 'Logo Designing', href: '/services/design-registration' },
      ]
    },
    'GST': {
      items: [
        { name: 'GST Registration', href: '/services/gst-registration' },
        { name: 'GST Return Filing', href: '/services/gst-return-filing-monthly' },
        { name: 'GST NIL Return Filling', href: '/services/gst-return-filing-monthly' },
        { name: 'GST E-Invoicing Software', href: '/services/gst-return-filing-monthly' },
        { name: 'GST LUT Form', href: '/services/gst-lut-filing' },
        { name: 'GST Software for Accountants', href: '/services/gst-return-filing-monthly' },
        { name: 'GST Annual Return Filing', href: '/services/gst-annual-return' },
        { name: 'GST Registration for Foreigners', href: '/services/gst-registration' },
        { name: 'GST Invoicing & Filing Software', href: '/services/gst-return-filing-monthly' },
        { name: 'GST Amendments', href: '/services/gst-registration' },
        { name: 'GST Revocation', href: '/services/gst-registration' },
        { name: 'GSTR-10', href: '/services/gst-annual-return' },
        { name: 'Virtual Office +GSTIN', href: '/services/gst-registration' },
      ]
    },
    'Registration': {
      items: [
        { name: 'Startup', href: '/services/private-limited-company' },
        { name: 'Trade Registration', href: '/services/trademark-registration' },
        { name: 'FSSAI Registration and License', href: '/services/fssai-license' },
        { name: 'PF Registration', href: '/services/roc-annual-filing' },
        { name: 'ESI Registration', href: '/services/roc-annual-filing' },
        { name: 'Professional Tax Registration', href: '/services/roc-annual-filing' },
        { name: '12A and 80G Registration', href: '/services/section-8-company' },
        { name: 'Digital Signature', href: '/services/private-limited-company' },
        { name: 'Udyam Registration', href: '/services/msme-registration' },
        { name: 'Apply PAN', href: '/services/itr-filing' },
        { name: 'Apply TAN', href: '/services/tds-return-filing' }
      ]
    },
    'Income Tax': {
      items: [
        { name: 'Income Tax E-Filing', href: '/services/itr-filing' },
        { name: 'Business Tax Filing', href: '/services/itr-3-filing' },
        { name: 'ITR-1 Return Filing', href: '/services/itr-filing' },
        { name: 'ITR-2 Return Filing', href: '/services/itr-2-filing' },
        { name: 'ITR-3 Return Filing', href: '/services/itr-3-filing' },
        { name: 'ITR-4 Return Filing', href: '/services/itr-3-filing' },
        { name: 'ITR-5 Return Filing', href: '/services/itr-3-filing' },
        { name: 'ITR-6 Return Filing', href: '/services/itr-3-filing' },
        { name: 'ITR-7 Return Filing', href: '/services/itr-3-filing' },
        { name: '15CA 15CB Filing', href: '/services/itr-filing' },
        { name: 'TAN Registration', href: '/services/tds-return-filing' },
        { name: 'TDS Return FIling', href: '/services/tds-return-filing' },
        { name: 'Income Tax Notice', href: '/services/itr-filing' }
      ]
    },
    'MCA': {
      items: [
        { name: 'Company Compliance', href: '/services/roc-annual-filing' },
        { name: 'LLP Compliance', href: '/services/roc-annual-filing' },
        { name: 'OPC Compliance', href: '/services/roc-annual-filing' },
        { name: 'Name Change - Company', href: '/services/roc-annual-filing' },
        { name: 'Registered office change', href: '/services/roc-annual-filing' },
        { name: 'DIN eKYC Filling', href: '/services/roc-annual-filing' },
        { name: 'DIN Reactivation', href: '/services/roc-annual-filing' },
        { name: 'Director Change', href: '/services/roc-annual-filing' },
        { name: 'Remove Director', href: '/services/roc-annual-filing' },
        { name: 'ADT-1 Filing', href: '/services/roc-annual-filing' },
        { name: 'DPT-3 Filing', href: '/services/roc-annual-filing' },
        { name: 'LLP Form 11 Filing', href: '/services/roc-annual-filing' },
        { name: 'Dormant Status Filing', href: '/services/roc-annual-filing' },
        { name: 'MOA Amendment', href: '/services/roc-annual-filing' },
        { name: 'AOA Amendment', href: '/services/roc-annual-filing' },
        { name: 'Authorized Capital Increase', href: '/services/roc-annual-filing' },
        { name: 'Share Transfer', href: '/services/roc-annual-filing' },
        { name: 'Dermat of Shares', href: '/services/roc-annual-filing' },
        { name: 'Winding Up-LLP', href: '/services/roc-annual-filing' },
        { name: 'Winding Up-Company', href: '/services/roc-annual-filing' },
        { name: 'Commencement (INC-20A)', href: '/services/roc-annual-filing' },
      ]
    },
    'Compliance': {
      items: [
        { name: 'FDI Filing with RBI', href: '/services/roc-annual-filing' },
        { name: 'FLA Return Filling', href: '/services/roc-annual-filing' },
        { name: 'FSSAI Renewal', href: '/services/fssai-license' },
        { name: 'HR & Payroll Services', href: '/services/roc-annual-filing' },
        { name: 'PF Return Filling', href: '/services/roc-annual-filing' },
        { name: 'FSSAI Return Filling', href: '/services/fssai-license' },
        { name: 'ESI Return Filling', href: '/services/roc-annual-filing' },
        { name: 'Professional Tax Return Filling', href: '/services/roc-annual-filing' },
        { name: 'Partnership Compliance', href: '/services/partnership-firm' },
        { name: 'Proprietorship Compliance', href: '/services/sole-proprietorship' },
        { name: 'Bookkeeping', href: '/services/roc-annual-filing' },
      ]
    },
    'Loan': {
      items: [
        { name: 'Personal Loan', href: '/services/business-loan' },
        { name: 'Business Loan', href: '/services/business-loan' },
        { name: 'Home Loan', href: '/services/business-loan' },
        { name: 'Car Loan', href: '/services/business-loan' }
      ]
    }
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">FT</span>
            </div>
            <span className="text-xl font-bold text-gray-900">FinovaTaxPro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/" className="px-3 py-2 text-gray-700 hover:text-blue-600 transition text-sm font-medium">
              Home
            </Link>
            
            {Object.keys(services).map((category) => (
              <div 
                key={category}
                className="relative"
                onMouseEnter={() => setActiveMenu(category)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="px-3 py-2 text-gray-700 hover:text-blue-600 transition text-sm font-medium flex items-center">
                  {category}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {activeMenu === category && (
                  <div className="absolute left-0 top-full mt-0 w-64 bg-white shadow-lg rounded-md py-2 border border-gray-100">
                    {services[category].items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                        onClick={() => setActiveMenu(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* User Account / Login */}
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 px-3 py-2 text-gray-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-sm font-medium">Account</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                href="/login" 
                className="bg-blue-600 text-white px-6 py-2.5 rounded-md hover:bg-blue-700 transition font-medium text-sm"
              >
                Get Started
              </Link>
            )}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            
            {Object.keys(services).map((category) => (
              <div key={category}>
                <button
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition font-medium"
                  onClick={() => setActiveMobileMenu(activeMobileMenu === category ? null : category)}
                >
                  {category}
                  <svg 
                    className={`w-4 h-4 transition-transform ${activeMobileMenu === category ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeMobileMenu === category && (
                  <div className="ml-4 mt-1 space-y-1">
                    {services[category].items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-sm rounded-md text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-3 border-t border-gray-200">
              {isLoggedIn ? (
                <div className="space-y-2">
                  <div className="px-3 py-2 text-gray-700 font-medium flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    My Account
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-md text-red-600 hover:bg-red-50 font-medium"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link 
                  href="/register" 
                  className="block w-full text-center bg-blue-600 text-white px-5 py-2.5 rounded-md hover:bg-blue-700 transition font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Started
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}