import React from "react";
type RatingPropsType = {
    value: number
    changeRating: (value: number) => void
}
export function Rating(props: RatingPropsType) {
    console.log("UnControlledRating rendering")
    return (
        <div>
            <Star selected={props.value > 0} changeRating={props.changeRating} value={1}/>
            <Star selected={props.value > 1} changeRating={props.changeRating} value={2}/>
            <Star selected={props.value > 2} changeRating={props.changeRating} value={3}/>
            <Star selected={props.value > 3} changeRating={props.changeRating} value={4}/>
            <Star selected={props.value > 4} changeRating={props.changeRating} value={5}/>
        </div>
    )

}
type StarPropsType = {
    selected: boolean
    changeRating: (value: number) => void
    value:number

}
function Star(props: StarPropsType) {
    // console.log("Star rendering")
    const onClickHandler = (value:number) => {
        props.changeRating(value)
    }

    return  <span onClick={()=>onClickHandler(props.value)}>{ props.selected ? <b>star </b>  : "star"}
    </span>
    // if (props.selected) {
    //     return <span><b>star </b></span>
    // } else {
    //     return <span>star </span>
    // }

}