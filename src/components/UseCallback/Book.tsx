import React from 'react';

export type BooksPropsType = {
    books: string[]
}

const Book = (props: BooksPropsType) => {
    return (
        <div>
            {props.books}
        </div>
    );
};

export default Book;