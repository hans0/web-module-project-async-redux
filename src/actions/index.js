import axios from 'axios';

export const FETCH_CARD_LOADING = "FETCH_CARD_LOADING";
export const FETCH_CARD_SUCCESS = "FETCH_CARD_SUCCESS";
export const FETCH_CARD_FAIL = "FETCH_CARD_FAIL"

export const getCard = (cardName) => {
  return dispatch => {
    dispatch({ type: FETCH_CARD_LOADING });
    axios
      .get(`https://api.scryfall.com/cards/named?fuzzy={${cardName}}`)
      .then(res => {
        console.log(res);
        dispatch({ type: FETCH_CARD_SUCCESS, payload: res.data })
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_CARD_FAIL, payload: err.Response.code })

      })
  }
}