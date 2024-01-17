import React from 'react';
import Logo from 'res/logo_srwkl.png';
import {useTranslation} from "react-i18next";


export function Header() {
    const { t } = useTranslation();

    return (
        <div className={"header-wrapper fb fb-row jc-center ai-center mt-3"}>
            <img src={Logo} alt={"logo"} height={"250"} />
            <div className={"fb fb-col ai-center jc-flex-start"}>
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
