import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
// import Search from "./components/Search/Search";
import Spots from './components/Spot/Spot';
import { getAllSpots } from './store/spot';
import CreateSpot from './components/Spot/CreateSpot';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(getAllSpots());
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/create">
            <CreateSpot />
          </Route>
          <Route path="/spots">
            <Spots />
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
{/* <SpotDetail
// image={image}
name={name}
address={address}
city={city}
state={state}
country={country}
price={price}
/> */}
