// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignupFormPage/SignUpFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink className='nav-item' to='/create'>   Create a Spot</NavLink>
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
    <nav className='top_nav_div'>
      <NavLink exact to="/" className='nav-item'>Home</NavLink>
      <NavLink className='nav-item' to='/spots'>Spots</NavLink>
        {isLoaded && sessionLinks}
        <div className='home_nav_searchbar_container'>
          <form className='search_form'>
            <input className='searchbar' type='search' />
            <button className='search_logo_button_lairbnb' >
              <img className='lairbnb_search_black_orange' src={require('../../assets/images/Airbnb_Logo_button.png')} alt='lairbnb_logo' />
            </button>
          </form>
          <img className='lairbnb_logo_black_orange_home' src={require('../../assets/images/text-1649000244645.png')} alt='lairbnb_logo_home' />
        </div>
    </nav>
  );
}

export default Navigation;
