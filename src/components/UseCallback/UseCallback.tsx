import React, {useMemo, useState} from 'react';
import Book from "./Book";

export const LikesUseCallBack = () => {
    const [counter, setCounter] = useState<number>(0)
    const [books, setBooks] = useState(['react', 'js', 'css', 'html'])

    const newArray = useMemo(()=> {

        const newArray = books.filter(b => b.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [books])



    console.log('BooksSecret')
    const addBook = () => {
        setBooks([...books, 'Master and Margarita' + new Date().getTime()])
    }


    return
    <>
        <button onClick={()=>setCounter(counter + 1)}>+</button>

        <BooksSecret books={newArray} setBooks={setBooks} addBook={addBook}/>
    </>
}



type BooksPropsType = {
    books: Array<string>
    setBooks: (value: Array<string>) => void
    addBook: () => void
}


export const BooksSecret: React.FC<BooksPropsType> = (
    {
        books,
        setBooks,
        addBook,
        ...restProps
    }
) => {

    console.log(BooksSecret)

    return (
        <div>
            <button onClick={()=> addBook()}>addBook</button>
            {books.map((el, index)=> <div key={index}>{el}</div>)}


        </div>


    );
};

