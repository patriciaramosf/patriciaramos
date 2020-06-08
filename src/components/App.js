import React from 'react';
import HomePage from './HomePage.js'
import Aside from './Aside.js'
import ProjectPage from './ProjectPage.js'
/* import ProjectDetails from './ProjectDetails.js'; */
import '../stylesheets/App.scss';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      currentLanguage: 'es',
      filter:null,
      switchLanguage:false,
    }
  }
  changeLanguage =()=>{
    const newLanguage = this.state.currentLanguage === 'es' ? 'en': 'es';
    const switchOnLanguage = this.state.switchLanguage === false ? true: false;
    this.setState({
      currentLanguage: newLanguage,
      switchLanguage: switchOnLanguage,
    })
  }
 setFilter = (filter) =>{
   this.setState({ filter:filter });
 }
 setReset =()=>{
   this.setFilter(null);
 }
 /*  renderProjectDetail(props) {
  const routeId = props.match.params.id;
  for (let projectObj of projects) {
    if (projectObj.id === parseInt(routeId)) {
      return <ProjectDetails project={projectObj} />;
    }
  }
} */
  render() {
    const { currentLanguage, filter, switchLanguage } = this.state;
    const { setFilter, setReset, changeLanguage } = this;
    return (
      <div className="App">
          <Switch>
            <Route exact path='/'>
                <Aside    changeLanguage={ changeLanguage }
                          currentLanguage={ currentLanguage }
                          switchLanguage={ switchLanguage }
                          text='Proyectos'
                          textEn='Projects'
                          link='/projects'
                />
                <HomePage   changeLanguage={ changeLanguage }
                            currentLanguage={ currentLanguage }
                            filter={ filter }
                            setFilter={ setFilter }
                            setReset={ setReset }
                />
            </Route>
            <Route exact path='/projects'>
                <Aside          changeLanguage={ changeLanguage }
                                currentLanguage={ currentLanguage }
                                switchLanguage={ switchLanguage }
                                text='Hola'
                                textEn='Hello'
                                link='/'
                />
                <ProjectPage    changeLanguage={ changeLanguage }
                                currentLanguage={ currentLanguage }
                                filter={ filter }
                                setFilter={ setFilter }
                                setReset={ setReset }
                />
            </Route>
          {/*  <Route path="/projects/:id" render={renderProjectDetail} /> */}
        </Switch>
      </div>
      
    );
  }
}

export default App;
