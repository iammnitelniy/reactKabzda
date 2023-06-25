import React, {useEffect, useState} from "react";

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)
    console.log('Component rendered' )

    useEffect(() => {
        console.log('Effect occurred' + counter)
        return () => {
            console.log('RESET EFFECT' + counter)
        }

    }, [counter])

    return <>
        Hello {counter} <button onClick={()=>{setCounter(counter + 1)}}>+</button>
    </>

}