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

        const Player = (props) => {

            const removePlayer = (_id) => {
                Players.remove({_id});
            };

            return (
                <li>
                    {props.name}, ({props.score})
                    <button onClick={() => Players.update({_id: props._id}, {
                        $inc: {score: 1}})
                    }>+1</button>

                    <button onClick={() => Players.update({_id: props._id}, {
                        $inc: {score: -1}})
                    }>-1</button>

                    <button onClick={() => removePlayer(props._id)}>X</button>
                </li>
            )
        };

        const PlayersList = () => {
            return playersData.map((p) => {
                return (
                    <Player key={p._id} {...p} />
                )
            })
        };

        const AddPlayer = () => {

            const insertToDb = (event) => {
                event.preventDefault();
                let playerName = event.target.playername.value;
                if(playerName !== "" && typeof playerName !== "undefined") {
                    // add to players
                    Players.insert({name: playerName, score: 0});
                }
            };

            return (
                <form onSubmit={insertToDb}>
                    <input type="text" placeholder="Player name" name="playername" />
                    <button>ADD</button>
                </form>
            );
        };

        const App = () => {
            return (
                <div>
                    <h2>{title}</h2>
                    <p>Hello from {name}.</p>

                    <ul>
                        <PlayersList />
                    </ul>
                    <AddPlayer />
                </div>
            );
        }

        ReactDOM.render(<App />, document.getElementById('app'));
    });
});