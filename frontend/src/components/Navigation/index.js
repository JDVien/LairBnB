// frontend/src/components/Navigation/index.js
import React, { useEffect, useState } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignupFormPage/SignUpFormModal";
import Bookings from './../Booking/Bookings/Bookings'
import BookingFormModal from './../Booking/Bookings/BookingFormModal'
import Search from '../Search'
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [showSearch, setShowSearch] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const spots = useSelector((state) => state.spots);
  const spotsList = Object.values(spots).map((spot) => [
    spot.name,
    spot.city,
    spot.state,
    spot.price,
    spot.image,
    spot.spotType,
    spot?.id,
  ])

  useEffect(() => {
    setFilteredList(spotsList.filter((spot) =>
      spot[0].toLowerCase().includes(searchWord.toLowerCase())
    ))
  }, [searchWord])

  function handleSubmit(e) {
    e.preventDefault();
    if (filteredList.length > 0) {
      history.push(`/spots/${filteredList[0][2]}`)
    }
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <span className='profile_bttn nav-item'>
        <ProfileButton user={sessionUser} />
        </span>
        <i className="fa-solid fa-globe"></i>
        <NavLink className="nav-item" to="/spots/create">
          {" "}
          Become a host
        </NavLink>
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

      {isLoaded && sessionLinks}
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

      <div className="home_nav_searchbar_container">
        <form className="search_form" onSubmit={(e) => handleSubmit(e)}>
          <input
            className="searchbar"
            type="search"
            value={searchWord}
            placeholder="Search Spots!"
            onChange={(e) => setSearchWord(e.target.value)}
          />
          <button className="search_logo_button_lairbnb">
            <img
              className="lairbnb_search_black_orange"
              src={require("../../assets/images/Airbnb_Logo_button.png")}
              alt="lairbnb_logo"
            />
          </button>
        </form>
        {searchWord != "" && (
          <div id='search-container'>
            <div classname="searchresult-list">
              {filteredList?.slice(0, 5).map((spot) => (
                <div className="lbnb=div">
                  <Link className="spot-link" to={`/${spot[6]}`}>
                    <span
                      className="spot-li"
                      key={spot.id}
                      value={spot.name}
                    >
                      <img
                        src={spot[4]?.image}
                        width="115"
                        height="53.78"
                        alt="spot img"
                      />
                      <div className="spot-separator">
                        {spot[0]}
                        <span className="spot-search-price">
                          {spot[3]}
                          </span>
                        </div>
                      </span>
                    </Link>
                  </div>
              ))}
            </div>
          </div>
        )}
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
