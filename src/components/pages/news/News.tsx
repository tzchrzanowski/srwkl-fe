import React from 'react';
import {useTranslation} from "react-i18next";
import TopNavigation from "components/top-navigation/TopNavigation";
import Header from "components/header/Header";
import PanTadeuszImg from "res/img/Pan_Tadeusz_rody.jpg";
import Footer from "components/footer/Footer";

export function News() {
    const {t} = useTranslation();

    return (
        <div className={"page-content-wrapper App"}>
            <TopNavigation />
            <div className={"fb fb-col mb-4 mh90v"}>
                <Header />
                <div className={"fb fb-col"}>
                    <div className={"fb fb-col jc-center ml-1 mr-1 mt-4 mb-4 max-vw-responsive"}>
                        <span className={"font-l font-b"}>{t("news.header")}</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default News;
