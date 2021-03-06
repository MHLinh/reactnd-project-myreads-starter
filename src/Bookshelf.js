import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

/**
 * @description Represents a bookshelf.
 * @constructor
 * @param {object} shelf - The object that stores the key and name of the bookshelf.
 * @param {array} books - The array of books.
 * @param {func} onMove - The function to be called when the books is moved to another shelf.
 */
class Bookshelf extends Component {
    static propTypes = {
        shelf: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        onMove: PropTypes.func.isRequired
    };

    render() {
        const { shelf, books, onMove } = this.props;
        const booksOnThisShelf = books.filter(book => book.shelf === shelf.key);
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {booksOnThisShelf.map(book => (
                            <li key={book.id}>
                                <Book 
                                    book={book} 
                                    shelf={shelf.key} 
                                    onMove={onMove} 
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    } 
}


export default Bookshelf;