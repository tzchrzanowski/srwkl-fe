import React, { useContext } from 'react';
import './SideNavigation.css';
import {ButtonsInterface} from "../top-navigation/TopNavigation";
import { Link } from "react-router-dom";

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
                return <Link className={"categoryButton"} to={page.route} onClick={()=>{}}>
                    <span className={"categoryButtonCaption"}>{page.caption}</span>
                </Link>
            })}
        </div>
    );
}

export default SideNavigation;

