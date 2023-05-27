import React, {useReducer, useState} from "react";



type AccordionTitlePropsType = {
    title: string;
    onClick: () => void
}


type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}


export const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"

export const reducer = (state: StateType, action: ActionType) => {

    switch (action.type) {
        case TOGGLE_CONSTANT:
        return {...state, collapsed : !state.collapsed}
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

        let [state, dispatch] = useReducer(reducer, {collapsed: false}  )
        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={() => {
                    dispatch({type: TOGGLE_CONSTANT})
                }}/>
                {/*<button onClick={()=>{setCollapsed(!collapsed)}}>Toggle</button>*/}
                {state ? <AccordionBody/> : ""}

            </div>
        );

    }


