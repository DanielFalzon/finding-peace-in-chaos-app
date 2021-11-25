//https://nextjs.org/docs/basic-features/layouts

import Header from './header/header.component';
import Footer from './footer/footer.component';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="container mx-auto lg:px-10 2xl:px-16">{children}</main>
            <Footer />
        </>
    )
}

export default Layout