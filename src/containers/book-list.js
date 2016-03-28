import React, { Component } from 'react';
import { connect } from 'react-redux'

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          className="list-group-item">{book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// This function is the glue between react and redux
function mapStateToProps(state) {
  /* state object:
  {
    books: [{title: "Harry Potter"}, {title: "Javascript"}], -> Books Reducer
    activeBook: {title: "Javascript: The good parts"} -> ActiveBook Reducer
  }
  */

  // Whatever is returned will show up as props
  // inside of BookList

  return {
    // BookList only needs books key from the state object
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);