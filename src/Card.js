import React from 'react';

class Card extends React.Component {
  state = { hide: true }

  toggleShow = (id) => {
    let hide = this.state.hide ? false : true
    this.setState({ hide })
  }

  render () {

    let cards = this.props.cards.map (card => {
      let id = card.id;
      if (this.state.hide) {
        return (
          <div key={id}>
            { card.front }
            <button onClick={this.toggleShow(id)} >Flip</button>
          </div>
        );
      } else {
        return (
          <div key={id}>
            { card.back }
            <button onClick={this.toggleShow(id)} >Flip</button>
          </div>
        );
      }
    });

    return (
      <div>
        { cards }
      </div>
    )

  }
}

export default Card;
