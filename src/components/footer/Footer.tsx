import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className={"footer-wrapper fb fb-row jc-space-between"}>
            <span>{t('footer.copyright')}</span>
            <div>
                <span className={"ml-1 mr-1"}>{t('footer.statute-pl')}</span>
                <span className={"ml-1 mr-1"}>{t('footer.statute-lt')}</span>
            </div>

        </div>
    );
};

export default Footer;
