import Footer from './Footer'
import Navbar from './Navbar2'
import AreaA from './sections/areaa'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <AreaA/>
            <div className='container mx-auto'>
                {children}
            </div>
            <Footer />
        </>
    )
}