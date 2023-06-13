import React, {useMemo, useState} from 'react';


const generateData = () => {

    console.log(generateData)
    return 1
}



const UseState = () => {
    // const initValue = useMemo(generateData, [])
    const [count, setCount] = useState<any>(generateData)

        const changer = (state: number) => {
         return  state + 1
        }

    return (

        <>
            <button onClick={() => setCount(changer)}>+</button>
            {count}
        </>
    );
};

export default UseState;



