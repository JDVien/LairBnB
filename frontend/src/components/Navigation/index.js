// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup" className='nav-item'>Sign Up</NavLink>
      </>
    );
  }

  return (
    <div>
      <h1>LairBnB</h1>
      <div className='nav-container'>
      <NavLink exact to="/" className='nav-item'>Home</NavLink>
        {isLoaded && sessionLinks}
        <div className='home_nav_searchbar_container'>
          <form className='search_form'>
            <input className='searchbar' type='search' />
            <button className='search_logo_button_lairbnb' >
              <img className='lairbnb_search_black_orange' src={require('../../assets/images/Airbnb_Logo_button.png')} alt='lairbnb_logo' />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
