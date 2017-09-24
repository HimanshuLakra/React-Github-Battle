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

    this.props.getSelectedLanguage(selectedTab);
  }

  render(){

     var tabList = ["All", "Java", "React", "JavaScript", "Ruby"];

    return (
      <div>
        <ul className = "tabList">
           {tabList.map((listItem) => {
             return (
              <li 
                style = { listItem === this.state.selectedTab ? {color: '#d0021b'} : null}
                onClick = {() => this.updateTabState(listItem)}
                key={listItem}> 
                {listItem} 
              </li>
             )
           })}

        </ul>

        <div className = "seperator"> </div>
      </div>
    )
  }
}

module.exports = Tabs;
