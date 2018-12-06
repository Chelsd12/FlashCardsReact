import React, { Component } from 'react';
import { Container, Header, Button, Icon, Segment } from "semantic-ui-react";
import Cards from "./Cards";
import CardForm from "./CardForm";
import './App.css';


class App extends Component {
  state = {
    cards: [
      { id: 1, question: "What is a prop?", answer: "a property set by a parent component that allows us to pass data to a child component."},
      { id: 2, question: "What does every class component have?", answer: "State"},
      { id: 3, question: "What is react?", answer: "a Javascript library"},
    ],
    showForm: true 
  };//end of state

  toggleForm = () => this.setState({ showForm: !this.state.showForm, });

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  
  addCard = (cardData) => {
    let card = { id: this.getId(), ...cardData, };
    this.setState({ cards: [card, ...this.state.cards], });
  };
  
  removeCard = (id) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id)
        return card
    });
    this.setState({ cards: [...cards] });
  };//removeCard end

  render() {
    const { showForm } = this.state;
    return (
        <Container style={{ paddingTop: "25px" }}>
          <Header as="h1">Flash Cards</Header>
          <br />
            <Segment basic>
              <Button icon color="blue" onClick={this.toggleForm}>
                <Icon name={showForm ? 'angle double up' : 'angle double down'} />
              </Button>
              { showForm ? <CardForm add={this.addCard} /> : null }
            </Segment>
          <br />
          <Cards cards={this.state.cards} remove={this.removeCard} />
        </Container>
    );//return end
  };//render end
};//class App end

export default App;
