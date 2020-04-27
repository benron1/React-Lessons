import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import List from "./component/List";
// import Box from "./component/Box"
// import Navbar from "./component/Navbar"
// import Middletext from "./component/Middletext"
// import Column from "./component/Column"
// import UserList from "./component/UserList";
import Alive from "./component/Alive";

function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <Alive></Alive>
          {/* <UserList></UserList> */}
          {/* <Middletext></Middletext>
          <Column></Column> */}
          {/* <Box name={"my name"}></Box> */}
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Me!
        </a> */}
      </header>
    </div>
  );
}

export default App;
