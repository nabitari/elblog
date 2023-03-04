import { Analytics } from '@vercel/analytics/react';
import SEO from '@/components/SEO'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <SEO />
      <Component {...pageProps} />
      <Analytics />
    </>


  )
}
