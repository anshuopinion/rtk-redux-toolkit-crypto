import React from "react";
// import { useGetCoinsQuery } from "./app/services/cryptoApi";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Crypto from "./page/Crypto/Crypto";
import Home from "./page/Home/Home";
const App = () => {
  // const { data, isLoading, error } = useGetCoinsQuery();
  // console.log(data);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/coins/:id" component={Crypto} />
      </Switch>
    </Router>
  );
};

export default App;
