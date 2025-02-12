import React, { useEffect, useState } from "react";

export const FetchDataEffect = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const datafetch = await response.json();
                setData(datafetch);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {data && data.length > 0 ? (
                data.map((curr, index) => (
                    <div key={index}>
                        <h2>{curr.title}</h2>
                        <p>{curr.body}</p>
                    </div>
                ))
            ) : (
                <h1>Data not fetched yet</h1>
            )}
        </>
    );
};
