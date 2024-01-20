import React from 'react';
import {useTranslation} from "react-i18next";
import TopNavigation from "components/top-navigation/TopNavigation";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import PanTadeuszCoop from "res/img/Pan_Tadeusz_coop.jpg";
export function Cooperation() {
    const { t } = useTranslation();

    return(
        <div className={"page-content-wrapper App"}>
            <TopNavigation />
            <div className={"fb fb-col mb-4 mh90v"}>
                <Header />
                <div className={"fb fb-responsive"}>
                    <div className={"fb fb-col jc-center ml-1 mr-1 mt-4 mb-4 max-vw-responsive"}>
                        <span className={"font-l font-b"}>{t("cooperation.header")}</span>
                        <span className={"font-m mt-4"}>{t("cooperation.embassy")}</span>
                        <span className={"font-m mt-4"}>{t("cooperation.kossakowski")}</span>
                        <span className={"font-m mt-4"}>{t("cooperation.ziemianie")}</span>
                        <span className={"font-m mt-4"}>{t("cooperation.grodzienscy")}</span>
                        <span className={"font-m mt-4"}>{t("cooperation.polsko-saska")}</span>
                    </div>
                    <div className={"fb fb-col ai-center"}>
                        <img className={"mr-1 ml-1 mt-4 mb-4"} src={PanTadeuszCoop} alt={"img"} width={"300px"} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cooperation;
