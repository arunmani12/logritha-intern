import '../styles/globals.css'
import Layou from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return <Layou> <Component {...pageProps} /></Layou>
}

export default MyApp
