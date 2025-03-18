
import React from "react";
import SideBar from "./SideBar";
import Logoloader from "../../assets/icons/sco_logo_grad.png"


export default function Loader() {
    return (
        <>
            <SideBar />
            <div id="container">
                <img src={Logoloader} alt="Logo" className="logo-img" />
                <span className="loading-circle sp1">
                    <span className="loading-circle sp2">
                        <span className="loading-circle sp3"></span>
                    </span>
                </span>
            </div>
        </>
    );
}
