import axios from "axios";
import { useEffect, useState, useContext } from "react";
import PopUp from "./PopUp";
import UpdateGroceryItem from "./UpdateGroceryItem";
import { GroceryContext } from "../App";
import GroceryToolTip from "./GroceryToolTip";

export default function GroceryList() {
    const url = 'http://localhost:5000/groceries';
    const { groceryList, setGroceryList } = useContext(GroceryContext);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [updateId, setUpdateId] = useState('');

    useEffect(() => {
        axios.get(url)
            .then(res => setGroceryList(res.data))
            .catch(err => console.log('Error: ', err));
    }, [setGroceryList]);

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
        <div className="row d.block justify-content-center">
            <div className="col-8">
                <h2 className="text-center">Grocery List</h2>
                {groceryList.map(item => {
                    return (
                        <div key={item.id} className="d-flex justify-content-between">
                            <p className="fs-5">{item.name}</p>
                            <div >
                                <button type="button" className="btn btn-info btn-sm" onClick={() => onUpdate(item.id)}>
                                    <GroceryToolTip id="edit-in-list" title="Edit Grocery Item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                                            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
                                            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z" />
                                        </svg>
                                    </GroceryToolTip>
                                </button>
                                <button type="button" className="btn btn-danger btn-sm" onClick={() => onDelete(item.id)}>
                                    <GroceryToolTip id="delete-from-list" title="Delete Grocery Item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                        </svg>
                                    </GroceryToolTip>
                                </button>
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
        </div>
    )
}