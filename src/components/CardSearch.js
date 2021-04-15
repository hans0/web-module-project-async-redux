import React, { useState } from 'react';
import { connect } from 'react-redux';


import { getCard, fetchCardLoading, fetchCardSuccess, fetchCardFail } from '../actions';

const CardSearch = (props) => {
  const [cardSearch, setCardSearch] = useState('Lurrus, of the Dream Den');

  const { card, isFetching, error, fetchCardLoading } = props;
  
  const handleChanges = e => {
    console.log(e)
    setCardSearch(e.target.value);
  }

  const handleClick = () => {
    props.getCard(cardSearch);
  }

  return (
    <>
      {card === null ? <h2>Searching....</h2> : <img src={card.image_uris['small']}/>}
      <input 
        type='text'
        value={cardSearch}
        onChange={handleChanges}
      />
      <button onClick={handleClick}>Search for card</button>
    </>
  );
}

const mapStateToProps = state => {
  return {
    card: state.card,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getCard })(CardSearch);