import React from 'react';
import CardForm from './CardForm';
import Cards from './Cards';

export class FlashApp extends React.Component {
  state = { cards: [] }

  addCard = (cardInfo) => {
    this.setState( { cards: [...this.state.cards, cardInfo] });
  }

  render () {

    return (
      <div>
        <CardForm addCard={this.addCard} />
        <Cards cards={this.state.cards}  />
      </div>
    )
  }
}

export default FlashApp;
