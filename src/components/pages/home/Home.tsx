import React from 'react';
import './Home.css';
import logoSRWKL from "res/logo_crests_only.png";
import logoCaption from "res/logo_caption_only.png";
import TopNavigation from "components/top-navigation/TopNavigation";
import {useTranslation} from "react-i18next";
import Footer from "components/footer/Footer";

export function Home() {
    const { t } = useTranslation();

    return ( <>
        <div className={"page-content-wrapper App"} >
            <TopNavigation />
            <img src={logoSRWKL} className="App-logo" alt="logo" />
            <img src={logoCaption} className="App-logo App-logo-caption" alt="logo" />
            <p className={"font-xxl"}>
                {t('common.title')}
            </p>
        </div>
        <Footer />
        </>
    )
}

export default Home;
