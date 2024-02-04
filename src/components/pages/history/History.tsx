import React from 'react';
import {useTranslation} from "react-i18next";
import TopNavigation from "components/top-navigation/TopNavigation";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import {history} from "data/history";

export function History() {
    const {t} = useTranslation();

    return (
        <div className={"page-content-wrapper App"}>
            <TopNavigation />
            <div className={"fb fb-col mb-4 mh90v"}>
                <Header />
                <div className={"fb fb-col"}>
                    <div className={"fb fb-col jc-center ml-1 mr-1 mt-4 mb-4 max-vw-responsive"}>
                        <span className={"font-l font-b"}>{t("history.header")}</span>
                        {history && history.map((el, id)=> {
                            return (
                                <div className={"fb fb-col mt-4"} key={id}>
                                    <span className={"font-b font-l"}>{el.header}</span>
                                    <span className={"font-m mt-2"}>{el.caption}</span>
                                    {
                                        el.imgs && el.imgs.map((img, id) => {
                                            return <img className={"mt-2"} src={img} key={id}/>;
                                        })
                                    }
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default History;
