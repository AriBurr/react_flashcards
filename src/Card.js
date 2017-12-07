import React from 'react'

class Card extends React.Component {
  state = { hide: true }

  toggleShow = () => {
    let hide = this.state.hide ? false : true
    this.setState({ hide })
  }

  render () {
    const { hide } = this.state;
    return (
      <div>
        <h3>{ hide ? this.props.front : this.props.back }</h3>
        <button onClick={this.toggleShow} >Flip</button>
      </div>
    );

  }
}

export default Card;
