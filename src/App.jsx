import React from "react";
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Route, Switch } from "react-router";
import LandingPage from "%component/LandingPage";
import Board from "%component/Board";
import config from "./config.json"

const client = new ApolloClient({
  uri: config.uri,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/login' component={LandingPage} />
        <Route path='/board/:boardId' component={Board} />
      </Switch>
    </ApolloProvider>
  );
}

export default App;
