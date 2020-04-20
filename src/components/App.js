import React from 'react';
import HomePage from './HomePage.js'
import ProjectPage from './ProjectPage.js'
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <HomePage></HomePage>
        <ProjectPage></ProjectPage>
      </div>
    );
  }
}

export default App;
