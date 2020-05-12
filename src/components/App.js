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
    this.showProjects = this.showProjects.bind(this);
    this.showProjectJs = this.showProjectJs.bind(this);
    this.showProjectReact = this.showProjectReact.bind(this);
    this.showProjectLayout = this.showProjectLayout.bind(this);
    this.state={
      languageEn: false,
      showAll:true,
      showJs:true,
      showReact:true,
      showLayout:true,
    }
  }
  changeLanguage(){
    this.setState(prevState=>({
      languageEn: !prevState.languageEn,
    }))
  }
  showProjects(){
    this.setState(prevState=>({
      showAll:!prevState.showAll,
    }))
  }
  showProjectJs(){
    this.setState(prevState=>({
     showJs:!prevState.showJs,
    }))
  }
  showProjectReact(){
    this.setState(prevState=>({
      showReact:!prevState.showReact,
    }))
  }
  showProjectLayout(){
    this.setState(prevState=>({
      showLayout:!prevState.showLayout,
    }))
  }

  render() {
    /* console.log(this.state.showAll)
    console.log(this.state.showJs)
    console.log(this.state.showReact)
    console.log(this.state.showLayout) */
    console.log(this.state.showJs)
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
                            showProjectJs={this.showProjectJs}
                            showProjectReact={this.showProjectReact}
                            showProjectLayout={this.showProjectLayout}
                            showAll={this.state.showAll}
                            showJs={this.state.showJs}
                            showReact={this.state.showReact}
                            showLayout={this.state.showLayout}
                />
            </Route>
            <Route exact path='/projects'>
                <AsideProject   changeLanguage={this.changeLanguage}
                                currentLanguage={this.state.languageEn}
                />
                <ProjectPage    changeLanguage={this.changeLanguage}
                                currentLanguage={this.state.languageEn}
                                showProjects={this.showProjects}
                                showProjectJs={this.showProjectJs}
                                showProjectReact={this.showProjectReact}
                                showProjectLayout={this.showProjectLayout}
                                showAll={this.state.showAll}
                                showJs={this.state.showJs}
                                showReact={this.state.showReact}
                                showLayout={this.state.showLayout}
                />
            </Route>
        </Switch>
      </div>
      
    );
  }
}

export default App;
