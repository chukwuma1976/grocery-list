import { useState } from "react";

export default function Header({ triggerDarkMode, triggerDisplayByCategory }) {
    const [isDarkmode, setIsDarkmode] = useState(false);
    const [showByCategory, setShowByCategory] = useState(false);

    function handleDarkmode() {
        triggerDarkMode();
        setIsDarkmode(!isDarkmode);
    }
    function handleDisplayByCategory() {
        triggerDisplayByCategory();
        setShowByCategory(!showByCategory);
    }

    return (
        <div className="row d.block justify-content-end">
            <div className="form-check form-switch col-2  d-flex justify-content-center">
                <button className="btn btn-primary btn-sm" onClick={handleDisplayByCategory}>
                    {showByCategory ? 'Display By Items' : 'Display By Category'}
                </button>
            </div>
            <h1 className="col-8 text-center bg-primary">
                The Grocery List
            </h1>
            <div className="form-check form-switch col-2  d-flex justify-content-end">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handleDarkmode} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                    &nbsp;{isDarkmode ? "Darkmode On" : "Darkmode Off"}
                </label>
            </div>
        </div>
    );

};