import React from 'react';
import Card from '../Card/Card';
import './HomePage.css';
function HomePage() {
  return (
    <div>
    <div className="landing_image_body" >
    <div className='landing_image_bg'>
      <div className='brave_booking_container'>
      <h2>Let your morbid curiosity do the booking</h2>
      <button className='random_spot_brave_bttn'>I'm Brave</button>
      <a href='/'>
      </a>
    </div>
    </div>
    </div>
    <h2>Ideas for your next trip</h2>
    <div className='home_card_body'>
    <Card src='https://images5.fanpop.com/image/photos/29800000/The-Nightmare-On-Elm-Street-house-a-nightmare-on-elm-street-29856265-500-365.jpg'
          title="homes"
          description="Private homes, with emphasis on private"
    />
      <Card src='https://cdn.traileraddict.com/vidquad/warner-bros-pictures/hobbit2/1.jpg'
            title="Something fantastical"
            description="Ideas off the beaten path"
      />
      <Card src='https://preview.redd.it/hkw8bmv5ywo01.jpg?width=640&crop=smart&auto=webp&s=e5e1a34197df729ec87d92656bd71f9e05946536'
            title="Hideouts"
            description="For when you have to lay low, comfortably"
      />
    </div>
    <div className='home_card_body'>
      <Card src='https://seattlerefined.com/resources/media/05b9d5de-4f6f-4f13-aa4a-67e709981102-large16x9_a.JPG?1575572677165'
            title="homes"
            description="Private homes, with emphasis on private"
      />
      <Card src='https://seattlerefined.com/resources/media/05b9d5de-4f6f-4f13-aa4a-67e709981102-large16x9_a.JPG?1575572677165'
            title="homes"
            description="Private homes, with emphasis on private"
      />
      <Card src='https://seattlerefined.com/resources/media/05b9d5de-4f6f-4f13-aa4a-67e709981102-large16x9_a.JPG?1575572677165'
            title="homes"
            description="Private homes, with emphasis on private"
      />
    </div>

    </div>
  )
}

export default HomePage
