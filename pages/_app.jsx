
import '../styles/globals.css'

import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar2 /> {/* navbar */}
      <Component {...pageProps} />
      <Footer /> {/* footer */}

    </>



  )
}

export default MyApp
