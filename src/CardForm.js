import React from 'react';

class CardForm extends React.Component {
  state = { front: '', back: '', nextId: 1 }

  handleSubmit = (e) => {
    e.preventDefault();
    const { front, back, nextId } = this.state;
    const card = {front, back, id: nextId};
    this.setState({ front: '', back: '', nextId: nextId + 1 });
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
