import React from 'react';
import {useTranslation} from "react-i18next";
import TopNavigation from "components/top-navigation/TopNavigation";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import { news } from "data/news";

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
                        {news && news.map((el, id)=> {
                            return (
                                <div className={"fb fb-col mt-4"} key={id}>
                                    <span className={"font-b font-l"}>{el.header}</span>
                                    <span className={"font-m mt-2"}>{el.caption}</span>
                                    {el.urlCaption ?
                                        <a href={el.url} className={"font-m mt-2"} target={"_blank"}>{el.urlCaption}</a>
                                        : ""
                                    }
                                    <img className={"mt-2"} src={el.img}/>
                                    {el.img2 ?
                                        <img className={"mt-2"} src={el.img2}/>
                                        : ""
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

export default News;
