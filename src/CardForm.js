import React from 'react';

class CardForm extends React.Component {
  state = { front: '', back: '', id: 1 }

  handleSubmit = (e) => {
    e.preventDefault();
    const { front, back, id } = this.state;
    const card = {front, back, id: id};
    this.setState({ front: '', back: '', id: id + 1 });
    this.props.addCard(card);
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render () {
    const { front, back } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input name='front' value = { front } onChange={this.handleChange} placeholder='Front' />
        <input name='back' value = { back } onChange={this.handleChange} placeholder='Back' />
        <button type='submit'>Add New Card</button>
      </form>
    )

  }
}

export default CardForm ;
