import React from "react";
import { getData, DeleteID, postNewId } from "./lib/Api";
import List from "./components/List";
import AddToList from "./components/AddToList";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AddToList></AddToList>
      <List></List>
    </div>
  );
}

export default App;