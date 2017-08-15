var React = require('react');
var ReactDOM = require('react-dom');

require('./index.css')

// first component for hello world
class App extends React.Component {
  render(){
    // JSX syntax 
    // it looks like html but it isn't
    return (
      <div>
        Hello World!
      </div>
    ) 
  }
}

// Tell react dom where to render our App Component
// render App component in div whose id = 'app'
ReactDOM.render(
  <App />,
  document.getElementById('app')
);



