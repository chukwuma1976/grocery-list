import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { GroceryContext } from "../App";
import AddGroceryItem from "./AddGroceryItem";
import PopUp from "./PopUp";
import GroceryItemsByCategory from "./GroceryItemsByCategory";

export default function GroceryListByCategory() {
    const url = 'http://localhost:5000/groceries';
    const { groceryList, setGroceryList } = useContext(GroceryContext);
    const [showAddForm, setShowAddForm] = useState(false);
    const [categories, setCategories] = useState({});

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setGroceryList(res.data);
                categorizeItems(res.data);
            })
            .catch(err => console.log('Error: ', err));
    }, [setGroceryList]);

    function categorizeItems(items) {
        let tempObj = {};
        items.forEach(item => {
            if (!tempObj[item.category]) tempObj[item.category] = [];
            tempObj[item.category].push(item)
        });
        setCategories(tempObj);
    }

    return (
        <div className="row d.block justify-content-center">
            <div className="col-8">
                <button className="btn btn-success" onClick={() => setShowAddForm(true)}>Add Grocery Item</button>
                <PopUp showPopUp={showAddForm} closePopUp={() => setShowAddForm(false)}>
                    <AddGroceryItem
                        items={groceryList}
                        updateItems={setGroceryList}
                        closeForm={() => setShowAddForm(false)}>
                    </AddGroceryItem>
                </PopUp>
                <h2 className="text-center">Grocery List By Category</h2>
                <div>
                    {Object.keys(categories).sort().map(catKey => {
                        return (
                            <div key={catKey}>
                                <h3 key={catKey} className="text-center">{catKey}</h3>
                                <GroceryItemsByCategory
                                    items={categories[catKey]}
                                    groceryList={groceryList}
                                    setGroceryList={setGroceryList}>
                                </GroceryItemsByCategory>
                            </div>)
                    })}
                </div>
            </div>
        </div>
    )

}