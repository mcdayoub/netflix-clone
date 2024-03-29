import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import Home from './pages/Home';

//Router sets up different paths to eventually scale out app
function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
    </Router>
  );
}

export default App;
