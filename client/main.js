import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import App from "../import/ui/components/App";

Meteor.startup(function _startup(){

    Tracker.autorun(function _ddpReady() {
        ReactDOM.render(<App />, document.getElementById('app'));
    });
});