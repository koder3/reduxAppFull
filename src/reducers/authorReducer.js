import * as types from '../actions/typeActions';
import initialState from './initialState';

export default function authorReducer(state = initialState, action){
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return state;
  }
}
