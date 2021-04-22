import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './GlobalStyle';
import Search from './Components/Search';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Normalize />
        <GlobalStyle />
        <Switch>
          <Route path="/search"><Search /></Route>
          <Route exact path="/">Home</Route>
          <Route>404 - Not Found</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
