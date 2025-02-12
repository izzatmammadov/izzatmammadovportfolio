import '../styles/globals.css'
import i18n from "../i18n"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  return <Component {...pageProps} />
}
