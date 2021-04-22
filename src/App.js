import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Search from './Components/Search';
import theme from './theme';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Normalize />
          <GlobalStyle />
          <Header />
          <Switch>
            <Route path="/search"><Search /></Route>
            <Route exact path="/">Home</Route>
            <Route>404 - Not Found</Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
