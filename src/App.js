import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './Components/Search';
import './Style/normalize.css';
import './Style/style.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            App Placeholder
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
