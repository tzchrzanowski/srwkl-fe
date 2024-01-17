import React from 'react';
import {useTranslation} from "react-i18next";
import PanTadeusz from 'res/img/Pan_Tadeusz_1.jpg';
import TopNavigation from "../../top-navigation/TopNavigation";
import Footer from "../../footer/Footer";
import Header from 'components/header/Header';
import { regon, nip, bankAccNumber, emailAddress, phoneNumber} from "data/static-values";

export function Contact() {
    const { t } = useTranslation();

    return (
        <div className={"page-content-wrapper App"}>
            <TopNavigation />
            <div className={"fb fb-col mb-4 mh90v"}>
                <Header />
                <div className={"fb fb-row"}>
                    <div className={"fb fb-col jc-center ml-1 mr-1 mt-4 mb-4"}>
                        <span className={"font-l font-b"}>{t("contact.contact")}</span>
                        <span className={"font-m mt-4"}>{t("contact.mail-address")}</span>
                        <span className={"font-m font-b"}>{t("contact.address-line1")}</span>
                        <span className={"font-m font-b"}>{t("contact.post-code")}</span>
                        <div className={"mt-4"}>
                            <span className={"font-m"}>{t("contact.phone")}</span>
                            <span className={"font-m font-b"}>{phoneNumber}</span>
                        </div>
                        <div className={"mt-4"}>
                            <span className={"font-m"}>{t("contact.email")}</span>
                            <span className={"font-m font-b"}>{emailAddress}</span>
                        </div>
                        <div className={"mt-4"}>
                            <span className={"font-m"}>{t("contact.regon")}</span>
                            <span className={"font-m font-b"}>{regon}</span>
                        </div>
                        <div className={""}>
                            <span className={"font-m"}>{t("contact.NIP")}</span>
                            <span className={"font-m font-b"}>{nip}</span>
                        </div>
                        <span className={"mt-4 font-m"}>{t("contact.public-number-line1")}</span>
                        <span className={"font-m"}>{t("contact.public-number-line2")}</span>
                        <span className={"mt-4 font-m"}>{t("contact.bank-acc")}</span>
                        <span className={"font-m font-b"}>{bankAccNumber}</span>
                    </div>
                    <img className={"mr-1 ml-1 mt-4 mb-4"} src={PanTadeusz} alt={"img"} height={"500px"} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;
