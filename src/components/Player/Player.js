import React from 'react';
import './Player.css';

const Player = (props) => (
    <li className="Player">
        <span className="Player_name">{props.name}</span>
        <span className="Player_score">{props.score}</span>
        <button className="Player_button_plus" onClick={() => props.onPlayerScoreChange(1)}>+</button>
        <button className="Player_button_minus" onClick={() => props.onPlayerScoreChange(-1)}>-</button>
        <button className="DeletePlayer" onClick={() => props.onDeletePlayer(props.name)}>delete</button>
    </li>
);
export default Player;