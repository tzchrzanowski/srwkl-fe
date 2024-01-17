import React, { useContext } from 'react';
import i18n from 'i18n';
import { useTranslation } from 'react-i18next';
import './TopNavigation.css';
import logoSRWKL from "res/logo_srwkl.png";
import HamburgerIcon from 'res/icons/hamburger.svg';
import SideNavigation from "../side-navigation/SideNavigation";
import { Link } from "react-router-dom";

export interface ButtonsInterface {
    route: string,
    caption: string,
    public: boolean,
}

export function TopNavigation() {
    const [isSideNavOpen, setSideNavOpen] = React.useState(false);
    const { t } = useTranslation();

    const buttons: ButtonsInterface[] = [
        {route: '/', caption: t("navigation.home"), public: true},
        {route: '/idea', caption: t("navigation.idea"), public: true},
        {route: '/news', caption: t('navigation.news'), public: true},
        {route: '/album', caption: t('navigation.album'), public: true},
        {route: '/history', caption: t('navigation.history'), public: true},
        {route: '/publications', caption: t('navigation.publications'), public: true},
        {route: '/families', caption: t('navigation.families'), public: true},
        {route: '/board', caption: t('navigation.board'), public: true},
        {route: '/cooperation', caption: t('navigation.cooperation'), public: true},
        {route: '/contact', caption: t('navigation.contact'), public: true},
    ];

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    }

    /*
    * opens and closes left side menu that replaces top-navigation menu on small screen device:
    * */
    const handleLeftSideMenu = ()=> {
        setSideNavOpen(prevState => !prevState);
    }

    return (
        <>
            {/* right-side menu: */}
            <SideNavigation
                isOpen={isSideNavOpen}
                setSideNavigationOpenCallback={setSideNavOpen}
                buttons={buttons}
            />
            {/* top navigation menu: */}
            <div className={"nav-container"}>
                <div className={"buttons-container"}>
                    <div className={"button-container ml-4"}>
                        <img src={logoSRWKL} className="top-nav-logo" alt="logo" />
                    </div>
                    <div className={"button-container hamburger-container ml-6 cursor"} onClick={handleLeftSideMenu} >
                        <img className={"hamburger-menu-icon"} src={HamburgerIcon} alt={"menu"}/>
                    </div>
                    {buttons && buttons.map((button, id) => {
                        return <Link className={"top-nav-button"} to={button.route} key={id}>
                            <div className={"button-box button-box-top"}>
                            <span className={"top-nav-btn-caption"}>
                                {button.caption}
                            </span>
                            </div>
                        </Link>
                    })}
                </div>
                <div className={"buttons-container"}>
                    <div className={"top-nav-lng-button"} onClick={()=> changeLanguage('pl')}>
                        <div className={"button-box button-box-top"}>
                            <span className={"top-nav-btn-caption"}>PL</span>
                        </div>
                    </div>
                    <div className={"top-nav-lng-button"} onClick={()=> changeLanguage('lt')}>
                        <div className={"button-box button-box-top"}>
                            <span className={"top-nav-btn-caption"}>LT</span>
                        </div>
                    </div>
                    <div className={"top-nav-lng-button fl-end"} onClick={()=> changeLanguage('en')}>
                        <div className={"button-box button-box-top mr-3"}>
                            <span className={"top-nav-btn-caption"}>EN</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNavigation;

