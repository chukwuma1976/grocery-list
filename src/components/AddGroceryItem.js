import { useState } from "react";
import axios from "axios";
import "../styles/add-grocery-items.css"

export default function AddGroceryItem({ items, updateItems, closeForm }) {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('Other');

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
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Enter Category</label>
                    <input
                        type="text" class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Other"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Enter Name of Grocery Item</label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter a grocery item"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}