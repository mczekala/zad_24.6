import React from 'react';
import { shallow } from 'enzyme';
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
it('should update player score', () => {
  const appComponent = shallow(<App />);
  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Ania');
  const players = appComponent.state('players');
  expect(players.length).toEqual(3);
  expect(players[2].name).toEqual('Ania');
  expect(players[2].score).toEqual(0);
});
