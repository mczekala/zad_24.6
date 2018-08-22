import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [
        {
          name: 'Kunegunda',
          score: 5,
          id: 0
        },
        {
          name: 'Antoś',
          score: 0,
          id: 1
        }
      ]
    }
  }
  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, index) => {
        if (index === playerIndex) {
          return { ...player, score: player.score + scoreChange };
        }
        return player;
      })
    })
  }
  onPlayerAdd = (playerName) => {
    const newPlayer = {
      name: playerName,
      score: 0,
    }
    this.setState({
      players: [...this.state.players, newPlayer]
    })
  }
  onDeletePlayer = (name) => {
    this.setState({
      players: this.state.players.filter(player => {
        return (player.name !== name)
      })
    })
  }
  render() {
    return (
      <div className="App">
        <PlayersList onDeletePlayer={this.onDeletePlayer} players={this.state.players} onScoreUpdate={this.onScoreUpdate} />
        <AddPlayer onPlayerAdd={this.onPlayerAdd} />
      </div>
    );
  }
}

export default App;
