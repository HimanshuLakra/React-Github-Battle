var React = require('react');
import 'react-bootstrap';

class Repo extends React.Component {

  render() {
      console.log(this.props.repo);
    return (
        <div id = "repo_item" className = "card" >
          <div id = "img"> <img className= "avatar" src = { this.props.repo.owner.avatar_url } /> </div>
          <div id = "full_name" className = "full-name"> { this.props.repo.name } </div>
          <div id = "user_name" className = "description"> { this.props.repo.description.substring(0,70) }...</div>
          <div className = "horizontal">
          <div id = "repo_name" className = "repo-name"> by { this.props.repo.full_name.substring(0,13) }.. </div>
          <div id = "stars" className = "stars"> { this.props.repo.stargazers_count } </div>
          </div>
        </div>
      )
  }
}

module.exports = Repo;
