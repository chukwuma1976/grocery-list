import axios from "axios";
import { useEffect, useState } from "react";
import AddGroceryItem from "./AddGroceryItem";
import PopUp from "./PopUp";
import UpdateGroceryItem from "./UpdateGroceryItem";

export default function GroceryList() {
    const url = 'http://localhost:5000/groceries';
    const [groceryList, setGroceryList] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [updateId, setUpdateId] = useState('');

    useEffect(() => {
        axios.get(url)
            .then(res => setGroceryList(res.data))
            .catch(err => console.log('Error: ', err));
    }, []);

    function onDelete(id) {
        axios.delete(url + '/' + id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        setGroceryList(() => groceryList.filter(item => item.id !== id));
    }

    function onUpdate(id) {
        setUpdateId(id);
        setShowUpdateForm(true);
    }

    return (
        <div>
            <button className="btn btn-success" onClick={() => setShowAddForm(true)}>Add Grocery Item</button>
            <PopUp showPopUp={showAddForm} closePopUp={() => setShowAddForm(false)}>
                <AddGroceryItem
                    items={groceryList}
                    updateItems={setGroceryList}
                    closeForm={() => setShowAddForm(false)}>
                </AddGroceryItem>
            </PopUp>
            <h2 className="text-center">Grocery List</h2>
            {groceryList.map(item => {
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
                                    items={groceryList}
                                    updateItems={setGroceryList}
                                    closeForm={() => setShowUpdateForm(false)}>
                                </UpdateGroceryItem>
                            </PopUp>}
                    </div>)
            }
            )}
        </div>
    )
}