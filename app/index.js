var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

require('./index.css')

var App = require('./components/App');
var Tabs = require('./components/Tabs');
var RepoContainer = require('./components/RepoContainer');

// Tell react dom where to render our App Component
// render App component in div whose id = 'app'
ReactDOM.render(
  <RepoContainer/>,
  document.getElementById('app')
);



