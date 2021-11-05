import styles from './header.module.css';
import React, { useContext, useState } from "react";
import {ConfigurationContext} from "../../providers/configuration.provider";

import { MenuToggle } from '../menu-toggle/menu-toggle.component';
import MobileMenu from "../mobile-menu/mobile-menu.component";

const Header = () => {
    const [mobileHidden, setMobileHidden] = useState(true);
    const {configuration, loading} = useContext(ConfigurationContext);

    return (
        <>
        <div className={styles.header}>
            <div className={styles['top-navbar']}>
                <div className={styles['top-navbar-item']}></div>

                <div className={styles['top-navbar-item']}>
                    { !loading ? <img alt="logo" height="100" className={styles.logo} src={configuration.logo.image} /> : <></> }
                </div>
                <div className="z-20" onClick={() => setMobileHidden(!mobileHidden)}>
                    <MenuToggle isOpen={!mobileHidden} toggle={() => setMobileHidden(mobileHidden)} />
                </div>
            </div>
            <MobileMenu hidden={mobileHidden} />
            <div 
                className={mobileHidden? styles['mobile-menu-content-cover'] + " hidden" : styles['mobile-menu-content-cover'] + " block"} 
                onClick={() => setMobileHidden(!mobileHidden)} 
            />
        </div>
        <div className="h-24"></div>
        </>
    )
}

export default Header;