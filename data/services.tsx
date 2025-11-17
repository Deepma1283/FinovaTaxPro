// lib/data/services.ts
// data/services.ts

export interface Service {
  slug: string;
  title: string;
  icon: string;
  short: string;
  price: number;
  price_display: string;
  category: string;
  description: string;
  fullDescription: string;
  features: string[];
  requirements: string[];
  deliverables: string[];
  timeline: string;
}

export interface ServiceCategory {
  title: string;
  slug: string;
  icon: string;
  description: string;
  services: Service[];
}

export const servicesData: Record<string, ServiceCategory> = {
  'business-registration': {
    title: 'Business Registration',
    slug: 'business-registration',
    icon: '🏢',
    description: 'Complete business registration and incorporation services',
    services: [
      {
        slug: 'private-limited-company',
        title: 'Private Limited Company',
        icon: '💼',
        short: 'Most popular choice for startups and growing businesses',
        price: 6999,
        price_display: '₹6,999',
        category: 'Business Registration',
        description: 'Register a Private Limited Company with limited liability protection',
        fullDescription: 'A Private Limited Company is the most preferred business structure for startups and growing businesses in India. It offers limited liability protection to shareholders, meaning personal assets are protected. The company has a separate legal identity, can own property, enter contracts, and sue or be sued in its own name. This structure is ideal for businesses planning to raise funding or scale operations.',
        features: [
          'Limited liability protection for shareholders',
          'Separate legal entity from owners',
          'Easy to raise funding and investment',
          'Perpetual succession regardless of ownership changes',
          'Enhanced credibility with clients and vendors',
          'Tax benefits and deductions available'
        ],
        requirements: [
          'Minimum 2 Directors and 2 Shareholders',
          'PAN and Aadhaar cards of all Directors',
          'Address proof of registered office',
          'Digital Signature Certificate (DSC) for Directors',
          'Director Identification Number (DIN)',
          'Passport size photographs of Directors'
        ],
        deliverables: [
          'Certificate of Incorporation from MCA',
          'Company PAN and TAN',
          'Company Master Data',
          'Memorandum of Association (MOA)',
          'Articles of Association (AOA)',
          'Share Certificates for shareholders',
          'Certificate of Commencement of Business'
        ],
        timeline: '10-15 working days'
      },
      {
        slug: 'llp-registration',
        title: 'Limited Liability Partnership (LLP)',
        icon: '👥',
        short: 'Flexible business structure with limited liability protection',
        price: 5999,
        price_display: '₹5,999',
        category: 'Business Registration',
        description: 'Register an LLP combining benefits of partnership with limited liability',
        fullDescription: 'Limited Liability Partnership (LLP) is a hybrid business structure that combines the flexibility of a partnership with the limited liability benefits of a company. It requires minimal compliance and is ideal for professional service providers like consultants, lawyers, and chartered accountants.',
        features: [
          'Limited liability protection for all partners',
          'Flexible management structure',
          'Lower compliance requirements than companies',
          'No minimum capital requirement',
          'Separate legal entity status',
          'Easy to manage and operate'
        ],
        requirements: [
          'Minimum 2 partners (no maximum limit)',
          'PAN and Aadhaar cards of all partners',
          'Registered office address proof',
          'Digital Signature Certificate',
          'DIN for designated partners',
          'Passport size photographs'
        ],
        deliverables: [
          'LLP Certificate of Incorporation',
          'LLP Agreement',
          'LLP PAN and TAN',
          'LLP Identification Number (LLPIN)',
          'Master Data from MCA'
        ],
        timeline: '10-15 working days'
      },
      {
        slug: 'one-person-company',
        title: 'One Person Company (OPC)',
        icon: '👤',
        short: 'Perfect for solo entrepreneurs wanting corporate benefits',
        price: 4999,
        price_display: '₹4,999',
        category: 'Business Registration',
        description: 'Start your business as a sole entrepreneur with corporate structure',
        fullDescription: 'One Person Company (OPC) is a business structure introduced for solo entrepreneurs who want to enjoy the benefits of a company while being the sole owner. It provides limited liability and separate legal entity status with minimal compliance requirements.',
        features: [
          'Single person can own and manage',
          'Limited liability protection',
          'Separate legal entity',
          'Easy compliance compared to Pvt Ltd',
          'Nominee director facility for succession',
          'Lower incorporation and maintenance costs'
        ],
        requirements: [
          'Only 1 Director required (Indian resident)',
          'PAN and Aadhaar card of Director',
          'Registered office address proof',
          'Digital Signature Certificate',
          'Director Identification Number',
          'Nominee Director details mandatory'
        ],
        deliverables: [
          'Certificate of Incorporation',
          'Company PAN and TAN',
          'Memorandum of Association (MOA)',
          'Articles of Association (AOA)',
          'Share Certificate',
          'Company Master Data'
        ],
        timeline: '7-10 working days'
      },
      {
        slug: 'partnership-firm',
        title: 'Partnership Firm Registration',
        icon: '🤝',
        short: 'Traditional partnership structure for shared business',
        price: 3999,
        price_display: '₹3,999',
        category: 'Business Registration',
        description: 'Register a partnership firm for shared business ownership',
        fullDescription: 'Partnership Firm is a traditional business structure where two or more persons come together to carry on business and share profits. It is easy to form and suitable for small to medium businesses with minimal regulatory requirements.',
        features: [
          'Easy to form and dissolve',
          'Shared decision making',
          'Minimal compliance requirements',
          'No separate tax on firm',
          'Flexible profit sharing',
          'Low registration cost'
        ],
        requirements: [
          'Minimum 2 partners (maximum 20)',
          'PAN cards of all partners',
          'Address proof of partners',
          'Registered office proof',
          'Partnership deed',
          'Photographs of partners'
        ],
        deliverables: [
          'Partnership Deed',
          'PAN of the firm',
          'Registration Certificate',
          'Firm Master Data'
        ],
        timeline: '5-7 working days'
      },
      {
        slug: 'sole-proprietorship',
        title: 'Sole Proprietorship Registration',
        icon: '👨‍💼',
        short: 'Simplest business structure for individual entrepreneurs',
        price: 2999,
        price_display: '₹2,999',
        category: 'Business Registration',
        description: 'Start your individual business with minimal formalities',
        fullDescription: 'Sole Proprietorship is the simplest form of business organization owned and managed by a single individual. It requires minimal compliance and is ideal for small businesses, freelancers, and consultants starting their entrepreneurial journey.',
        features: [
          'Easiest to start and operate',
          'Complete control over business',
          'Minimal regulatory compliance',
          'No separate tax filing',
          'Low cost of formation',
          'Quick setup process'
        ],
        requirements: [
          'Proprietor PAN card',
          'Aadhaar card',
          'Address proof',
          'Bank account',
          'Business premises proof',
          'Photographs'
        ],
        deliverables: [
          'Business Registration Certificate',
          'GST Registration (if applicable)',
          'Shop Act License (if applicable)',
          'MSME Registration'
        ],
        timeline: '3-5 working days'
      },
      {
        slug: 'section-8-company',
        title: 'Section 8 Company (NGO)',
        icon: '🏛️',
        short: 'Non-profit organization for charitable activities',
        price: 9999,
        price_display: '₹9,999',
        category: 'Business Registration',
        description: 'Register a Section 8 company for non-profit charitable work',
        fullDescription: 'Section 8 Company is a special type of company formed for promoting charitable objectives such as education, arts, science, religion, charity, or social welfare. It enjoys various tax benefits and exemptions under Income Tax Act.',
        features: [
          'Tax exemption benefits under 80G and 12A',
          'Limited liability protection',
          'Separate legal entity',
          'Can receive foreign funding (with FCRA)',
          'Enhanced credibility and trust',
          'Perpetual succession'
        ],
        requirements: [
          'Minimum 2 Directors',
          'Minimum 2 Members',
          'PAN and Aadhaar of Directors',
          'Registered office proof',
          'Digital Signature Certificate',
          'NOC from property owner'
        ],
        deliverables: [
          'Section 8 License from MCA',
          'Certificate of Incorporation',
          'PAN and TAN',
          'MOA and AOA',
          'Master Data'
        ],
        timeline: '20-30 working days'
      }
    ]
  },
  'trademark-ip': {
    title: 'Trademark & IP',
    slug: 'trademark-ip',
    icon: '™️',
    description: 'Protect your intellectual property and brand identity',
    services: [
      {
        slug: 'trademark-registration',
        title: 'Trademark Registration',
        icon: '™️',
        short: 'Protect your brand name, logo and tagline legally',
        price: 4999,
        price_display: '₹4,999',
        category: 'Trademark & IP',
        description: 'Secure legal protection for your brand with trademark registration',
        fullDescription: 'Trademark Registration provides legal protection to your brand name, logo, and tagline. It gives you exclusive rights to use the mark and prevents others from using similar marks that could confuse customers. A registered trademark is valid for 10 years and can be renewed indefinitely.',
        features: [
          'Comprehensive trademark search report',
          'Professional application drafting',
          'Government fee included in package',
          'Response to examination objections',
          'TM symbol usage rights immediately',
          'Registration certificate upon approval'
        ],
        requirements: [
          'Applicant details (individual/company)',
          'Brand name and logo design',
          'Business category and class selection',
          'Address proof of applicant',
          'ID proof (PAN/Aadhaar)',
          'Power of Attorney (if applicable)'
        ],
        deliverables: [
          'Comprehensive trademark search report',
          'Filed application with number',
          'TM symbol usage certificate',
          'Objection response (if required)',
          'Trademark registration certificate',
          '® symbol usage rights after registration'
        ],
        timeline: '18-24 months'
      },
      {
        slug: 'trademark-objection',
        title: 'Trademark Objection Reply',
        icon: '📄',
        short: 'Expert response to trademark examination objections',
        price: 2999,
        price_display: '₹2,999',
        category: 'Trademark & IP',
        description: 'Professional reply to trademark objections for successful registration',
        fullDescription: 'When the Trademark Registry raises objections during examination, a proper response is critical for registration. Our experts draft comprehensive replies addressing all objections with legal precedents and arguments to maximize chances of trademark registration.',
        features: [
          'Expert analysis of objection',
          'Comprehensive reply drafting',
          'Supporting documents preparation',
          'Legal precedent research',
          'Filing with Trademark Office',
          'Follow-up until resolution'
        ],
        requirements: [
          'Trademark application number',
          'Examination report copy',
          'Original trademark application',
          'Business proof documents',
          'Usage evidence (if applicable)',
          'POA for filing'
        ],
        deliverables: [
          'Objection analysis report',
          'Reply to examination report',
          'Supporting documents',
          'Filing acknowledgment',
          'Status update reports'
        ],
        timeline: '7-10 working days'
      },
      {
        slug: 'trademark-opposition',
        title: 'Trademark Opposition',
        icon: '⚖️',
        short: 'File or defend trademark opposition proceedings',
        price: 9999,
        price_display: '₹9,999',
        category: 'Trademark & IP',
        description: 'Professional trademark opposition filing or defense services',
        fullDescription: 'Trademark opposition proceedings allow interested parties to oppose trademark applications. Whether filing opposition against a conflicting mark or defending your mark, expert legal assistance is crucial for success in opposition hearings.',
        features: [
          'Opposition notice drafting',
          'Evidence collection and filing',
          'Counter statement preparation',
          'Hearing representation',
          'Legal strategy consultation',
          'Complete proceeding management'
        ],
        requirements: [
          'Trademark details to oppose/defend',
          'Grounds for opposition',
          'Supporting evidence',
          'Business documents',
          'Prior usage proof',
          'Power of Attorney'
        ],
        deliverables: [
          'Opposition notice/counter',
          'Evidence compilation',
          'Hearing representation',
          'Legal arguments document',
          'Final order copy'
        ],
        timeline: '6-12 months'
      },
      {
        slug: 'trademark-renewal',
        title: 'Trademark Renewal',
        icon: '🔄',
        short: 'Renew your trademark registration every 10 years',
        price: 7999,
        price_display: '₹7,999',
        category: 'Trademark & IP',
        description: 'Timely trademark renewal to maintain continuous protection',
        fullDescription: 'Trademark registration is valid for 10 years from the date of application. Renewal must be done within 6 months before expiry or within 6 months after expiry (with additional fees) to maintain continuous protection of your brand.',
        features: [
          'Renewal application filing',
          'Government fee included',
          'Restoration if expired',
          'Updated certificate',
          'Next renewal reminder',
          'Documentation support'
        ],
        requirements: [
          'Trademark registration number',
          'Original registration certificate',
          'Updated business details',
          'POA for renewal',
          'Payment proof'
        ],
        deliverables: [
          'Renewal application filed',
          'Acknowledgment receipt',
          'Renewed trademark certificate',
          'Updated registry records',
          '10-year protection extension'
        ],
        timeline: '30-45 days'
      },
      {
        slug: 'copyright-registration',
        title: 'Copyright Registration',
        icon: '©️',
        short: 'Protect your creative and artistic works',
        price: 4999,
        price_display: '₹4,999',
        category: 'Trademark & IP',
        description: 'Register copyright for literary, artistic, musical and software works',
        fullDescription: 'Copyright Registration protects original creative works including books, music, software, artwork, films, and more. It provides legal evidence of ownership and exclusive rights to reproduce, distribute, and display the work. Copyright protection lasts for the lifetime of the author plus 60 years.',
        features: [
          'Complete application preparation and filing',
          'Legal documentation and verification',
          'Government filing and follow-up',
          'Copyright registration certificate',
          'Lifetime protection for creative works',
          'Legal evidence of ownership'
        ],
        requirements: [
          'Applicant details and ID proof',
          'Detailed description of the work',
          'Date of creation/publication',
          'Sample copies of the work',
          'ID and address proof',
          'NOC (if applicable)'
        ],
        deliverables: [
          'Copyright registration certificate',
          'Diary number and filing receipt',
          'Complete registration details',
          'Legal documentation package'
        ],
        timeline: '6-8 months'
      },
      {
        slug: 'patent-registration',
        title: 'Patent Registration',
        icon: '💡',
        short: 'Protect your inventions and innovations',
        price: 29999,
        price_display: '₹29,999',
        category: 'Trademark & IP',
        description: 'Complete patent specification drafting and filing',
        fullDescription: 'Patent Registration protects your inventions and innovations, granting you exclusive rights to make, use, and sell the invention for 20 years. Our experts help with prior art search, patent specification drafting, claims preparation, and complete filing process.',
        features: [
          'Prior art and patentability search',
          'Patent specification drafting',
          'Drawings and claims preparation',
          'Complete filing with patent office',
          'Response to examination objections',
          'Patent grant certificate'
        ],
        requirements: [
          'Detailed invention description',
          'Technical drawings/diagrams',
          'Inventor details and ID proof',
          'Priority documents (if applicable)',
          'Assignment deed (if applicable)',
          'Power of Attorney'
        ],
        deliverables: [
          'Patent search report',
          'Patent specification document',
          'Filed application number',
          'Publication details',
          'Patent grant certificate',
          'Renewal reminders'
        ],
        timeline: '2-4 years'
      },
      {
        slug: 'design-registration',
        title: 'Design Registration',
        icon: '🎨',
        short: 'Protect unique visual designs of products',
        price: 6999,
        price_display: '₹6,999',
        category: 'Trademark & IP',
        description: 'Protect the aesthetic appearance and visual design of products',
        fullDescription: 'Design Registration protects the aesthetic appearance of your products. It covers shape, configuration, pattern, or ornamentation that gives a unique appearance to the article. Design registration is valid for 10 years initially and can be extended for 5 more years.',
        features: [
          'Design novelty search',
          'Application drafting with drawings',
          'Government fee included',
          'Filing and prosecution',
          '10 years protection initially',
          'Registration certificate'
        ],
        requirements: [
          'Product design drawings/photos',
          'Applicant details',
          'Designer details',
          'Class of design',
          'ID and address proof',
          'Priority documents (if any)'
        ],
        deliverables: [
          'Design search report',
          'Filed application number',
          'Examination report response',
          'Design registration certificate',
          'Renewal reminders'
        ],
        timeline: '6-12 months'
      }
    ]
  },
  'gst-tax': {
    title: 'GST & Tax',
    slug: 'gst-tax',
    icon: '📋',
    description: 'Complete GST registration and tax compliance solutions',
    services: [
      {
        slug: 'gst-registration',
        title: 'GST Registration',
        icon: '📋',
        short: 'Get your GSTIN quickly with expert assistance',
        price: 999,
        price_display: '₹999',
        category: 'GST & Tax',
        description: 'Complete GST registration service with expert guidance',
        fullDescription: 'GST Registration is mandatory for businesses with turnover exceeding ₹40 lakhs (₹20 lakhs for special category states). Our experts handle complete documentation and ensure quick approval from GST department. We also provide post-registration support for your first GST return filing.',
        features: [
          'Complete documentation assistance',
          'GSTIN within 3-5 working days',
          'Expert consultation included',
          'Post-registration support',
          'Help with first GST return filing',
          'Annual compliance calendar provided'
        ],
        requirements: [
          'PAN Card of the business entity',
          'Aadhaar Card of proprietor/directors/partners',
          'Business address proof (rent/ownership)',
          'Bank account statement or passbook',
          'Digital signature or Aadhaar OTP',
          'Passport size photographs of authorized persons'
        ],
        deliverables: [
          'GSTIN (GST Identification Number)',
          'GST Registration Certificate',
          'Login credentials for GST portal',
          'Compliance checklist and guide',
          'First year GST filing calendar'
        ],
        timeline: '3-5 working days'
      },
      {
        slug: 'gst-return-filing-monthly',
        title: 'GST Return Filing (Monthly)',
        icon: '📊',
        short: 'Professional monthly GST return filing service',
        price: 499,
        price_display: '₹499/month',
        category: 'GST & Tax',
        description: 'Monthly GST return filing - GSTR-1, GSTR-3B with reconciliation',
        fullDescription: 'Stay compliant with monthly GST return filing service. Our experts handle GSTR-1 (sales), GSTR-3B (summary), and ensure timely filing to avoid penalties and interest. We also provide input tax credit optimization and complete reconciliation.',
        features: [
          'GSTR-1 and GSTR-3B filing',
          'Purchase and sales reconciliation',
          'Input tax credit optimization',
          'Penalty avoidance',
          'Expert CA assistance',
          'Monthly compliance reports'
        ],
        requirements: [
          'Sales and purchase invoices',
          'Credit and debit notes',
          'Bank statements',
          'Previous returns filed',
          'GST portal login credentials',
          'ITC reconciliation data'
        ],
        deliverables: [
          'Filed GSTR-1 with ARN',
          'Filed GSTR-3B with ARN',
          'Tax payment challans',
          'Compliance status report',
          'Monthly reconciliation statement'
        ],
        timeline: 'Monthly by due dates'
      },
      {
        slug: 'gst-return-filing-quarterly',
        title: 'GST Return Filing (Quarterly)',
        icon: '📈',
        short: 'Quarterly GST compliance for composition scheme',
        price: 299,
        price_display: '₹299/quarter',
        category: 'GST & Tax',
        description: 'Quarterly GST return filing for composition scheme taxpayers',
        fullDescription: 'Composition scheme is available for small businesses with turnover up to ₹1.5 crores. Our service includes quarterly GSTR-4 filing with minimal compliance requirements and cost-effective pricing for small businesses.',
        features: [
          'GSTR-4 quarterly filing',
          'CMP-08 challan generation',
          'Simple compliance process',
          'Cost-effective solution',
          'Expert guidance',
          'Timely filing reminders'
        ],
        requirements: [
          'GSTIN details',
          'Quarterly turnover details',
          'Purchase invoices',
          'Bank statements',
          'Previous quarter returns',
          'GST portal credentials'
        ],
        deliverables: [
          'Filed GSTR-4 with ARN',
          'CMP-08 payment challan',
          'Quarterly summary report',
          'Compliance certificate',
          'Next quarter reminders'
        ],
        timeline: 'Quarterly by due dates'
      },
      {
        slug: 'gst-annual-return',
        title: 'GST Annual Return (GSTR-9)',
        icon: '📄',
        short: 'Annual GST return with complete reconciliation',
        price: 2999,
        price_display: '₹2,999',
        category: 'GST & Tax',
        description: 'Annual GST return filing with books reconciliation',
        fullDescription: 'GSTR-9 is an annual return that consolidates all monthly/quarterly returns filed during the financial year. It includes complete reconciliation with books of accounts and identification of mismatches for correction.',
        features: [
          'Complete annual reconciliation',
          'GSTR-9 preparation and filing',
          'Data compilation from all returns',
          'Mismatch identification and correction',
          'Expert CA review',
          'Audit trail maintenance'
        ],
        requirements: [
          'All monthly/quarterly returns',
          'Financial statements',
          'Purchase and sales registers',
          'ITC ledger',
          'Bank statements',
          'GST portal access'
        ],
        deliverables: [
          'Filed GSTR-9 with ARN',
          'Annual reconciliation statement',
          'Mismatch report and corrections',
          'Compliance certificate',
          'Supporting documents package'
        ],
        timeline: '7-10 working days'
      },
      {
        slug: 'gst-audit',
        title: 'GST Audit (GSTR-9C)',
        icon: '🔍',
        short: 'GST audit and reconciliation by qualified CA',
        price: 4999,
        price_display: '₹4,999',
        category: 'GST & Tax',
        description: 'GST audit and reconciliation statement filing by CA',
        fullDescription: 'GSTR-9C is mandatory for businesses with turnover exceeding ₹5 crores. It is a reconciliation statement certified by CA reconciling annual return with audited financial statements. Our qualified CAs ensure complete compliance.',
        features: [
          'Complete GST audit by qualified CA',
          'GSTR-9C certification',
          'Books of accounts reconciliation',
          'Turnover matching with financials',
          'ITC verification and validation',
          'CA certificate and stamp'
        ],
        requirements: [
          'Audited financial statements',
          'GSTR-9 annual return',
          'All monthly returns',
          'Books of accounts',
          'ITC register',
          'Supporting documents'
        ],
        deliverables: [
          'GSTR-9C certificate by CA',
          'Reconciliation statement',
          'Audit report',
          'Filed GSTR-9C',
          'CA certification with stamp'
        ],
        timeline: '10-15 working days'
      },
      {
        slug: 'gst-lut-filing',
        title: 'GST LUT Filing',
        icon: '📝',
        short: 'Export goods/services without paying IGST',
        price: 499,
        price_display: '₹499',
        category: 'GST & Tax',
        description: 'Letter of Undertaking for GST-free exports',
        fullDescription: 'LUT (Letter of Undertaking) allows exporters to export goods or services without paying IGST. It must be filed annually on the GST portal and enables businesses to improve cash flow by avoiding tax payment on exports.',
        features: [
          'LUT form preparation',
          'Online filing on GST portal',
          'Annual renewal service',
          'Documentation support',
          'Expert guidance',
          'Acknowledgment tracking'
        ],
        requirements: [
          'GSTIN',
          'Export business proof',
          'Bank account details',
          'Previous year returns',
          'Digital signature',
          'Authorized signatory details'
        ],
        deliverables: [
          'Filed LUT on GST portal',
          'LUT reference number',
          'Acknowledgment receipt',
          'Validity documents',
          'Renewal reminders'
        ],
        timeline: '1-2 working days'
      },
      {
        slug: 'gst-refund',
        title: 'GST Refund Filing',
        icon: '💰',
        short: 'Claim accumulated ITC and export refunds',
        price: 1999,
        price_display: '₹1,999',
        category: 'GST & Tax',
        description: 'GST refund claim for exports and excess ITC',
        fullDescription: 'Claim refund for accumulated input tax credit, zero-rated supplies (exports), and excess tax paid. Our experts handle complete documentation, bank details verification, and follow-up with department for quick refund processing.',
        features: [
          'Refund eligibility analysis',
          'Application preparation',
          'Supporting documents compilation',
          'Online filing and tracking',
          'Department follow-up',
          'Refund credit tracking'
        ],
        requirements: [
          'GST returns filed',
          'Export invoices and shipping bills',
          'Bank statements',
          'ITC ledger',
          'Supporting invoices',
          'Bank account details'
        ],
        deliverables: [
          'Filed refund application',
          'Application reference number',
          'Supporting documents package',
          'Status tracking reports',
          'Refund receipt confirmation'
        ],
        timeline: '30-60 days'
      },
      {
        slug: 'itr-filing',
        title: 'Income Tax Return Filing (ITR-1)',
        icon: '📑',
        short: 'Professional ITR filing for salaried individuals',
        price: 499,
        price_display: '₹499',
        category: 'GST & Tax',
        description: 'ITR-1 filing for salaried individuals with Form 16',
        fullDescription: 'Professional ITR filing service for salaried individuals. Our CAs ensure error-free filing, maximum deductions under 80C, 80D and other sections, and handle all compliance to get you maximum refunds. We also provide response to income tax notices.',
        features: [
          'Form 16 analysis and verification',
          'Maximum tax-saving deductions claimed',
          'Error-free filing guaranteed',
          'ITR acknowledgment and e-verification',
          'Expert Chartered Accountant review',
          'Free response to income tax notices'
        ],
        requirements: [
          'Form 16 from employer',
          'Form 26AS from income tax portal',
          'Bank account statements',
          'Investment proofs (80C, 80D, etc.)',
          'Home loan interest certificate',
          'Capital gains statement (if applicable)'
        ],
        deliverables: [
          'Filed ITR with acknowledgment number',
          'Detailed tax computation sheet',
          'Refund tracking assistance',
          'ITR-V for Aadhaar verification',
          'Complete copy of filed return'
        ],
        timeline: '2-3 working days'
      },
      {
        slug: 'itr-2-filing',
        title: 'Income Tax Return (ITR-2)',
        icon: '📋',
        short: 'ITR filing for individuals with capital gains',
        price: 999,
        price_display: '₹999',
        category: 'GST & Tax',
        description: 'ITR-2 filing for capital gains and multiple properties',
        fullDescription: 'ITR-2 is for individuals and HUFs not having income from business or profession. Applicable when you have capital gains from property, shares, or multiple house properties. Our experts handle complex calculations and exemptions.',
        features: [
          'Capital gains calculation (LTCG/STCG)',
          'Multiple house property reporting',
          'Foreign income and assets reporting',
          'TDS reconciliation from 26AS',
          'Expert CA review and filing',
          'Maximum deductions and exemptions'
        ],
        requirements: [
          'Salary slips and Form 16',
          'Property sale/purchase documents',
          'Share trading statements and contract notes',
          'Form 26AS',
          'Investment proofs',
          'Bank statements (all accounts)'
        ],
        deliverables: [
          'Filed ITR-2 with acknowledgment',
          'Capital gains computation statement',
          'Tax computation sheet',
          'ITR-V for verification',
          'Refund tracking support'
        ],
        timeline: '3-5 working days'
      },
      {
        slug: 'itr-3-filing',
        title: 'Income Tax Return (ITR-3)',
        icon: '💼',
        short: 'ITR filing for business and professional income',
        price: 1999,
        price_display: '₹1,999',
        category: 'GST & Tax',
        description: 'ITR-3 filing for business income with financial statements',
        fullDescription: 'ITR-3 is for individuals and HUFs having income from business or profession. Includes preparation of profit and loss account and balance sheet. Our CAs handle complete book keeping and ensure maximum deductions.',
        features: [
          'P&L and Balance Sheet preparation',
          'Business income calculation',
          'Presumptive taxation option (44AD/44ADA)',
          'Professional fees reporting',
          'Complete book keeping assistance',
          'CA certified filing'
        ],
        requirements: [
          'Business financial statements',
          'Bank statements (business account)',
          'Purchase and sales records',
          'Expense vouchers and bills',
          'GST returns (if registered)',
          'TDS certificates'
        ],
        deliverables: [
          'Filed ITR-3 with acknowledgment',
          'Financial statements (P&L, Balance Sheet)',
          'Tax computation sheet',
          'Books of accounts',
          'Filing acknowledgment and ITR-V'
        ],
        timeline: '5-7 working days'
      },
      {
        slug: 'tds-return-filing',
        title: 'TDS Return Filing',
        icon: '💰',
        short: 'Quarterly TDS return filing and compliance',
        price: 1499,
        price_display: '₹1,499/quarter',
        category: 'GST & Tax',
        description: 'Quarterly TDS return filing with complete reconciliation',
        fullDescription: 'TDS Return Filing service for businesses deducting tax at source. We handle quarterly filing of Forms 24Q, 26Q, 27Q, and 27EQ with complete reconciliation, error correction, and Form 16/16A generation.',
        features: [
          'All TDS forms filing (24Q, 26Q, 27Q, 27EQ)',
          'Complete reconciliation with 26AS',
          'Error correction and revision filing',
          'Form 16/16A generation',
          'TDS payment verification',
          'Penalty avoidance'
        ],
        requirements: [
          'TAN of the deductor',
          'Details of deductees with PAN',
          'TDS payment challans',
          'Salary/payment details',
          'Previous quarter returns',
          'Digital signature'
        ],
        deliverables: [
          'Filed TDS returns with token number',
          'Form 16/16A for all deductees',
          'Reconciliation statement',
          'Payment verification report',
          'Compliance certificate'
        ],
        timeline: 'Within quarterly due dates'
      }
    ]
  },
  'compliance': {
    title: 'Compliance',
    slug: 'compliance',
    icon: '✅',
    description: 'Annual and periodic compliance services for businesses',
    services: [
      {
        slug: 'roc-annual-filing',
        title: 'Annual ROC Filing',
        icon: '📅',
        short: 'MCA annual compliance for companies - AOC-4 & MGT-7',
        price: 4999,
        price_display: '₹4,999',
        category: 'Compliance',
        description: 'Complete annual ROC compliance with MCA',
        fullDescription: 'Every registered company must file annual returns (MGT-7) and financial statements (AOC-4) with the Registrar of Companies (ROC). Our service ensures timely filing to avoid heavy penalties up to ₹5 lakhs and director disqualification.',
        features: [
          'AOC-4 and MGT-7 preparation and filing',
          'Financial statement preparation',
          'Board meeting minutes drafting',
          'Digital signature filing',
          'Penalty avoidance',
          'Next year compliance calendar'
        ],
        requirements: [
          'Financial statements (Balance Sheet, P&L)',
          'Director and shareholder details',
          'Board meeting minutes',
          'Auditor report (if applicable)',
          'Digital signatures of directors',
          'Previous year filings'
        ],
        deliverables: [
          'Filed AOC-4 with SRN',
          'Filed MGT-7 with SRN',
          'Director KYC (DIR-3 KYC)',
          'Compliance certificate',
          'Next year compliance calendar'
        ],
        timeline: '5-7 working days'
      },
      {
        slug: 'fssai-license',
        title: 'FSSAI License',
        icon: '🍽️',
        short: 'Food business license registration and renewal',
        price: 2999,
        price_display: '₹2,999',
        category: 'Compliance',
        description: 'FSSAI license for food businesses - registration to state license',
        fullDescription: 'FSSAI (Food Safety and Standards Authority of India) license is mandatory for all food businesses including manufacturing, storage, distribution, and retail. We help you obtain the appropriate license (Basic/State/Central) based on your business size and type.',
        features: [
          'License type consultation',
          'Complete application filing',
          'Documentation support',
          'Inspection assistance',
          'License certificate',
          'Renewal reminders'
        ],
        requirements: [
          'Business registration proof',
          'Food category details',
          'Premises layout plan',
          'ID and address proof',
          'List of food products',
          'NOC from municipality (if required)'
        ],
        deliverables: [
          'FSSAI registration/license number',
          'License certificate (14-digit number)',
          'Food safety plan',
          'Compliance guidelines',
          'Renewal calendar'
        ],
        timeline: '15-30 working days'
      },
      {
        slug: 'import-export-code',
        title: 'Import Export Code (IEC)',
        icon: '🌍',
        short: 'Mandatory code for import/export business',
        price: 2499,
        price_display: '₹2,499',
        category: 'Compliance',
        description: 'IEC registration for international trade',
        fullDescription: 'Import Export Code (IEC) is a 10-digit code mandatory for any business engaged in importing or exporting goods and services. It is issued by the Directorate General of Foreign Trade (DGFT) and has lifetime validity with no renewal required.',
        features: [
          'IEC number within 7 days',
          'Complete documentation support',
          'DGFT filing and follow-up',
          'Digital certificate',
          'No renewal required - lifetime validity',
          'Bank and customs registration'
        ],
        requirements: [
          'Business PAN card',
          'Bank certificate with IFSC and SWIFT code',
          'Cancelled cheque',
          'Business address proof',
          'ID proof of proprietor/directors',
          'Business registration documents'
        ],
        deliverables: [
          '10-digit IEC number',
          'IEC certificate from DGFT',
          'Digital certificate download',
          'Bank registration confirmation'
        ],
        timeline: '5-7 working days'
      },
      {
        slug: 'msme-registration',
        title: 'MSME/Udyam Registration',
        icon: '🏭',
        short: 'Get MSME benefits, loans and subsidies',
        price: 999,
        price_display: '₹999',
        category: 'Compliance',
        description: 'Udyam registration for MSME benefits',
        fullDescription: 'MSME (Udyam) Registration provides recognition and numerous benefits to micro, small, and medium enterprises including priority sector lending, collateral-free loans, subsidies on electricity bills, patent registration, and eligibility for government tenders.',
        features: [
          'Online Udyam registration',
          'Permanent registration number',
          'No renewal required - lifetime validity',
          'Government benefits access',
          'Subsidy eligibility certificate',
          'Tender participation rights'
        ],
        requirements: [
          'Aadhaar number',
          'PAN card',
          'Business name and type',
          'Investment and turnover details',
          'Bank account details',
          'Business address'
        ],
        deliverables: [
          'Udyam Registration Number (URN)',
          'Udyam Registration Certificate',
          'Digital certificate download',
          'Benefits guide document'
        ],
        timeline: '1-2 working days'
      },
      {
        slug: 'iso-certification',
        title: 'ISO Certification',
        icon: '🏆',
        short: 'ISO 9001, 14001, 27001 quality certification',
        price: 14999,
        price_display: '₹14,999',
        category: 'Compliance',
        description: 'International quality management system certification',
        fullDescription: 'ISO Certification demonstrates your commitment to quality (ISO 9001), environmental management (ISO 14001), or information security (ISO 27001). We provide complete certification assistance including gap analysis, documentation, training, internal audit, and certification body coordination.',
        features: [
          'Gap analysis and assessment',
          'Complete documentation preparation',
          'Process implementation support',
          'Internal audit training',
          'Certification body coordination',
          'Post-certification surveillance support'
        ],
        requirements: [
          'Business registration documents',
          'Organizational structure',
          'Existing process documentation',
          'Quality manuals (if any)',
          'Employee training records',
          'Management commitment letter'
        ],
        deliverables: [
          'Complete ISO documentation set',
          'Employee training materials',
          'Internal audit report',
          'ISO certificate (3 years validity)',
          'Surveillance audit support'
        ],
        timeline: '2-3 months'
      },
      {
        slug: 'professional-tax-registration',
        title: 'Professional Tax Registration',
        icon: '💳',
        short: 'State-level tax registration for employers',
        price: 1999,
        price_display: '₹1,999',
        category: 'Compliance',
        description: 'Professional tax registration for businesses with employees',
        fullDescription: 'Professional Tax is a state-level tax levied on professions, trades, and employment. Businesses with employees need to register and deduct professional tax from salaries. Rates and applicability vary by state.',
        features: [
          'PT registration certificate',
          'Monthly/annual return filing support',
          'Compliance calendar',
          'Penalty avoidance',
          'Expert guidance on rates',
          'Renewal assistance'
        ],
        requirements: [
          'Business registration proof',
          'PAN card',
          'Address proof',
          'List of employees',
          'Salary register',
          'Bank details'
        ],
        deliverables: [
          'PT registration certificate',
          'PT enrollment number',
          'Compliance guidelines by state',
          'Filing calendar',
          'Certificate copy'
        ],
        timeline: '7-10 working days'
      },
      {
        slug: 'shops-establishment-act',
        title: 'Shops and Establishment License',
        icon: '🏪',
        short: 'Mandatory license for commercial establishments',
        price: 1999,
        price_display: '₹1,999',
        category: 'Compliance',
        description: 'Shop Act license registration for commercial premises',
        fullDescription: 'Shops and Establishment Act registration is mandatory for all commercial establishments including shops, offices, restaurants, and hotels. It regulates working hours, leave policies, and employment conditions.',
        features: [
          'Shop Act license registration',
          'State-specific compliance',
          'Employee welfare compliance',
          'Renewal reminders',
          'Display certificate',
          'Legal validity'
        ],
        requirements: [
          'Business registration proof',
          'Premises address proof',
          'Rent agreement/ownership documents',
          'Employer and employee details',
          'PAN and Aadhaar',
          'Photographs'
        ],
        deliverables: [
          'Shops and Establishment certificate',
          'Registration number',
          'Display board certificate',
          'Compliance guidelines',
          'Renewal calendar'
        ],
        timeline: '10-15 working days'
      }
    ]
  },
  'legal-services': {
    title: 'Legal Services',
    slug: 'legal-services',
    icon: '⚖️',
    description: 'Legal documentation and agreement drafting services',
    services: [
      {
        slug: 'partnership-deed',
        title: 'Partnership Deed',
        icon: '📜',
        short: 'Legal partnership agreement drafting and registration',
        price: 2999,
        price_display: '₹2,999',
        category: 'Legal Services',
        description: 'Professional partnership deed drafting and registration',
        fullDescription: 'Partnership Deed is a legal document that outlines the terms and conditions of partnership including profit sharing ratio, capital contribution, roles and responsibilities, decision-making process, and dispute resolution mechanisms. It provides legal protection to all partners.',
        features: [
          'Customized deed drafting by advocates',
          'All essential clauses included',
          'Legal review by experienced advocates',
          'Notarization assistance',
          'Registration support with sub-registrar',
          'Digital and physical copies'
        ],
        requirements: [
          'Partner details with ID proofs',
          'Business nature and activities',
          'Profit sharing ratio',
          'Capital contribution details',
          'Roles and responsibilities of partners',
          'Duration of partnership'
        ],
        deliverables: [
          'Partnership deed document',
          'Notarized copies (multiple)',
          'Registration certificate',
          'Digital soft copy (PDF)'
        ],
        timeline: '3-5 working days'
      },
      {
        slug: 'nda-agreement',
        title: 'NDA Agreement',
        icon: '🔒',
        short: 'Non-disclosure agreement for confidentiality',
        price: 1499,
        price_display: '₹1,499',
        category: 'Legal Services',
        description: 'Professional NDA drafting to protect confidential information',
        fullDescription: 'Non-Disclosure Agreement (NDA) protects confidential business information shared with employees, partners, contractors, or third parties. Essential for protecting trade secrets, proprietary information, business plans, and customer data.',
        features: [
          'Unilateral or mutual NDA options',
          'Customized clauses for your needs',
          'Legal validity ensured',
          'Industry-specific terms',
          'Digital signing support',
          'Notarization available'
        ],
        requirements: [
          'Parties details (disclosing & receiving)',
          'Type of information to protect',
          'Duration of confidentiality',
          'Jurisdiction and governing law',
          'ID proofs of parties',
          'Specific exclusions (if any)'
        ],
        deliverables: [
          'Customized NDA document',
          'Legal review certificate',
          'Digital and print copies',
          'Signing guidelines and instructions'
        ],
        timeline: '1-2 working days'
      },
      {
        slug: 'employment-agreement',
        title: 'Employment Agreement',
        icon: '👔',
        short: 'Employee contract and appointment letter drafting',
        price: 1999,
        price_display: '₹1,999',
        category: 'Legal Services',
        description: 'Professional employment contract drafting',
        fullDescription: 'Employment Agreement clearly defines the terms of employment including salary and benefits, roles and responsibilities, leave policy, working hours, confidentiality obligations, intellectual property rights, and termination clauses. Protects both employer and employee.',
        features: [
          'Comprehensive contract drafting',
          'Salary and benefits clauses',
          'Confidentiality and IP assignment clauses',
          'Notice period and termination terms',
          'Legal compliance with labor laws',
          'Industry-specific customization'
        ],
        requirements: [
          'Company and employee details',
          'Job designation and description',
          'Salary and benefits structure',
          'Leave and working hours policy',
          'Notice period requirements',
          'Non-compete terms (if required)'
        ],
        deliverables: [
          'Employment agreement document',
          'Legal review certificate',
          'Digital copies for both parties',
          'Signing instructions'
        ],
        timeline: '2-3 working days'
      },
      {
        slug: 'legal-notice',
        title: 'Legal Notice',
        icon: '⚠️',
        short: 'Send legal notice through advocate',
        price: 2499,
        price_display: '₹2,499',
        category: 'Legal Services',
        description: 'Professional legal notice drafting and sending',
        fullDescription: 'Legal Notice is a formal communication sent by an advocate to inform about legal rights violation and demand resolution. Often the first step before filing a lawsuit. Used for recovery of money, breach of contract, defamation, property disputes, and consumer complaints.',
        features: [
          'Advocate consultation',
          'Professional notice drafting',
          'Registered post or speed post delivery',
          'Acknowledgment tracking',
          'Legal advice included',
          'Response handling support'
        ],
        requirements: [
          'Sender and recipient details',
          'Issue description and chronology of facts',
          'Supporting documents',
          'Desired relief or action demanded',
          'Timeline for response',
          'ID proofs and addresses'
        ],
        deliverables: [
          'Legal notice document on letterhead',
          'Advocate signature and seal',
          'Postal delivery receipt',
          'Acknowledgment proof',
          'Follow-up consultation (1 free)'
        ],
        timeline: '2-3 working days'
      },
      {
        slug: 'mou-drafting',
        title: 'MOU Drafting',
        icon: '📋',
        short: 'Memorandum of Understanding for business agreements',
        price: 2999,
        price_display: '₹2,999',
        category: 'Legal Services',
        description: 'Professional MOU drafting for business relationships',
        fullDescription: 'Memorandum of Understanding (MOU) is a formal agreement between parties outlining terms and conditions of a business relationship. Though not always legally binding, it establishes clear expectations, roles, responsibilities, and framework for future agreements.',
        features: [
          'Customized MOU drafting',
          'Terms and conditions clearly defined',
          'Rights and obligations of parties',
          'Legal review by advocates',
          'Notarization support',
          'Multiple party MOU support'
        ],
        requirements: [
          'All parties details',
          'Purpose and objectives of MOU',
          'Terms and conditions',
          'Duration and validity period',
          'Obligations of each party',
          'Dispute resolution mechanism'
        ],
        deliverables: [
          'Complete MOU document',
          'Legal review certificate',
          'Notarized copies',
          'Digital and print versions for all parties'
        ],
        timeline: '3-5 working days'
      },
      {
        slug: 'lease-agreement',
        title: 'Lease/Rent Agreement',
        icon: '🏠',
        short: 'Property rental agreement drafting and registration',
        price: 1999,
        price_display: '₹1,999',
        category: 'Legal Services',
        description: 'Rental agreement drafting for residential/commercial property',
        fullDescription: 'Lease Agreement is a legal contract between landlord and tenant defining terms of property rental including monthly rent, security deposit, lock-in period, maintenance responsibilities, and termination clauses. Registration is mandatory for leases exceeding 11 months.',
        features: [
          'Residential or commercial agreement',
          'Lock-in period and escalation clauses',
          'Maintenance and utility terms',
          'Registration assistance',
          'Stamp duty guidance',
          'Legal validity ensured'
        ],
        requirements: [
          'Landlord and tenant details',
          'Property details and documents',
          'Rent amount and security deposit',
          'Duration of lease',
          'Terms and conditions',
          'ID and address proofs'
        ],
        deliverables: [
          'Lease agreement document (11/36/60 months)',
          'Registration assistance',
          'Notarized copies',
          'Stamp duty payment guidance',
          'Registered agreement copy'
        ],
        timeline: '3-5 working days'
      },
      {
        slug: 'service-agreement',
        title: 'Service Agreement',
        icon: '🤝',
        short: 'Freelancer and consultant service agreement',
        price: 2499,
        price_display: '₹2,499',
        category: 'Legal Services',
        description: 'Professional service agreement for freelancers and consultants',
        fullDescription: 'Service Agreement defines the terms of professional services provided by freelancers, consultants, or contractors. Includes scope of work, deliverables, payment terms, timelines, intellectual property rights, and termination clauses.',
        features: [
          'Scope of work definition',
          'Payment terms and schedule',
          'Deliverables and timelines',
          'IP rights assignment',
          'Confidentiality clauses',
          'Termination conditions'
        ],
        requirements: [
          'Service provider and client details',
          'Nature and scope of services',
          'Payment terms and rates',
          'Project duration and milestones',
          'Deliverables expected',
          'Special terms (if any)'
        ],
        deliverables: [
          'Service agreement document',
          'Legal review certificate',
          'Digital copies',
          'Amendment guidelines'
        ],
        timeline: '2-3 working days'
      }
    ]
  },
  'funding-loans': {
    title: 'Funding & Loans',
    slug: 'funding-loans',
    icon: '💰',
    description: 'Business funding and loan assistance services',
    services: [
      {
        slug: 'business-loan',
        title: 'Business Loan',
        icon: '🏦',
        short: 'Secure business loans from banks and NBFCs',
        price: 4999,
        price_display: '₹4,999',
        category: 'Funding & Loans',
        description: 'Business loan assistance from leading banks and NBFCs',
        fullDescription: 'Get business loans from leading banks and NBFCs with our comprehensive assistance. We help with eligibility assessment, documentation preparation, bank application submission, and follow-up to ensure quick loan approval at competitive interest rates.',
        features: [
          'Loan eligibility assessment',
          'Complete documentation preparation',
          'Multiple bank applications submission',
          'Follow-up and coordination',
          'Best interest rates negotiation',
          'Multiple bank and NBFC options'
        ],
        requirements: [
          'Business registration documents',
          'Financial statements (last 2 years)',
          'Bank statements (6-12 months)',
          'Income tax returns (2-3 years)',
          'Business plan and projections',
          'Collateral documents (if required)'
        ],
        deliverables: [
          'Loan eligibility report',
          'Complete documentation package',
          'Bank applications filed (3-5 banks)',
          'Loan approval assistance',
          'Disbursement support and coordination'
        ],
        timeline: '15-30 working days'
      },
      {
        slug: 'mudra-loan',
        title: 'MUDRA Loan',
        icon: '🎯',
        short: 'Government-backed collateral-free MUDRA loans',
        price: 2999,
        price_display: '₹2,999',
        category: 'Funding & Loans',
        description: 'MUDRA loan assistance for micro and small enterprises',
        fullDescription: 'MUDRA (Micro Units Development & Refinance Agency) provides collateral-free loans up to ₹10 lakhs for micro and small enterprises through banks. Available in three categories: Shishu (up to ₹50,000), Kishore (₹50,001 to ₹5 lakhs), and Tarun (₹5 lakhs to ₹10 lakhs).',
        features: [
          'Loans up to ₹10 lakhs without collateral',
          'No collateral or guarantee required',
          'Low interest rates (starts at 8%)',
          'Government-backed scheme',
          'Complete documentation assistance',
          'Quick approval process (15-20 days)'
        ],
        requirements: [
          'Business plan with cost estimates',
          'ID and address proof',
          'Business registration or GST (if applicable)',
          'Bank statements (6 months)',
          'Income proof or ITR',
          'Project cost and means of finance'
        ],
        deliverables: [
          'MUDRA loan application complete',
          'Detailed business plan document',
          'Bank submission and follow-up',
          'Approval assistance',
          'Disbursement support'
        ],
        timeline: '15-20 working days'
      },
      {
        slug: 'startup-funding',
        title: 'Startup Funding Assistance',
        icon: '🚀',
        short: 'Connect with angel investors and venture capitalists',
        price: 9999,
        price_display: '₹9,999',
        category: 'Funding & Loans',
        description: 'Startup funding assistance and investor connections',
        fullDescription: 'Get comprehensive assistance in raising funds for your startup. We help with pitch deck creation, financial modeling, investor database access, valuation assistance, due diligence support, and term sheet negotiations to maximize your chances of successful fundraising.',
        features: [
          'Professional pitch deck creation',
          'Investor database access (500+ investors)',
          'Company valuation assistance',
          'Due diligence preparation and support',
          'Term sheet review and negotiation',
          'Legal documentation support'
        ],
        requirements: [
          'Detailed business plan',
          'Financial projections (3-5 years)',
          'Company incorporation documents',
          'Team information and background',
          'Market analysis and competition',
          'Existing cap table and shareholding'
        ],
        deliverables: [
          'Professional investor pitch deck',
          'Investor introductions (min 10)',
          'Company valuation report',
          'Due diligence documentation package',
          'Term sheet negotiation support'
        ],
        timeline: '30-60 days'
      },
      {
        slug: 'cgtmse-loan',
        title: 'CGTMSE Loan',
        icon: '🛡️',
        short: 'Collateral-free loans with government guarantee',
        price: 3999,
        price_display: '₹3,999',
        category: 'Funding & Loans',
        description: 'CGTMSE scheme for collateral-free MSME loans',
        fullDescription: 'Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) provides collateral-free loans up to ₹2 crores for MSMEs through lending institutions. The scheme provides guarantee coverage up to 85% of the sanctioned amount.',
        features: [
          'Loans up to ₹2 crores without collateral',
          'No collateral or third-party guarantee',
          'Government guarantee coverage (85%)',
          'Complete documentation support',
          'Bank coordination and follow-up',
          'Quick processing time'
        ],
        requirements: [
          'MSME/Udyam registration certificate',
          'Detailed project report',
          'Financial statements or projections',
          'ID and address proof',
          'Bank statements (6-12 months)',
          'Business registration documents'
        ],
        deliverables: [
          'CGTMSE loan application',
          'Detailed project report',
          'Bank submission and coordination',
          'Guarantee certificate processing',
          'Loan approval and disbursement support'
        ],
        timeline: '20-30 working days'
      },
      {
        slug: 'working-capital-loan',
        title: 'Working Capital Loan',
        icon: '💵',
        short: 'Manage daily operations and cash flow',
        price: 4999,
        price_display: '₹4,999',
        category: 'Funding & Loans',
        description: 'Working capital loans for day-to-day business operations',
        fullDescription: 'Working capital loans help businesses manage day-to-day operations, purchase inventory, pay salaries, and meet short-term financial obligations. Available as overdraft facility, cash credit, or term loan with flexible repayment options.',
        features: [
          'Quick loan approval (7-15 days)',
          'Flexible repayment options',
          'Minimal documentation required',
          'Competitive interest rates (10-14%)',
          'Multiple lender options',
          'Expert guidance throughout process'
        ],
        requirements: [
          'Business registration proof',
          'Bank statements (6-12 months)',
          'GST returns (6-12 months)',
          'Financial statements (if available)',
          'Income tax returns (2 years)',
          'Purchase orders or invoices'
        ],
        deliverables: [
          'Complete loan application package',
          'Financial analysis report',
          'Lender coordination (3-5 options)',
          'Approval assistance and follow-up',
          'Disbursement support'
        ],
        timeline: '7-15 working days'
      },
      {
        slug: 'angel-investment',
        title: 'Angel Investment',
        icon: '👼',
        short: 'Early-stage funding from angel investors',
        price: 14999,
        price_display: '₹14,999',
        category: 'Funding & Loans',
        description: 'Connect with angel investors for seed funding',
        fullDescription: 'Angel investment provides early-stage capital for startups from high-net-worth individuals. We facilitate connections with active angel networks and individual investors, help with pitch preparation, valuation negotiation, and legal documentation.',
        features: [
          'Angel investor network access (200+ active angels)',
          'Professional pitch deck preparation',
          'Company valuation guidance',
          'Investment terms negotiation support',
          'Legal documentation and compliance',
          'Post-investment mentorship connect'
        ],
        requirements: [
          'Comprehensive business plan',
          'Product/service prototype or MVP',
          'Market research and TAM/SAM/SOM',
          'Founding team details and background',
          'Financial projections (3 years)',
          'Current traction metrics (if any)'
        ],
        deliverables: [
          'Investor-ready pitch deck (15-20 slides)',
          'Angel network introductions (10-15)',
          'Company valuation report',
          'Term sheet negotiation assistance',
          'SHA and legal documentation support'
        ],
        timeline: '45-90 days'
      }
    ]
  }
};

// Helper Functions
export const getAllServices = (): Service[] => {
  const allServices: Service[] = [];
  Object.values(servicesData).forEach(category => {
    allServices.push(...category.services);
  });
  return allServices;
};

export const findServiceBySlug = (slug: string): Service | undefined => {
  const allServices = getAllServices();
  return allServices.find(service => service.slug === slug);
};

export const getCategoryBySlug = (slug: string): ServiceCategory | undefined => {
  return servicesData[slug];
};

export const getServicesByCategory = (categorySlug: string): Service[] => {
  const category = servicesData[categorySlug];
  return category ? category.services : [];
};

export const getAllCategories = (): ServiceCategory[] => {
  return Object.values(servicesData);
};

export const searchServices = (query: string): Service[] => {
  const allServices = getAllServices();
  const lowerQuery = query.toLowerCase();
  return allServices.filter(service => 
    service.title.toLowerCase().includes(lowerQuery) ||
    service.short.toLowerCase().includes(lowerQuery) ||
    service.category.toLowerCase().includes(lowerQuery) ||
    service.description.toLowerCase().includes(lowerQuery)
  );
};

export default servicesData;