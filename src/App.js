import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import React from 'react';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import QuestionaireResult from './components/QuestionaireResult';
import Demo from './components/Demo';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/section1" component={SectionOne} />
          <Route path="/section2" component={SectionTwo} />
          <Route path="/result" component={QuestionaireResult} />

        </Switch>

        {/* <Route exact path="/" component={LandingPage} /> */}



      </div>
    </BrowserRouter>
  );
}

export default App;
