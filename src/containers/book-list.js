import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

/* Action Creators */

import { selectBook } from "../actions/index";

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

  // BookList only needs books key from the state object
  return {
    books: state.books
  };
}

// Anything returned form this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  // to all of our reducers

  // purpose of bindActionCreators and dispatch is to make sure whatever is returned from
  // selectBook action is dispatched to all reducers (if user clicks on an element,
  // BookList component does not know what to do with it. The only part of the application
  // that cares about actions are the reducers.

  return bindActionCreators({
    // because of selectBook key, we can use this.props.selectBook
    // in the BookList component

    // selectBook is a plain function (noting special) and returns a plain JS object
    selectBook: selectBook
  }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
