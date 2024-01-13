import React, { useContext } from 'react';
import './SideNavigation.css';
import {ButtonsInterface} from "../top-navigation/TopNavigation";

interface SideNavigationProps {
    isOpen?: boolean,
    setSideNavigationOpenCallback: React.Dispatch<React.SetStateAction<boolean>>;
    buttons: ButtonsInterface[];
}

export function SideNavigation({isOpen, setSideNavigationOpenCallback, buttons}: SideNavigationProps) {

    return (<div
            className={(isOpen === true) ? "sideNavigation sideNavigationOpen" : "sideNavigation"}
            onMouseLeave={()=> setSideNavigationOpenCallback(false)}
        >
            {buttons && buttons.map((page, id) => {
                return <div className={"categoryButton"} onClick={()=>{}}>
                    <span className={"categoryButtonCaption"}>{page.caption}</span>
                </div>
            })}
        </div>
    );
}

export default SideNavigation;

