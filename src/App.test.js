import React from 'react';
import { shallow, } from 'enzyme';
import App from './App';
import AddPlayer from './components/AddPlayer/AddPlayer';
import PlayersList from './components/PlayersList/PlayersList';

it('renders without crashing', () => {
  shallow(<App />);
});
it('should update player score', () => {
  const appComponent = shallow(<App />);
  const players = [
    {
      name: 'Ania',
      score: 0
    }
  ]
  appComponent.setState({ players });
  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
  onScoreUpdate(0, 5);
  const playersAfterUpdate = appComponent.state().players;
  playersAfterUpdate[0].score;
});
it('should add player', () => {
  const appComponent = shallow(<App />);
  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Ania');
  const players = appComponent.state('players');
  expect(players.length).toEqual(3);
  expect(players[2].name).toEqual('Ania');
  expect(players[2].score).toEqual(0);
});



it("should remove a player", () => {
  const appComponent = shallow(<App />);
  const player = appComponent.find(PlayersList).prop('onDeletePlayer');
  player('Antoś');
  const players = appComponent.state('players');
  expect(players.length).toEqual(1);
  expect(players[0].name).toEqual('Kunegunda');
  expect(players[0].score).toEqual(5);
});



























