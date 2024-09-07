import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PopUp from "./PopUp";
import AddGroceryItem from "./AddGroceryItem";
import { GroceryContext } from "../App";
import GroceryToolTip from "./GroceryToolTip";

export default function Header({ triggerDarkMode }) {
    const [isDarkmode, setIsDarkmode] = useState(false);
    const [showAddForm, setShowAddForm] = useState(false);
    const { groceryList, setGroceryList } = useContext(GroceryContext);

    function handleDarkmode() {
        triggerDarkMode();
        setIsDarkmode(!isDarkmode);
    }

    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-primary">
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
                <button className="btn btn-success" onClick={() => setShowAddForm(true)}>
                    <GroceryToolTip id="add-to-list" title="Add Grocery Item" placement="bottom">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5z" />
                        </svg>
                    </GroceryToolTip>
                </button>
                <PopUp showPopUp={showAddForm} closePopUp={() => setShowAddForm(false)}>
                    <AddGroceryItem
                        items={groceryList}
                        updateItems={setGroceryList}
                        closeForm={() => setShowAddForm(false)}>
                    </AddGroceryItem>
                </PopUp>
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