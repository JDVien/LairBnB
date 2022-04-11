import React from "react";
import { Route } from 'react-router-dom'
import Card from "../Card/Card";
import Footer from '../Footer/Footer'
import Bookings from '../Booking/Bookings/Bookings'
import { NavLink } from 'react-router-dom';
// import background from "./../../assets/images/curve.png";
import "./HomePage.css";
function HomePage() {
  // const scroll = document.getElementById("curve");
  // const scroll2 = document.getElementById("curve2");

  return (
    <>
      <div className="landing_image_body">
        <div className="landing_image_bg">
          <div className="brave_booking_container">
            <h2>Let your morbid curiosity do the booking</h2>
            <NavLink to='/spots'
                  className="random_spot_brave_bttn">I'm Brave
            </NavLink>

          </div>
        </div>
      </div>
      <div className="wrapper">
        <section className="curve_container">
          <div id="curve">
            {/* {document.addEventListener("scroll", function () {
              let value = window.scrollY / 350;
              console.log(value);
              scroll.style.transform = `scale(${value}`;
            })} */}
            <h2>Ideas for your next trip</h2>
            <div className='bookings_body'>
            <Route  path="/bookings">
                  <Bookings />
                </Route>
            </div>
            <div className="home_card_body">
              <Card
                src="https://images5.fanpop.com/image/photos/29800000/The-Nightmare-On-Elm-Street-house-a-nightmare-on-elm-street-29856265-500-365.jpg"
                title="homes"
                description="Private homes, with emphasis on private"
              />
              <Card
                src="https://cdn.traileraddict.com/vidquad/warner-bros-pictures/hobbit2/1.jpg"
                title="Something fantastical"
                description="Ideas off the beaten path"
              />
              <Card
                src="https://preview.redd.it/hkw8bmv5ywo01.jpg?width=640&crop=smart&auto=webp&s=e5e1a34197df729ec87d92656bd71f9e05946536"
                title="Hideouts"
                description="For when you have to lay low, comfortably"
              />
            </div>
{/*
            <div id="curve2">
              <img src={background} alt="">

                {document.addEventListener("scroll", function () {
                  let value = window.scrollY / 90;
                  scroll2.style.transform = `scale(${value})`;
                })}
              </img>
            </div> */}
          </div>
          <div className='experiences_container'>
          <h2>Discover LairBnB Experiences</h2>
            <div className="home_discover_card_body">
              <Card
                src="https://a0.muscache.com/im/pictures/35612883-8e4c-440a-a768-ca7f268bd294.jpg?im_w=320"
                title="Things to do on your trip"
                button="Experiences"
              />
              <Card
                src="https://a0.muscache.com/im/pictures/aec597d9-9c5c-4746-965c-d3e1643299f7.jpg?im_w=320"
                title="Things to do from home"
                button="Online Experiences"
              />
            </div>
            </div>
        </section>
      </div>
      <div className='footer_block'>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
