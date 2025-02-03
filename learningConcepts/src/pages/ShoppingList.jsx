import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';


export const ShoppingList = () => {

    const [allItems, setAllItems] = useState({
        name: "",
        quantity: ""
    });

    const [allList, setAllList] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setAllItems({
            ...allItems,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, quantity } = allItems;
        if (!name || !quantity) {
            toast.error("All fields are required")
            return;
        }

        setAllList([
            ...allList,
            allItems
        ]);
        toast.success("Products add successfully")

        setAllItems({
            name: "",
            quantity: ""
        }
        );
    }

    return (
        <>
            <h1>Shopping list</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Item-Name:
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Your item name"
                        onChange={handleChange}
                        value={allItems.name}
                    />
                </label>

                <label htmlFor="quantity">
                    Quantity:
                    <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        placeholder="Enter Your Quantity"
                        onChange={handleChange}
                        value={allItems.quantity}
                    />
                </label>

                <button type="submit">Add Item</button>
            </form>

            <div>
                <ul>
                    {allList.map((item, index) => (
                        <li key={index}>
                            {item.name} - {item.quantity}
                        </li>
                    ))}
                </ul>
            </div>
            <ToastContainer />
        </>
    )
}
