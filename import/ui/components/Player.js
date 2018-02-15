import {Players} from "../../api/players";
import React from "react";

export default class Player extends React.Component {

    removePlayer(_id) {
        Players.remove({_id});
    }
    updateScore(_id, score) {
        Players.update({_id}, {$inc: {score}});
    }

    render() {
        return (
            <li>
                {this.props.name}, ({this.props.score})
                <button onClick={() => this.updateScore(this.props._id, 1)}>+1</button>
                <button onClick={() => this.updateScore(this.props._id, -1)}>-1</button>
                <button onClick={() => this.removePlayer(this.props._id)}>X</button>
            </li>
        );
    }
}
