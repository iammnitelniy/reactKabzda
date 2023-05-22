import React, {useState} from "react";



type AccordionTitlePropsType = {
    title: string;
    onClick: ()=> void
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
        </> )
}
type AccordionPropsType = {
    titleValue: string;
    // collapsed: boolean;
}

export function UnControlledAccordion(props: AccordionPropsType) {
    console.log("UnControlledAccordion rendering")

        let [collapsed, setCollapsed] = useState(true)
        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>
                {/*<button onClick={()=>{setCollapsed(!collapsed)}}>Toggle</button>*/}
                { collapsed ? <AccordionBody/> : ""}

            </div>
        );

}


