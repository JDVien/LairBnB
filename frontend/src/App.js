import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
// import Search from "./components/Search/Search";
import Spots from './components/Spot/Spot';
import { getAllSpots } from './store/spot';
import { getAllBookings } from './store/bookings';
import CreateSpot from './components/Spot/CreateSpot';
import BookingCost from './components/Booking/bookingCost'
import SpotDetail from './components/Spot/SpotDetail';
import Bookings from './components/Booking/Bookings/Bookings';
// import DetailPage from './components/DetailPage/DetailPage'
import EditForm from './components/EditSpot/index';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    // dispatch(getAllSpots());
    // dispatch(getAllBookings());
    // dispatch(getSpot());
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage />
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
          <Route path="/:id/edit">
            <EditForm />
          </Route>
          <Route exact path="/bookings">
            <Bookings />
          </Route>
          <Route path="/create">
            <BookingCost />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
