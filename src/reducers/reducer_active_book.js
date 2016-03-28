
// State argument is application state, only the state
// this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  // Redux does not allow us to return an undefined value
  // so we have to set it to null
  // this is handled by: state = null in the function declaration

  return state;
}
