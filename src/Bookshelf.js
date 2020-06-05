import React, { Component } from 'react';
import Book from './Book';

/**
 * @description Represents a bookshelf
 * @constructor
 * @param {string} shelf - The name of the bookshelf
 * @param {array} books - The array of books.
 * @param {func} onMove - The function to be called when the books is moved to another shelf.
 */
class Bookshelf extends React.Component {
    static propTypes = {
        shelf: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onMove: PropTypes.func.isRequired
    }
    render() {
        const { shelf, books, onMove } = props;
        const booksOnThisShelf = books.filter(book => book.shelf === shelf.key);
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {booksOnThisShelf.map(book => (
                            <Book key={book.id} book={book} shelf={shelf.key} onMove={onMove} />
                        ))}
                    </ol>
                </div>
            </div>
        );
    } 
}


export default Bookshelf;