import { FETCH_CARD_LOADING, FETCH_CARD_SUCCESS, FETCH_CARD_FAIL } from './../actions';

const initialState = {
  card: null,
  isFetching: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case(FETCH_CARD_LOADING):
      return ({
        ...state,
        isFetching: true
      });
    case(FETCH_CARD_SUCCESS) :
      return({
        ...state,
        card: action.payload,
        isFetching: false
      });
    case(FETCH_CARD_FAIL):
      return({
        ...state,
        error: action.payload,
        isFetching: false
      })
    default:
      return state;
  }
}