import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md: grid-cols-4'>
    <div className='space-y-4 text-xs text-gray-800'>
      <h5 className='font-bold'>ABOUT</h5>
      <p>How LairBnB works</p>
      <p>Newsroom</p>
      <p>Investors</p>
      <p>LairBnB Plus</p>
      <p>LairBnB Luxe</p>
    </div>
    <div className='space-y-4 text-xs text-gray-800'>
    <h5 className='font-bold'>COMMUNITY</h5>
      <p>Accessibility</p>
      <p>This is definitely a WIP</p>
      <p>Villains United</p>
      <p>Referrals Accepted</p>
      <p>App Academy Rocks</p>
    </div>
    <div className='space-y-4 text-xs text-gray-800'>
    <h5 className='font-bold'>HOST</h5>
      <p>Beginner Tips</p>
      <p>Rules to Follow</p>
      <p>Communal Ettiquette</p>
      <p>Super Host Requests</p>
      <p>Contact</p>
    </div>

    </div>
  )
}

export default Footer
