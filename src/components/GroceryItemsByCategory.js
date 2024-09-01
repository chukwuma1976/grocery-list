import axios from "axios";
import { useState } from "react";
import PopUp from "./PopUp";
import UpdateGroceryItem from "./UpdateGroceryItem";

export default function GroceryItemsByCategory({ items }) {
    const url = 'http://localhost:5000/groceries';
    const [groceryItems, setGroceryItems] = useState(items);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [updateId, setUpdateId] = useState('');

    function onDelete(id) {
        axios.delete(url + '/' + id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        setGroceryItems(() => groceryItems.filter(item => item.id !== id));
    }

    function onUpdate(id) {
        setUpdateId(id);
        setShowUpdateForm(true);
    }

    return (
        <div className="row d.block">
            <div className="col-12">
                {groceryItems.map(item => {
                    return (
                        <div key={item.id} className="d-flex justify-content-between">
                            <p className="fs-5">{item.name}</p>
                            <div >
                                <button type="button" className="btn btn-info btn-sm" onClick={() => onUpdate(item.id)}>Update</button>
                                <button type="button" className="btn btn-danger btn-sm" onClick={() => onDelete(item.id)}>Delete</button>
                            </div>
                            {updateId === item.id &&
                                <PopUp showPopUp={showUpdateForm} closePopUp={() => setShowUpdateForm(false)}>
                                    <UpdateGroceryItem
                                        item={item}
                                        items={groceryItems}
                                        updateItems={setGroceryItems}
                                        closeForm={() => setShowUpdateForm(false)}>
                                    </UpdateGroceryItem>
                                </PopUp>}
                        </div>)
                }
                )}
            </div>
        </div>
    )
}