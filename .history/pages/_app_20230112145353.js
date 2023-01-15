import { useRouter } from 'next/router'
import { useEffect } from 'react'
import '../styles/globals.css'

function useResetHistory() {
  const router = useRouter()

  useEffect (() => {
    document.addEventListener("snipcart.ready", () => {
      Snipcart.events.on('snipcart.initialized', (snipcartState) => {
        router.replace(router.asPath)
      })
    })
  }, [])
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
