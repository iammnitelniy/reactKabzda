import React, {useReducer, useState} from "react";



type AccordionTitlePropsType = {
    title: string;
    onClick: () => void
}


type ActionType = {
    type: string
}

const reducer = (state: boolean, action: ActionType) => {

    switch (action.type) {
        case 'TOGGLE-COLLAPSED': return !state
        default:
            return state
    }
}

    function AccordionTitle(props: AccordionTitlePropsType) {
        console.log("AccordionTitle rendering")
        return <> <h3 onClick={props.onClick}>{props.title}</h3></>
    }

    function AccordionBody(props: any) {
        console.log("AccordionBody rendering")
        return (
            <>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>


                </ul>
            </>)
    }

    type AccordionPropsType = {
        titleValue: string;
        // collapsed: boolean;
    }
//comment
    export function UnControlledAccordion(props: AccordionPropsType) {
        console.log("UnControlledAccordion rendering")

        let [collapsed, dispatch] = useReducer(reducer, false)
        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={() => {
                    dispatch({type: 'TOGGLE-COLLAPSED'})
                }}/>
                {/*<button onClick={()=>{setCollapsed(!collapsed)}}>Toggle</button>*/}
                {collapsed ? <AccordionBody/> : ""}

            </div>
        );

    }


