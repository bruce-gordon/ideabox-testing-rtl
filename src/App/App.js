import React, { Component } from 'react';
import Form from '../Form/Form';
import Ideas from '../Ideas/Ideas'
import './App.css';
import { NavLink, Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    };
  }

  componentDidMount() {
    fetch('https://shout-out-turing.herokuapp.com/api/v1/ideas')
      .then(response => response.json())
      .then(ideas => this.setState({ideas}))
      .catch(err => console.log(err.message))
  }

  addIdea = newIdea => {
    this.setState({ ideas: [...this.state.ideas, newIdea]})
  }

  removeIdea = id => {
    const ideas = this.state.ideas.filter(idea => idea.id !== id);
    this.setState({ ideas });
  }

  render() {
    return (
      <main className="App">
        <h1>IdeaBox</h1>
        <header>
          <NavLink to="/ideas">View Ideas </NavLink>  
        </header>
        <Form addIdea={this.addIdea} />
        <Route path="/ideas" render={() => (
          <Ideas 
            ideas={this.state.ideas} 
            removeIdea={ this.removeIdea} 
          />
          )} />
      </main>
    )
  }
}
