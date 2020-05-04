import React from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import AboutPage from './components/AboutPage';
import Products from './components/Products';
import Item from './components/Items';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UserPage from './components/UserPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Products: ['IPhone', 'Ipod', 'Iped']
    };
  }

  render() {
    return (
      <div className="App">
        <Router>
          {/* <Link to="/">Main</Link> */}
          <Link to="/about" style={{ marginInlineStart: '8px' }}>
            About
          </Link>
          <Link to="/products" style={{ marginInlineStart: '8px' }}>
            products
          </Link>
          {/* <Link to="/user/3" style={{ marginInlineStart: '8px' }}>
            User 3
          </Link>
          <Link to="/user/4" style={{ marginInlineStart: '8px' }}>
            User 4
          </Link> */}
          <Switch>
            <Route path="/products/:ProductId">
              <Item products={this.state.Products} />
            </Route>
            <Route path="/user/:userId">
              <UserPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/products">
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
