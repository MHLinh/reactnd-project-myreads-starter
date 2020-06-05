import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import './App.css'

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
                    <ListBooks/>
                )}/>
            </div>
        );
    }
}

export default BooksApp;
