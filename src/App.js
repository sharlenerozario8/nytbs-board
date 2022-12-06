import React, { useEffect, useState } from "react";
import './App.css';
import collection from './collection.json'
import BookCard from "./BookCard";


const App = () =>{

    const [books, setBooks]=useState([]);

    // const { REACT_APP_NYT_API_KEY } = process.env;
    // console.log({REACT_APP_NYT_API_KEY});
// ------------------------this works-----------------------

    useEffect(() => {
        // fetch("https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=uzBs0NLEDNO1qdHoAd0N7ujAWkfb1LEn")
        fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=uzBs0NLEDNO1qdHoAd0N7ujAWkfb1LEn")
        // fetch(`https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`)

        .then(res => res.json())
        .then((data) => {setBooks(data.results.books)})
        .then(console.log(books))
    },[])
    
// ---------------------------------------------------------------------

 

    

    return(
        <div className="app">
            <h1>NYT Best Sellers</h1>
            <br />
            
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