import React from 'react';
import './App.css';
import RouteConfig from './router/config'
import RouterView from './router/index'
import { HashRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Router>
      <RouterView routes={RouteConfig}></RouterView>
     </Router>
    </div>
  );
}


export default App
