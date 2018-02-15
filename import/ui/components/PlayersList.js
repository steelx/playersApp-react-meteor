import React from "react";
import Player from "./Player";

export default class PlayersList extends React.Component {

    render() {
        return this.props.playersData.map((p) => {
            return (
                <Player key={p._id} {...p} />
            )
        })
    }
}
