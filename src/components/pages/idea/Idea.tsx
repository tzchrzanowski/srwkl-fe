import React from 'react';
import {useTranslation} from "react-i18next";
import TopNavigation from "../../top-navigation/TopNavigation";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import PanTadeuszIdeaImg from "res/img/Pan_Tadeusz_idea.jpg";
import ZnaczekImg from "res/img/znaczek.jpg";

export function Idea() {
    const { t } = useTranslation();

    return (
        <div className={"page-content-wrapper App"}>
            <TopNavigation />
            <div className={"fb fb-col mb-4 mh90v"}>
                <Header />
                <div className={"fb fb-responsive"}>
                    <div className={"fb fb-col jc-center ml-1 mr-1 mt-4 mb-4 max-vw-responsive"}>
                        <span className={"font-l font-b"}>{t("idea.header")}</span>
                        <span className={"font-m mt-4"}>{t("idea.paragraph_1")}</span>
                        <span className={"font-m mt-4"}>{t("idea.paragraph_2")}</span>
                        <span className={"font-m mt-4"}>{t("idea.bullet-points-header")}</span>
                        <span className={"font-m mt-1"}>{t("idea.point-1")}</span>
                        <span className={"font-m mt-1"}>{t("idea.point-2")}</span>
                        <span className={"font-m mt-1"}>{t("idea.point-3")}</span>
                        <span className={"font-m mt-1"}>{t("idea.point-4")}</span>
                        <span className={"font-m mt-1"}>{t("idea.point-5")}</span>
                        <span className={"font-m mt-4"}>{t("idea.last-paragraph")}</span>
                        <span className={"font-m mt-4"}>{t("idea.a-politic")}</span>
                    </div>
                    <div className={"fb fb-col ai-center"}>
                        <img className={"mr-1 ml-1 mt-4 mb-4"} src={PanTadeuszIdeaImg} alt={"img"} width={"300px"} />
                        <img className={"mr-1 ml-1 mt-4 mb-4"} src={ZnaczekImg} alt={"img"} width={"300px"} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Idea;
