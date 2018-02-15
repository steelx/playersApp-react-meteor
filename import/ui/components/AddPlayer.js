import {Players} from "../../api/players";
import React from "react";

export default class AddPlayer extends React.Component {

    insertToDb(event) {
        event.preventDefault();
        let playerName = event.target.playername.value;
        if(playerName !== "" && typeof playerName !== "undefined") {
            // add to players
            Players.insert({name: playerName, score: 0});
        }
    }

    render() {
        return (
            <form onSubmit={this.insertToDb}>
                <input type="text" placeholder="Player name" name="playername" />
                <button>ADD</button>
            </form>
        );
    }
}
