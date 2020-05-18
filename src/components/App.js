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
    this.state={
      currentLanguage: 'es',
      filter:null,
    }
  }
  changeLanguage = () =>{
    const newLanguage = this.state.currentLanguage === 'es' ? 'en': 'es';
   /*  this.setState(prevState=>({
      isEnglish: !prevState.isEnglish,
    })) */
    this.setState({
      currentLanguage: newLanguage
    })
  }
 setFilter = (filter) =>{
   this.setState({filter:filter});
 }
 setReset =()=>{
   this.setFilter(null);
 }
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path='/'>
                <Aside    changeLanguage={this.changeLanguage}
                          currentLanguage={this.state.currentLanguage}
                />
                <HomePage   changeLanguage={this.changeLanguage}
                            currentLanguage={this.state.currentLanguage}
                            filter={this.state.filter}
                            setFilter={this.setFilter}
                            setReset={this.setReset}
                />
            </Route>
            <Route exact path='/projects'>
                <AsideProject   changeLanguage={this.changeLanguage}
                                currentLanguage={this.state.currentLanguage}
                />
                <ProjectPage    changeLanguage={this.changeLanguage}
                                currentLanguage={this.state.currentLanguage}
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
