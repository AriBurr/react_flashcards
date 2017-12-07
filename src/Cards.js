import React from 'react';
import Card from './Card';

class Cards extends React.Component {

  render () {
    return(
      <div>
        { this.props.cards.map( card =>
          <Card key={card.id} {...card} />
        )}
      </div>
    )
  }
}

export default Cards;
