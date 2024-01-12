import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import './TopNavigation.css';
import logoSRWKL from "../../res/logo_srwkl.png";

interface ButtonsInterface {
    route: string,
    caption: string,
    public: boolean,
}

export function TopNavigation() {
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

    return (
        <div className={"nav-container"}>
            <div className={"buttons-container"}>
                <div className={"button-container"}>
                    <img src={logoSRWKL} className="top-nav-logo" alt="logo" />
                </div>
                {buttons && buttons.map((button, id) => {
                    return <div className={"top-nav-button"} key={id}>
                        <div className={"button-box button-box-top"}>
                            <span className={"top-nav-btn-caption"}>
                                {button.caption}
                            </span>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TopNavigation;

