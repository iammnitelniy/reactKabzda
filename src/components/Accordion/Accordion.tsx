import React from "react";


type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    collapsedMenu: ()=>void
    items: string[]
}

type AccordionTitlePropsType = {
    title: string;
    collapsedMenu: ()=> void
}

type AccordionBodyPropsType = {

    items: string[]
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    const accordionHandler = () => {
        props.collapsedMenu()
    }
    return <> <h3 onClick={accordionHandler}>{props.title}</h3></>
}


function Accordion(props: AccordionPropsType) {
    console.log("UnControlledAccordion rendering")


    return (
        <div>
            <AccordionTitle title={props.titleValue} collapsedMenu={props.collapsedMenu}/>
            { !props.collapsed && <AccordionBody items={props.items}/>}

        </div>
    );

}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (
        <>
            <ul>
                {props.items.map((el, index)=><li key={index}>{el}</li>)}



            </ul>
        </> )
}





export default Accordion