/**
 * @jsx React.DOM
 */

'use strict';

// This file bootstraps the entire application.

var ChatApp = require('./components/ChatApp.jsx');
var ChatExampleData = require('./ChatExampleData');
var ChatWebAPIUtils = require('./utils/ChatWebAPIUtils');
var React = require('react');
window.React = React; // export for http://fb.me/react-devtools

ChatExampleData.init(); // load example data into localstorage

ChatWebAPIUtils.getAllMessages();

React.render(
    <ChatApp />,
    document.getElementById('react')
);
