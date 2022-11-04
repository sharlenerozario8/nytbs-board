import React, { useEffect, useState } from "react";
import './App.css';
import collection from './collection.json'
import BookCard from "./BookCard";


const App = () =>{

    const [books, setBooks]=useState([]);

    const bookjson=collection.results.books;

    console.log(bookjson)

    

    useEffect(() => {
        setBooks(collection.results.books);
    },[])


// ------------------------this works-----------------------

    // useEffect(() => {
    //     fetch("https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=<key>")
    //     .then(res => res.json())
    //     .then((data) => {setBooks(data.results)})
    //     // .then(console.log(books))
    // },[])
    
// ---------------------------------------------------------------------

 

    

    return(
        <div className="app">
            <h1>NYT Best Sellers</h1>
            <br />

            {/* ------------------the working titles----------------
            <ul>
                {books.map(book => (
                <li >
                    {book.title}
                </li>
                ))}
            </ul>
            --------------------------------------------------- */}


            {
                books?.length > 0 ? (
                    <div className="container">
                        {books.map((book) => (
                            <BookCard book1={book}/>
                        ) )}
                    </div>
                ) : (
                    <div className="empty">
                        <h1>No books found, check yo damn code</h1>
                    </div>
                )
            }



        </div>

    )
}

export default App;