var React = require('react');

class Tabs extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      selectedTab: "All"
    };

    this.updateTabState = this.updateTabState.bind(this);
  }

  updateTabState(selectedTab){
    this.setState(function (){
      return {
       selectedTab: selectedTab
      }
    });
  }

  render(){

     var tabList = ["All", "Java", "React", "JavaScript", "Ruby"];

    return (
      <ul className = "tablist">
         {tabList.map(function (listItem){
           return (
            <li 
              style = { listItem === this.state.selectedTab ? {color: '#d0021b'} : null}
              onClick = {this.updateTabState.bind(null,listItem)} 
              key={listItem}> 
              {listItem} 
            </li>
           )
         },this)}

      </ul>
    )
  }
}

module.exports = Tabs;
