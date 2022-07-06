import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/index';
import Horses from './components/Horse/index';
import Schedule from './components/schedule/index'


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
    <div>
      <main>
        
     <Login></Login> 
     <Horses></Horses>
     <Schedule></Schedule>

      </main>
    </div>
    </ApolloProvider>
  );
}

export default App;
