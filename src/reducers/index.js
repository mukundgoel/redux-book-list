import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({

  /*
    In our example, we want our application state tree to look like below,
     so we have linked BooksReducer to the key name books
     {
       books: [{title: "Harry Potter"}, {title: "Javascript"}], -> Books Reducer
       activeBook: {title: "Javascript: The good parts"} -> ActiveBook Reducer
     }
   */
  books: BooksReducer
});

export default rootReducer;
