import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import './App.css';

const bookshelves = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Read' }
];

class BooksApp extends React.Component {
    state = {
        books: [],
        searchResults: []
    };

    /**
     * @description Get the books stored in the bookshelves by the user.
     */
    componentDidMount() {
        BooksAPI.getAll()
          .then((books) => {
            this.setState(() => ({books}))
        });
    };

    /**
     * @description Move the book to the specified shelf.
     * @param {Book} movedBook - The book to be moved.
     * @param {string} shelf - The shelf to move the books to.
     */
    moveBook = (movedBook, shelf) => {
        BooksAPI.update(movedBook, shelf).then(() => {
            movedBook.shelf = shelf;
            if(shelf==="none") {
                this.setState(currentState => ({
                    books: currentState.books.filter(book => book.id !== movedBook.id)
                }));
            } else {
                this.setState(currentState => ({
                    books: currentState.books.filter(book => book.id !== movedBook.id).concat(movedBook)
                }));
            }
        });
    };

    /**
     * @description The method to search for books.
     * @param {string} query - The search query.
     */
    searchBooks = (query) => {
        if(query.length > 0) {
            BooksAPI.search(query).then((books) => {
                if(books.error) {
                    this.setState({ searchResults: [] });
                } else {
                    this.setState({ searchResults: books });
                }
            });
        } else {
            this.setState({ searchResults: [] });
        }
        
    };

    /**
     * @description The method to clear the search results.
     */
    clearSearch = () => {
        this.setState({ searchResults: [] });
    };

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <ListBooks 
                        bookshelves={bookshelves}
                        books={this.state.books}
                        onMove={this.moveBook}
                    />
                )}/>
                <Route path="/search" render={() => (
                    <SearchBooks 
                        books={this.state.books}
                        searchResults={this.state.searchResults}
                        onSearch={this.searchBooks}
                        onMove={this.moveBook}
                        onClear={this.clearSearch}
                    />
                )} />
            </div>
        );
    }
}

export default BooksApp;
