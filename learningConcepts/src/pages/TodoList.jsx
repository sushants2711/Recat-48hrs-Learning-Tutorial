import React, { useState } from 'react'
import "../css/TodoList.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const TodoList = () => {

    const [todo, setTodo] = useState([]);
    const [inputvalue, setInputValue] = useState([""])

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputvalue.length === 0) {
            toast.error("please not submit empty todo")
            return null;
        } else {
            setTodo([...todo,
                inputvalue
            ])
            toast.success("to-do add successfully");
            setInputValue("");
        }

    }

    return (
        <>
            <h1>Add your today To-do</h1>

            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="todoName" id="name" value={inputvalue} onChange={handleChange} placeholder='Enter Your todo' />
                    <button className='btn-todoSubmit' type="submit">submit-me</button>
                </form>
            </div>

            <div>
                {todo.length > 0 ? (
                    <div>
                        <p className='listP'>Here are your todo</p>
                        <ol>
                            {todo.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ol>
                    </div>
                ) : (
                    <p className='noItem'>No items added to the Todo List</p>
                )}
            </div>
            <ToastContainer />
        </>
    )
}
