import React from 'react';
import {useTranslation} from "react-i18next";
import TopNavigation from "components/top-navigation/TopNavigation";
import Header from "components/header/Header";
import {families} from "data/static-values";
import PanTadeuszImg from "res/img/Pan_Tadeusz_rody.jpg";
import Footer from "components/footer/Footer";

export function Families() {
    const {t} = useTranslation();

    return (
        <div className={"page-content-wrapper App"}>
            <TopNavigation />
            <div className={"fb fb-col mb-4 mh90v"}>
                <Header />
                <div className={"fb fb-responsive"}>
                    <div className={"fb fb-col jc-center ml-1 mr-1 mt-4 mb-4 max-vw-responsive"}>
                        <span className={"font-l font-b"}>{t("families.header")}</span>
                        {families && families.map((el, id)=> {
                            return (
                                <div className={"fb fb-col"} key={id}>
                                    <span className={"font-m mt-1 font-b"}>{el}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className={"fb fb-col ai-center"}>
                        <img className={"mr-1 ml-1 mt-4 mb-4"} src={PanTadeuszImg} alt={"img"} width={"300px"} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Families;
