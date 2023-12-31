import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Provider from '@/context/Provider'
import { AuthProvider } from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Provider>
            <div>
              <Navbar />
              {children}
            </div>
          </Provider>
        </AuthProvider>
      </body>
    </html>
  )
}
