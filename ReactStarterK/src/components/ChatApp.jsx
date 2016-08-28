/**
 * @jsx React.DOM
 */

'use strict';

var MessageSection = require('./MessageSection.jsx');
var React = require('react');
var ThreadSection = require('./ThreadSection.jsx');

var ChatApp = React.createClass({

    render: function() {
        return (
          <div className="chatapp">
            <ThreadSection />
            <MessageSection />
          </div>
      );
    }

});

module.exports = ChatApp;
