import React from 'react';
import HomePage from './HomePage.js'
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
            <HomePage changeLanguage={this.changeLanguage}
                      currentLanguage={this.state.languageEn}
            />
          </Route>
        </Switch>
      </div>
      
    );
  }
}

export default App;
