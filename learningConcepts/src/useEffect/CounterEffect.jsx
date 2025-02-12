import React, { useEffect, useState } from 'react'
import "../css/CounterEffect.css"

export const CounterEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `useEffect ${count}`
    }, [count])

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <>
            <h1>{count}</h1>
            
            <hr />
            <div>
                <button onClick={handleClick}>click</button>
            </div>
        </>
    )
}
