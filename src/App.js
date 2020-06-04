import React from 'react';
import './App.css';
import Navbar from './Layout/Navbar'
import Index from './Layout/Index'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <React.Fragment>
      {/* replaced the div with react fragment and it wont be shown in DOM */}
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Index} />
          </Switch>
        </div>
    </React.Fragment>
    </Router>
  );
}

export default App;
