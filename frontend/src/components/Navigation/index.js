// frontend/src/components/Navigation/index.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignupFormPage/SignUpFormModal";
import Bookings from './../Booking/Bookings/Bookings'
import BookingFormModal from './../Booking/Bookings/BookingFormModal'
import Search from '../Search'
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const [showSearch, setShowSearch] = useState(false);
  
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink className="nav-item" to="/spots/create">
          {" "}
          Create a Spot
        </NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        {/* <div className='sessionBtns'> */}
        <SignUpFormModal />
        <LoginFormModal />

        {/* </div> */}

        {/* <NavLink to="/signup" className='nav-item'>Sign Up</NavLink> */}
      </>
    );
  }

  return (
    <nav className="top_nav_div">
      <NavLink exact to="/" className="nav-item">
        Home
      </NavLink>
      <NavLink className="nav-item" to="/spots">
        Nearby Spots
      </NavLink>

      {/* // doing this causes an interesting card hover affect on homescreen
      <NavLink className='nav-item' to="/bookings">
      <Bookings>Bookings</Bookings>
      </NavLink> */}

      {isLoaded && sessionLinks}
      <div className="home_nav_searchbar_container">
        <form className="search_form">
          <input className="searchbar" type="search" />
          <button className="search_logo_button_lairbnb">
            <img
              className="lairbnb_search_black_orange"
              src={require("../../assets/images/Airbnb_Logo_button.png")}
              alt="lairbnb_logo"
            />
          </button>
        </form>
        <img
          className="lairbnb_logo_black_orange_home"
          src={require("../../assets/images/text-1649000244645.png")}
          alt="lairbnb_logo_home"
        />
      </div>

      <div className='banner'>
        <div className='banner_search'>
          {showSearch && <Search />}
          <button onClick={() => setShowSearch(!showSearch)}
          className='banner_search_button'
            variant='outlined'>
              {showSearch ? "Hide" : "Search Dates"}
          </button>
          </div>
          </div>
    </nav>
  );
}

export default Navigation;
