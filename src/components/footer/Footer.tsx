import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className={"footer-wrapper fb fb-row jc-space-between ai-center w100 h-30p"}>
            <span className={"ml-3"}>{t('footer.copyright')}</span>
            <div className={"mr-3"}>
                <span className={"ml-1 mr-1"}>{t('footer.statute-pl')}</span>
                <span className={"ml-1 mr-1"}>{t('footer.statute-lt')}</span>
            </div>
        </div>
    );
};

export default Footer;
