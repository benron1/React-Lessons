import React from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import AboutPage from './components/AboutPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UserPage from './components/UserPage';
import Products from './components/Products';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Link to="/">Main</Link>
          <Link to="/about" style={{ marginInlineStart: '8px' }}>
            About
          </Link>
          <Link to="/Products" style={{ marginInlineStart: '8px' }}>
            Products
          </Link>
          <Link to="/user/3" style={{ marginInlineStart: '8px' }}>
            User 3
          </Link>
          <Link to="/user/4" style={{ marginInlineStart: '8px' }}>
            User 4
          </Link>
          <Switch>
            <Route path="/user/:userId">
              <UserPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/Products">
              <Products />
            </Route>
            <Route path="/">
              <FirstPage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;