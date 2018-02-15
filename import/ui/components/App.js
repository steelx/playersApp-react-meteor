import React from "react";
import PlayersList from "./PlayersList";
import AddPlayer from "./AddPlayer";
import {Players} from "../../api/players";

export default class App extends React.Component {

    render() {

        let title = 'Players App Meteor+React';
        let name = 'Ajinkya';
        let playersData = Players.find().fetch();

        return (
            <div>
                <h2>{title}</h2>
                <p>Hello from {name}.</p>

                <ul>
                    <PlayersList playersData={playersData} />
                </ul>
                <AddPlayer />
            </div>
        );
    }
}
