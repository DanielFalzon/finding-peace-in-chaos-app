import styles from './header.module.css';
import React, { useContext, useState } from "react";
import Link from "next/link";
import {BsFacebook} from "react-icons/bs";

import {ConfigurationContext} from "../../providers/configuration.provider";
import { MenuToggle } from '../menu-toggle/menu-toggle.component';
import MobileMenu from "../mobile-menu/mobile-menu.component";
import MenuItems from '../menu-items/menu-items.component';

const Header = () => {
    const [mobileHidden, setMobileHidden] = useState(true);
    const {configuration, loading} = useContext(ConfigurationContext);

    return (
        <>
        <div className={styles.header}>
            <div className={styles['top-navbar']}>
                <div className={styles['top-navbar-item', 'top-navbar-item-mob-spacer']}></div>

                <div className={styles['top-navbar-item']}>
                    { !loading ? 
                        <Link href="/">
                            <img alt="logo" height="100" className={styles.logo} src={configuration.logo.image} /> 
                        </Link>: <></> }
                </div>

                <div className={styles['top-navbar-item', 'top-navbar-item-menu-items']}>
                    <MenuItems />
                </div>

                <div className={styles['mobile-menu-toggle']} onClick={() => setMobileHidden(!mobileHidden)}>
                    <MenuToggle isOpen={!mobileHidden} toggle={() => setMobileHidden(mobileHidden)} />
                </div>

                <div className={styles['mobile-menu-toggle', 'top-navbar-item-facebook']}>
                    <BsFacebook size={26}/>
                </div>
            </div>
            <MobileMenu hidden={mobileHidden} />
            <div 
                className={mobileHidden? styles['mobile-menu-content-cover'] + " hidden" : styles['mobile-menu-content-cover'] + " block"} 
                onClick={() => setMobileHidden(!mobileHidden)} 
            />
        </div>
        <div className="h-24 md:h-16"></div>
        </>
    )
}

export default Header;