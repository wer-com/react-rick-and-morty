import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Character from './components/Character';
import Episode from './components/Episode';
import Location from './components/Location';
import Home from './components/Home';
import Rick from './img/Rick_and_Morty_logo.png'
import CharacterDetail from './components/CharacterDetail';

const App = () => {

  return (
    <BrowserRouter>
      <div className="nav">
        <div className="logo">
          <img src={Rick} alt="rick"  className="rick-logo"/>
          </div>
        <div className="nav-menu">
          <ul className="nav-ul">
            <Link to="/"><li className="nav-li">Home</li></Link>
            <Link to="/Characters"><li className="nav-li">Characters</li></Link>
            <Link to="/Episodes"><li className="nav-li">Episodes</li></Link>
            <Link to="/Location"><li className="nav-li">Location</li></Link>
          </ul>
        </div>
      </div>
        <Route exact path="/" component={Home}/>
        <Route path="/Characters" component={Character} />
        <Route path="/Character" component={CharacterDetail} />
        <Route path="/Episodes" component={Episode} />
        <Route path="/Location" component={Location} />
    </BrowserRouter>
  );
}

export default App;
