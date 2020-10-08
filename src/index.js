import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
} from "@apollo/client";
import { ARTWORK_QUERY, GET_COLLECTION } from "./graphql/queries";

import Header from "./components/Header";
import ArtCards from "./components/ArtCards";
import SwipeButtons from "./components/SwipeButtons";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";

//
// https://tranquil-brook-98280.herokuapp.com/

const proxyurl = "https://cors-anywhere.herokuapp.com/"; // cors-anywhere
const client = new ApolloClient({
  uri: `${proxyurl}https://api.accession.io/playground/ica-miami/developer`,
  cache: new InMemoryCache(),
});

client
  .query(ARTWORK_QUERY)
  .then((result) => {
    //setArtworks(result.data.objects);
    console.log("ARTWORK_QUERY", result.data);
  })
  .catch(() => {
    console.group(
      `Can’t access ${client.link.options.uri} response. Blocked by browser?`
    );
    console.log(client);
    console.groupEnd();
  });

function App() {
  const { loading, error, data } = useQuery(GET_COLLECTION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chats" />
            <ChatScreen />
          </Route>
          <Route exact path="/chats">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route exact path="/">
            <Header />
            <ArtCards artworks={data.objects} />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
