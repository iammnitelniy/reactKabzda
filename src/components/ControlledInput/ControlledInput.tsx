import React, {ChangeEvent, useState} from "react";
import {text} from "stream/consumers";



const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")

    const action = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
    }
    return (
       <input value={parentValue} onChange={action}/>
    );
};

export default ControlledInput;