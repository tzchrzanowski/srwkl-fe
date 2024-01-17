import React from 'react';
import {useTranslation} from "react-i18next";
import PanTadeusz from 'res/img/Pan_Tadeusz_1.jpg';
import TopNavigation from "../../top-navigation/TopNavigation";
import Footer from "../../footer/Footer";
import Header from 'components/header/Header';

export function Contact() {
    const { t } = useTranslation();

    return (
        <div className={"page-content-wrapper App"}>
            <TopNavigation />
            <div className={"fb fb-col mb-4 mh90v"}>
                <Header />
                <div className={"fb fb-row"}>
                    <div className={"fb fb-col jc-center ml-1 mr-1 mt-4 mb-4"}>
                        <span>asd</span>
                        <span>asd</span>
                    </div>
                    <img className={"mr-1 ml-1 mt-4 mb-4"} src={PanTadeusz} alt={"img"} height={"500px"} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;
