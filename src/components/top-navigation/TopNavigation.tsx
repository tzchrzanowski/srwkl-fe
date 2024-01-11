import React, { useContext } from 'react';
import './TopNavigation.css';

interface ButtonsInterface {
    route: string,
    caption: string,
    public: boolean,
}

const buttons: ButtonsInterface[] = [
    {route: '/', caption: "Home", public: true},
];

export function TopNavigation() {
    return (
        <div className={"nav-container"}>
            <div className={"buttons-container"}>
                <div className={"button-container"}>
                    Logo
                </div>
                {buttons && buttons.map((button, id) => {
                    return <div className={"top-nav-button"} key={id}>
                        <div className={"button-box button-box-top"}>
                            <span className={"top-nav-btn-caption"}>
                                {button.caption}
                            </span>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TopNavigation;

