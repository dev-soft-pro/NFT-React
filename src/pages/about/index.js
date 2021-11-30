import React from 'react'
import DefaultPage from '../../components/DefaultPage/DefaultPage'

import './about.css'

export default function About(props) {
  return (
    <DefaultPage>
      <div className="page-home">
        <p className="text-magento-border" style={{ marginTop: '2vh' }}>About Us</p>
        <p className="text-normal-black para-about">
          After decades of down time and solitude the crypto hermits are ready to make some noise. 
          We are our generations overlooked modern day rebels. 
          Join the revolution of bookworms, self sufficient homesteaders, homeschoolers, 
          fighters of free speech and leaders of ethical sustainable living. 
          Collect art and make friends with those of who are just as intentional (and fed up) as you. 
          We just want to be left alone and leaves others alone. Lets find peace in solitary, together.
        </p>
      </div>
    </DefaultPage>
  )
}