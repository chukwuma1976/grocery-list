import { useState } from "react";

export default function Header({ triggerDarkMode }) {
    const [isDarkmode, setIsDarkmode] = useState(false);
    function handleDarkmode() {
        triggerDarkMode();
        setIsDarkmode(!isDarkmode);
    }

    return (
        <div className="row  bg-primary text-center">
            <div className="col-2"></div>
            <h1 className="col-8">
                The Grocery List
            </h1>
            <div className="form-check form-switch col-2  d-flex justify-content-end">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handleDarkmode} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">&nbsp;{isDarkmode ? "Darkmode On" : "Darkmode Off"}</label>
            </div>
        </div>
    );

};