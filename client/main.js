import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

const PLAYERS = [
    {id: 1, name: 'Ajinkya', score: 10},// <li>Ajinkya, (10)</li>
    {id: 2, name: 'Sejal', score: 8},// <li>Sejal, (8)</li>
    {id: 3, name: 'Ash', score: 1},
    {id: 4, name: 'Steel', score: 0}
];

Meteor.startup(function _startup(){
    let title = 'Players App Meteor+React';
    let name = 'Ajinkya';


const Player = (props) => (<li>{props.name}, ({props.score})</li>);

    const PlayersList = () => {
        return PLAYERS.map((p) => {
            return (
                <Player key={p.id} {...p} />
            )
        })
    };

    const App = () => {
        return (
            <div>
                <h2>{title}</h2>
                <p>Hello from {name}.</p>

                <ul>
                    <PlayersList />
                </ul>
            </div>
        );
    }

    ReactDOM.render(<App />, document.getElementById('app'));
});