import React, { useState } from 'react'
import "../css/Counter.css"
export const Counter = () => {
    const [count, setCount] = useState(0);

    const addClick = () => setCount(count + 1);
    const subtClick = () => setCount(count - 1);


    return (
        <>
            <div>
                <p>Count Value is = <span>{count}</span></p>
                <div className='btn-add'>
                    <button onClick={addClick}>Add-Me</button>
                    <button onClick={subtClick}>Subt-Me</button>
                </div>
            </div>
        </>
    )
}
