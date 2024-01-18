import React from 'react';
import "./Header.css";
import Logo from 'res/logo_srwkl.png';
import {useTranslation} from "react-i18next";
import logoSRWKL from "res/logo_crests_only.png";
import logoCaption from "res/logo_caption_only.png";

export function Header() {
    const { t } = useTranslation();

    return (
        <div className={"header-wrapper fb fb-responsive ai-center mt-3 jc-center-responsive"}>
            {/*<img src={Logo} alt={"logo"} height={"250"} />*/}
                <img src={logoSRWKL} className="header-logo" alt="logo" height={"250"}/>
                <img src={logoCaption} className="header-logo header-logo-caption" alt="logo" height={"250"} />
            <div className={"w200 logo-placeholder"}></div>
            {/*<div className={"w500 fb fb-col ai-flex-start jc-flex-start ml-7"}>*/}
            <div className={"fb fb-col ai-flex-start jc-flex-start ml-7"}>
                <div>
                    <span className={"font-xxl"}>{t('header.s')}</span>
                    <span className={"font-xl"}>{t('header.stowarzyszenie')}</span>
                </div>
                <div>
                    <span className={"font-xxl"}>{t('header.r')}</span>
                    <span className={"font-xl"}>{t('header.rodow')}</span>
                </div>
                <div>
                    <span className={"font-xxl"}>{t('header.w')}</span>
                    <span className={"font-xl"}>{t('header.wielkiego')}</span>
                </div>
                <div>
                    <span className={"font-xxl"}>{t('header.k')}</span>
                    <span className={"font-xl"}>{t('header.ksiestwa')}</span>
                </div>
                <div>
                    <span className={"font-xxl"}>{t('header.l')}</span>
                    <span className={"font-xl"}>{t('header.litewskiego')}</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
