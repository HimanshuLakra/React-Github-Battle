var React = require('react');
import 'react-bootstrap';

class Repo extends React.Component {

  constructor(props){
    super(props);
    this.openGithubRepo = this.openGithubRepo.bind(this);
  }

  openGithubRepo(repoUrl){
    console.log(repoUrl);
    window.open(repoUrl,'_blank');
  }

  render() {

    return (
        <div id = "repo_item" className = "card" onClick = {() => this.openGithubRepo(this.props.repo.html_url)}>
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
