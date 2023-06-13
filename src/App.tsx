import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {ControlledOnOff} from "./components/OnOff/ControlledOnOff";
import {Select} from "./components/Select/Select";
import {ReactMemo} from "./components/UseMemo/ReactMemo";
import {Example} from "./components/UseMemo/UseMemo";
import {BooksSecret} from "./components/UseCallback/UseCallback";
import UseState from "./components/UseState/UseState";
import Book from "./components/UseCallback/Book";
import UseEffect from "./components/UseEffect/UseEffect";


export type ItemType = {
    title: string
    value: any
}
// hello()


//function declaration- our method function App() {} -Для компонент
// const App = function() {} - function expression method
// const App = () => { - стрелочная функция
function App() {
    console.log("App rendering")

    const [ratingValue, setRatingValue] = useState<number>(0)
    const [collapsed, setCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(false)

    const changeRating = (value:number) => {
        setRatingValue(value)
    }
    const collapsedMenu = () => {
        setCollapsed(!collapsed)
    }

   const [state, setState] = useState<ItemType[]>(
       [
           {title: "Moscow", value: "1"},
           {title: "Minsk", value: "2"},
           {title: "Kiev", value: "3"},

       ])
    const [value, setValue] = useState("1")
        const [books, setBooks] = useState(["Biblia", 'Azbuka', 'War and Peace'])

    return (
        <div className={"App"}>
            <UnControlledAccordion titleValue={"Menu"}/>
            <UnControlledAccordion titleValue={"Users"}/>
            {/*<UncontrolledOnOff />*/}
            <Rating value={ratingValue} changeRating={changeRating}/>
            <UnControlledRating />
            <Accordion items={["1","2","3","4","5"]}titleValue={"Menu"} collapsed={collapsed} collapsedMenu={collapsedMenu} />
            <ControlledOnOff on={on} setOn={setOn}/>
            <Select value={value}  items={state} onChange={(value: string)=>{
                setValue(value)}}

            />
            <ReactMemo/>
            <Example/>
            {/*<BooksSecret books={books}  setBooks={setBooks}/>*/}
            <UseState/>
            <UseEffect/>
            {/*<UnControlledRating value={2}/>*/}
            {/*<UnControlledRating value={3}/>*/}
            {/*<UnControlledRating value={4}/>*/}
            {/*<UnControlledRating value={5}/>*/}

           {/*<PageTitle title= {"This is APP component"}/>*/}
           {/* <PageTitle title= {"My friends"}/>*/}

           {/* Article 1*/}
           {/* <UnControlledAccordion titleValue={"Menu"} collapsed={true}/>*/}
           {/* <UnControlledAccordion titleValue={"Users"} collapsed={false}/>*/}
           {/* Article 2*/}



        </div>
    );
}
type PageTitlePropsType = {
    title: string;
}
function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")

    return <h1>{props.title}</h1>

}

export default App;
