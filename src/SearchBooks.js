import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchResults from './SearchResults';

/**
 * @description Shows the search bar and search results.
 * @constructor
 * @param {array} books - The array of books on the shelves.
 * @param {array} searchResults - The array of books resulted from the search query.
 * @param {func} onSearch - The function to be called when the users seraches.
 * @param {func} onMove - The function to be called when the books is moved to another shelf.
 * @param {func} onClear - The function to be called when the search bar is cleared.
 */
class SearchBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        searchResults: PropTypes.array.isRequired,
        onSearch: PropTypes.func.isRequired,
        onMove: PropTypes.func.isRequired,
        onClear: PropTypes.func.isRequired
    };

    state = {
        query: ""
    };

    /**
     * @description The method to handle the change in the search bar input.
     * @param {event} event The event of change in the input.
     */
    handleChange = (event) => {
        const query = event.target.value;
        this.updateQuery(query);
        this.props.onSearch(query);
    };

    /**
     * @description The method to update the searched query.
     * @param {string} query The search query.
     */
    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }))
    };

    /**
     * @description The method clear the search, clears search bar and results.
     */
    clearSearch = () => {
        this.clearQuery();
        this.props.onClear();
    };

    /**
     * @description The method clear the query, clears the search bar.
     */
    clearQuery = () => {
        this.updateQuery("")
    };

    render() {
        const { query } = this.state
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" onClick={this.clearSearch}>Close</Link>
                    <div className="search-books-input-wrapper">
                    <input 
                        type="text" 
                        placeholder="Search by title or author" 
                        value={query}
                        onChange={this.handleChange}
                    />
                    </div>
                    <button className="clear-search-button" onClick={this.clearSearch}>
                        Clear Search
                    </button>
                </div>
                <SearchResults 
                    books={this.props.books}
                    query={query}
                    searchResults={this.props.searchResults} 
                    onMove={this.props.onMove}
                />
            </div>
        );
    }
}

export default SearchBooks;