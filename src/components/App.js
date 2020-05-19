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
  changeLanguage =()=>{
    const newLanguage = this.state.currentLanguage === 'es' ? 'en': 'es';
    this.setState({
      currentLanguage: newLanguage
    })
  }
 setFilter = (filter) =>{
   this.setState({ filter:filter });
 }
 setReset =()=>{
   this.setFilter(null);
 }
  render() {
    const { currentLanguage, filter } = this.state;
    const { setFilter, setReset, changeLanguage } = this;
    return (
      <div className="App">
          <Switch>
            <Route exact path='/'>
                <Aside    changeLanguage={ changeLanguage }
                          currentLanguage={ currentLanguage }
                />
                <HomePage   changeLanguage={ changeLanguage }
                            currentLanguage={ currentLanguage }
                            filter={ filter }
                            setFilter={ setFilter }
                            setReset={ setReset }
                />
            </Route>
            <Route exact path='/projects'>
                <AsideProject   changeLanguage={ changeLanguage }
                                currentLanguage={ currentLanguage }
                />
                <ProjectPage    changeLanguage={ changeLanguage }
                                currentLanguage={ currentLanguage }
                                filter={ filter }
                                setFilter={ setFilter }
                                setReset={ setReset }
                />
            </Route>
        </Switch>
      </div>
      
    );
  }
}

export default App;
