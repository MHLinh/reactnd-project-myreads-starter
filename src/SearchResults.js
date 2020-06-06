import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

/**
 * @description Shows the search results.
 * @constructor
 * @param {array} books - The array of books on the shelves.
 * @param {string} quert - The search query.
 * @param {array} searchResults - The array of books resulted from the search query.
 * @param {func} onMove - The function to be called when the books is moved to another shelf.
 */
class SearchResults extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        query: PropTypes.string.isRequired,
        searchResults: PropTypes.array.isRequired,
        onMove: PropTypes.func.isRequired
    };
 
    render() {
        const { books, query, searchResults, onMove } = this.props;

        // Fix the showing status of books for those that are on the user's shelf.
        const fixedResults = searchResults.map((book) => {
            books.map(myBook => {
                if(myBook.id === book.id) {
                    book.shelf = myBook.shelf;
                 }
                return myBook;
            });
            return book;
        })

        return (
            <div className="search-books-results">
                { 
                    fixedResults.length > 0 ? 
                        <ol className="books-grid">
                            {fixedResults.map(book => (
                                <Book 
                                    key={book.id} 
                                    book={book} 
                                    shelf={book.shelf ? book.shelf : "none"}
                                    onMove={onMove} 
                                />
                            ))}
                        </ol>
                    : 
                    <div className="search-text">
                        {
                            query.length > 0 ? 
                            <span>No results found</span>
                            :
                            <span>What book will you look for today?</span>  
                        }
                    </div>
                     
                }
            </div>
        );
    } 
}

export default SearchResults;