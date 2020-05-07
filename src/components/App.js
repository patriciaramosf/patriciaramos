import React from 'react';
import HomePage from './HomePage.js'
import Aside from './Aside.js'
import AsideProject from './AsideProject.js'
import ProjectPage from './ProjectPage.js'
import ProjectPageEn from '../componentesEnglish/ProjectPageEn.js'
import '../stylesheets/App.scss';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.state={
      languageEn: false,
    }
  }
  changeLanguage(){
    this.setState(prevState=>({
      languageEn: !prevState.languageEn
    }))
  }

  render() {
    return (
      <div className="App">
          <Switch>
           <Route exact path='/'>
              <Aside changeLanguage={this.changeLanguage}
                      currentLanguage={this.state.languageEn}
              />
              <HomePage changeLanguage={this.changeLanguage}
                        currentLanguage={this.state.languageEn}
              />
          </Route>
          <Route exact path='/proyectos'>
              <AsideProject    changeLanguage={this.changeLanguage}
                        currentLanguage={this.state.languageEn}
              />
              <ProjectPage  changeLanguage={this.changeLanguage}
                            currentLanguage={this.state.languageEn}
              />
          </Route>
          <Route exact path='/projects'>
              <AsideProject  changeLanguage={this.changeLanguage}
                      currentLanguage={this.state.languageEn}
              />
              <ProjectPageEn  changeLanguage={this.changeLanguage}
                              currentLanguage={this.state.languageEn}
              />
            </Route>
        </Switch>
      </div>
      
    );
  }
}

export default App;
