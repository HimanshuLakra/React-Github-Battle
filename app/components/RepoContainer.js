var React = require('react');
var repoApi = require('../api.js');
var Tabs = require('./Tabs');
var Repo = require('./Repo');

import 'react-bootstrap';

class RepoContainer extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      repoList: null
    }

    this.getRepoFromGithub = this.getRepoFromGithub.bind(this);
    this.getSelectedLanguage = this.getSelectedLanguage.bind(this);
  }

  getRepoFromGithub(language){
    repoApi.fetchGithubRepos(language)
    .then(function(response){

        this.setState(function(){
          return {
             repoList: response
          }
        })
    }.bind(this));
  }

  //Callback from tab component
  getSelectedLanguage(language){
    this.getRepoFromGithub(language);
  }

  componentDidMount(){
    //default load response for all
    this.getRepoFromGithub("All");
  }
  

  render(){

    return(
      <div>
        <Tabs getSelectedLanguage = { this.getSelectedLanguage } />
        <div className = "flex-view">
          {
              this.state.repoList ? 
              this.state.repoList.map(function (repo){
                return (
                  <div key = {repo.name} ><Repo repo = {repo} /></div>
                )
              })
              :
              "Loading ....."
          }
        </div>
      </div>

    )
  }
}


module.exports = RepoContainer;
