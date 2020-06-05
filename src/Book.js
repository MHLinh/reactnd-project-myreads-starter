import React, {Component} from 'react'
import PropTypes from 'prop-types';
import BookshelfChanger from './BookshelfChanger'
/**
 * @description Represents a book
 * @constructor
 * @param {object} book - The book object retrived from database (stores all the information).
 * @param {string} shelf - The shelf the book is on.
 * @param {func} onMove - The function to be called when the books is moved to another shelf.
 */
class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        shelf: PropTypes.string.isRequired,
        onMove: PropTypes.func.isRequired
    };

    render() {
        const { book, shelf, onMove } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${
                        book.imageLinks ? book.imageLinks.thumbnail : 'icons/book-placeholder.svg'})` 
                    }}>
                    </div>
                    <BookshelfChanger book={book} shelf={shelf} onMove={onMove}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                    {book.authors ? book.authors.join(', ') : 'Unknown Author'}
                </div>
            </div>
        );
    }
}

export default Book;
