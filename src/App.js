import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import './App.css'

const bookshelves = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Read' }
];

class BooksApp extends React.Component {
    state = {
        books: []
    };

    componentDidMount() {
        BooksAPI.getAll()
          .then((books) => {
            this.setState(() => ({books}))
        });
    };

    moveBook = (book, shelf) => {
        
    };

    render() {
        for(let i = 0; i < this.state.books.length; i++) {
            console.log(this.state.books[i]);
        }
        
        return (
            <div className="app">
                <Route path="/search" render={() => (
                    <SearchBooks/>
                )} />
                <Route exact path="/" render={() => (
                    <ListBooks 
                        bookshelves={bookshelves}
                        books={this.state.books}
                        onMove={this.moveBook}
                    />
                )}/>
            </div>
        );
    }
}

export default BooksApp;
