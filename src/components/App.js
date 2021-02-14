import React, { useState }  from 'react';
import HomePage from './HomePage.js'
import Aside from './Aside.js'
import ProjectPage from './ProjectPage.js'
import '../stylesheets/App.scss';
import { Route, Switch } from 'react-router-dom';

function App() {
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [filter, setInitialFilter] = useState(null);
    const [switchLanguage, setSwitchLanguage] = useState(false);

    const changeLanguage = () => {
      const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
      const switchOnLanguage = switchLanguage === false ? true : false;
      setCurrentLanguage(newLanguage);
      setSwitchLanguage(switchOnLanguage);
    }
    const setFilter = (filter) => {
      setInitialFilter(filter)
    }
    const setReset = () => {
      setInitialFilter(null)
    }
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Aside changeLanguage={changeLanguage}
              currentLanguage={currentLanguage}
              switchLanguage={switchLanguage}
              text='Proyectos'
              textEn='Projects'
              link='/projects'
            />
            <HomePage changeLanguage={changeLanguage}
              currentLanguage={currentLanguage}
              filter={filter}
              setFilter={setFilter}
              setReset={setReset}
            />
          </Route>
          <Route exact path='/projects'>
            <Aside changeLanguage={changeLanguage}
              currentLanguage={currentLanguage}
              switchLanguage={switchLanguage}
              text='Hola'
              textEn='Hello'
              link='/'
            />
            <ProjectPage changeLanguage={changeLanguage}
              currentLanguage={currentLanguage}
              filter={filter}
              setFilter={setFilter}
              setReset={setReset}
            />
          </Route>
        </Switch>
      </div>

    );
  }
  export default App;
