import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @description Defines the option to change shelves of the book.
 * @constructor
 * @param {func} onMove - The function to be called when the books is moved to another shelf.
 */
class BookshelfChanger extends Component {
    static propTypes = {
        onMove: PropTypes.func.isRequired
    };

    state = {
        shelf: this.props.shelf
    };

    /**
     * @description The method to handle the change in of the shelf of the book.
     * @param {event} event The event of change of the shelf.
     */
    handleChange = event => {
        const { value } = event.target;
        this.setState({ shelf: value });
        this.props.onMove(this.props.book, value);
    };

    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.state.shelf} onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default BookshelfChanger;