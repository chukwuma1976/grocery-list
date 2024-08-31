import { useState } from "react";
import axios from "axios";
import "../styles/add-grocery-items.css"
import { groceryCategories, groceryItemsByCategory } from "../grocery-categories";

export default function AddGroceryItem({ items, updateItems, closeForm }) {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('Other');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

    function handleChangeCategory(category) {
        setCategory(category);
        const filtered =
            category !== "Other" ? groceryItemsByCategory.find(items => items.category === category).items
                : [];
        setFilteredSuggestions(filtered);
    }

    function handleSubmitItem(event) {
        event.preventDefault();
        const url = 'http://localhost:5000/groceries';
        axios.post(url, { name, category })
            .then(res => {
                console.log(res.data);
                updateItems([...items, res.data]);
                closeForm();
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmitItem}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Enter a Category</label>
                    <select className="form-select" aria-label="Select a category" onChange={(e) => handleChangeCategory(e.target.value)}>
                        <option value="Other">Select a Category</option>
                        {groceryCategories.map(category => <option key={category} value={category}>{category}</option>)}
                    </select>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Enter Name of Grocery Item</label>
                    <input
                        type="text"
                        className="form-control"
                        list="datalistOptions"
                        id="nameFormControlInput"
                        placeholder="Enter a grocery item"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />
                    {filteredSuggestions.length > 0 && (
                        <datalist id="datalistOptions">
                            {filteredSuggestions.map((suggestion, index) => (
                                <option key={index} value={suggestion} />
                            ))}
                        </datalist>
                    )}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}