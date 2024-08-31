import { useState } from "react";
import axios from "axios";
import "../styles/add-grocery-items.css"

export default function UpdateGroceryItem({ item, items, updateItems, closeForm }) {
    const [name, setName] = useState(item.name);
    const { id, category } = item;

    function handleUpdateItem(event) {
        event.preventDefault();
        const url = 'http://localhost:5000/groceries';
        axios.put(url + '/' + id, { id, name, category })
            .then(res => {
                console.log(res.data);
                updateItems(() => items.map(item => item.id === id ? res.data : item));
                closeForm();
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container">
            <form onSubmit={handleUpdateItem}>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Update Name of Grocery Item</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder={name}
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    )
}