import React, {useState} from "react";

type OnOffPropsType = {

}

export const UncontrolledOnOff = (props: OnOffPropsType) => {

   let [on, setOn] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"

    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"

    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "blue" : "red"

    }
        return (
            <div>
                <div style={onStyle} onClick={() =>{setOn(true) } }>ON</div>
                <div style={offStyle} onClick={() => {setOn(false)}}>OFF</div>
                <div style={indicatorStyle}></div>
            </div>
        )
}