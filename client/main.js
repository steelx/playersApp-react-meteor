import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

Meteor.startup(function _startup(){
    let title = 'Players App Meteor+React';
    let name = 'Ajinkya';

    let Html = () => {
        return (
            <div>
                <h2>{title}</h2>
                <p>Hello from {name}.</p>
            </div>
        );
    }

    ReactDOM.render(<Html />, document.getElementById('app'));
});