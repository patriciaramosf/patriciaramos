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
    this.state={
      languageEn: false,
      filter:null,
    }
  }
  changeLanguage(){
    this.setState(prevState=>({
      languageEn: !prevState.languageEn,
    }))
  }
 setFilter = (filter) =>{
   this.setState({filter:filter})
 }
 setReset =()=>{
   this.setState({filter:null})
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
                            filter={this.state.filter}
                            setFilter={this.setFilter}
                            setReset={this.setReset}
                />
            </Route>
            <Route exact path='/projects'>
                <AsideProject   changeLanguage={this.changeLanguage}
                                currentLanguage={this.state.languageEn}
                />
                <ProjectPage    changeLanguage={this.changeLanguage}
                                currentLanguage={this.state.languageEn}
                                filter={this.state.filter}
                                setFilter={this.setFilter}
                                setReset={this.setReset}
                />
            </Route>
        </Switch>
      </div>
      
    );
  }
}

export default App;
