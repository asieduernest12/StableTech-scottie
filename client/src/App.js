import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login/index';
import Horses from './components/Horse/index';
import Schedule from './components/schedule/index';
import Home from './components/Navbar/index';
import Homepage from './components/Homepage/index';
import Addhorse from './components/addHorse/index';


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
function App() {
  return (
   <ApolloProvider client={client}>
      <Router>
        <Home />
            <Routes>
              <Route
                path="/home"
                element={<Homepage />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/horses"
                element={<Horses />}
              />
              <Route
                path="/addhorse"
                element={<Addhorse />}
              />
              <Route
                path="/schedule"
                element={<Schedule />}
              />
              </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
