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
import { getSpot } from './store/spot';
import CreateSpot from './components/Spot/CreateSpot';
import SpotDetail from './components/Spot/SpotDetail';
import DetailPage from './components/DetailPage/DetailPage'
import EditSpot from './components/EditSpot/EditSpot';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(getAllSpots());
    dispatch(getSpot());
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
          <Route path='/:spotId'>
          <SpotDetail />
          </Route>
          <Route path='/:spotId'>
          <EditSpot />
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
