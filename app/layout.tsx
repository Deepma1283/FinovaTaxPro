// import '../styles/globals.css'
// import NavBar from '../components/NavBar'

// export const metadata = {
//   title: 'MRS & Co. - Business Services',
//   description: 'Company formation, GST, Trademark and more',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <NavBar />
//         {children}
//       </body>
//     </html>
//   )
// }
import './global.css'
import Header from '../components/layout/header'
import Footer from '../components/layout/Footer'

export const metadata = {
  title: 'FinovaTaxPro',
  description: 'FinovaTaxPro - Tax, compliance and business registration services'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}