//https://nextjs.org/docs/basic-features/layouts

import Header from './header/header.component';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}

export default Layout