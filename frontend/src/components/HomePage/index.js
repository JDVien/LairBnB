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
