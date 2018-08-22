import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<Player />);
});
it('renders correct name', () => {
    const playerNamePassed = 'Ania';
    const playerComponent = shallow(<Player name={playerNamePassed} />);
    const playerNameRendered = playerComponent.find('.Player_name').text();
    expect(playerNameRendered).toEqual(playerNamePassed);
});
it('renders correct score', () => {
    const scorePassed = 20;
    const playerComponent = shallow(<Player score={scorePassed} />);
    const scoreRendered = Number(playerComponent.find('.Player_score').text());
    expect(scoreRendered).toEqual(scorePassed);
});
it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

    const plusButton = playerComponent.find('.Player_button_plus');

    plusButton.simulate('click');

    expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});
it('should call onPlayerScoreChange with -1 when plus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

    const minusButton = playerComponent.find('.Player_button_minus');
    minusButton.simulate('click');

    expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});

it('should remove a person', () => {
    const mockedOnDeletePlayer = jest.fn();
    const playerComponent = shallow(<Player onDeletePlayer={mockedOnDeletePlayer} />);

    const deleteButton = playerComponent.find('.DeletePlayer').first();
    deleteButton.simulate('click');

    const expectedPlayersNumber = playerComponent.find('Player').length;
    // expect(expectedPlayersNumber).toEqual(22);
    expect(mockedOnDeletePlayer).toBeCalledWith('Ania');
});