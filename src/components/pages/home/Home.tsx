import React from 'react';
import './Home.css';
import logoSRWKL from "../../../res/logo_crests_only.png";
import logoCaption from "../../../res/logo_caption_only.png";
import TopNavigation from "../../top-navigation/TopNavigation";

export function Home() {
    return (
        <div className={"home-wrapper App"} >
            <TopNavigation />
            <img src={logoSRWKL} className="App-logo" alt="logo" />
            <img src={logoCaption} className="App-logo App-logo-caption" alt="logo" />
            <p>
                Stowarzyszenie Rodów Wielkiego Księstwa Litewskiego
            </p>
        </div>
    )
}

export default Home;
