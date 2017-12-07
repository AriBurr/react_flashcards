import React from 'react';
import Card from './Card';
import CardForm from './CardForm';

export class FlashApp extends React.Component {
  state = { cards: [] }

  addCard = (cardInfo) => {
    this.setState( { cards: [...this.state.cards, cardInfo] });
  }

  render () {

    return (
      <div>
        <CardForm addCard={this.addCard} />
        <Card cards={this.state.cards}  />
      </div>
    )
  }
}

export default FlashApp;
