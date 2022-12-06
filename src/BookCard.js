import React from "react";

const BookCard  = ({ book1 }) => {
    // console.log(book1.books.rank);
    return(
        <div className="book">
            <div>
                {/* <p>what is this for</p> */}
            </div>
            <div>
                
                <img src={book1.book_image} alt={book1.title}/>
                {/* <img src={book1.book_image !== 'N/A' ? book1.book_image: 'https://via.placeholder.com/400'} alt={book1.title}/> */}
            </div>
            <div>
                <span>Rank: {book1.rank}</span>
                <h3>{book1.title}</h3>
                <p>{book1.contributor}</p>
            </div>
        </div>
    );
}

export default BookCard;