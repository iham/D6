import React, { useEffect, useState } from "react";

const Counter = (props) => {
    const initialValue = props.value || 0;
    const [value, setValue] = useState(initialValue);
    const [otherValue, setOtherValue] = useState(0);
    const [data, setData] =  useState({rc:0, loading: true, items: []});;
    useEffect(() => {
        console.log("Load ONCE");
        const fetchData = async () => {
            const result = await fetch("/data.json");
            const dataJson = await result.json();
            setData({...data, items:dataJson});
        };
        fetchData();
        
    }, []);

    useEffect(() => {
        document.title = `Clicks ${value}`;
    }, [value]);
    
    useEffect(() => {
        document.title = `Other Clicks ${otherValue}`;
    }, [otherValue]);

    return (
        <div>
            {value}
            <button onClick={() => setValue(value + 1)} className='btn btn-sm btn-secondary'>+</button>
            <button onClick={() => setOtherValue(otherValue + 1)} className='btn btn-sm btn-secondary'> other value +</button>
        </div>
    );
};

export default Counter;