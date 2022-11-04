import React from "react";

const BookCard  = ({ book1 }) => {
    return(
        <div className="book">
            <div>
                <p>{book1.author}</p>
            </div>
            <div>
                <img src={book1.book_image !== 'N/A' ? book1.book_image: 'https://via.placeholder.com/400'} alt={book1.title}/>
            </div>
            <div>
                <span>Rank: {book1.rank}</span>
                <h3>{book1.title}</h3>
            </div>
        </div>
    );
}

export default BookCard;