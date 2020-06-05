import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf'

/**
 * @description Shows the bookshelves and the books
 * @constructor
 * @param {array} bookshelves - The array of bookshelf types.
 * @param {array} books - The arrya of all books.
 * @param {func} onMove - The function to be called when the books is moved to another shelf.
 */
class ListBooks extends React.Component {
    static propTypes = {
        bookshelves: PropTypes.array.isRequired,
        books: PropTypes.array.isRequired,
        onMove: PropTypes.func.isRequired
    };

    render() {
        const { bookshelves, books, onMove } = this.props;
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {bookshelves.map(shelf => (
                            <Bookshelf
                                key={shelf.key}
                                shelf={shelf}
                                books={books}
                                onMove={onMove}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <Link className="open-search" to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default ListBooks;