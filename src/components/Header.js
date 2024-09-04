import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ triggerDarkMode }) {
    const [isDarkmode, setIsDarkmode] = useState(false);

    function handleDarkmode() {
        triggerDarkMode();
        setIsDarkmode(!isDarkmode);
    }

    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container">
                <h1 className="navbar-brand">The Grocery List</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/grocery-home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/grocery-list">Grocery List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/grocery-list-by-category">Grocery List By Category</Link>
                        </li>
                    </ul>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handleDarkmode} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                        &nbsp;{isDarkmode ? "Darkmode On" : "Darkmode Off"}
                    </label>
                </div>
            </div>
        </nav>
    );

};