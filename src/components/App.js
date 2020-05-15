import React from 'react';
import HomePage from './HomePage.js'
import Aside from './Aside.js'
import AsideProject from './AsideProject.js'
import ProjectPage from './ProjectPage.js'
import '../stylesheets/App.scss';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.showProjects=this.showProjects.bind(this);
    this.showAllProjects=this.showAllProjects.bind(this);
    this.state={
      languageEn: false,
      hideJs:false,
      hideReact:false,
      hideLayout:false,
      filter:null,
    }
  }
  changeLanguage(){
    this.setState(prevState=>({
      languageEn: !prevState.languageEn,
    }))
  }
 setFilter =(filter)=>{
   this.setState({filter:filter})
 }
  
showProjects(id) {
  let key;
  if ( id === "btnJavascript"){
    key = "hideJs";
 }
  else if ( id === "btnReact"){
    key = "hideReact";
  }
  else if( id === "btnLayout"){
    key = "hideLayout";
  }
    this.setState(prevState => ({ [key]: !prevState[key] })); 
}

showAllProjects(){
  this.setState({
    hideJs:false,
    hideReact:false,
    hideLayout:false,
  })
}
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path='/'>
                <Aside    changeLanguage={this.changeLanguage}
                          currentLanguage={this.state.languageEn}
                />
                <HomePage   changeLanguage={this.changeLanguage}
                            currentLanguage={this.state.languageEn}
                            showProjects={this.showProjects}
                            showAllProjects={this.showAllProjects}
                            hideJs={this.state.hideJs}
                            hideReact={this.state.hideReact}
                            hideLayout={this.state.hideLayout}
                />
            </Route>
            <Route exact path='/projects'>
                <AsideProject   changeLanguage={this.changeLanguage}
                                currentLanguage={this.state.languageEn}
                />
                <ProjectPage    changeLanguage={this.changeLanguage}
                                currentLanguage={this.state.languageEn}
                                showProjects={this.showProjects}
                                showAllProjects={this.showAllProjects}
                                hideJs={this.state.hideJs}
                                hideReact={this.state.hideReact}
                                hideLayout={this.state.hideLayout}
                                filter={this.state.filter}
                />
            </Route>
        </Switch>
      </div>
      
    );
  }
}

export default App;
