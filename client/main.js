import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import { Players } from '../import/api/players';


Meteor.startup(function _startup(){

    Tracker.autorun(function _ddpReady() {
        let title = 'Players App Meteor+React';
        let name = 'Ajinkya';
        let playersData = Players.find().fetch();

        const Player = (props) => (<li>{props.name}, ({props.score})</li>);

        const PlayersList = () => {
            return playersData.map((p) => {
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
});