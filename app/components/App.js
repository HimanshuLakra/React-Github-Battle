var React = require('react');


// first component for hello world
class App extends React.Component {
  render(){
    // JSX syntax 
    // it looks like html but it isn't
    return (
      <div>
        {this.props.appName}
      </div>
    ) 
  }
}

App.PropTypes = {
  appName : 'PropTypes.string.isRequired'
}

module.exports = App;
