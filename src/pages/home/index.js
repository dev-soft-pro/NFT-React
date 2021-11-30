import React from 'react'
import DefaultPage from '../../components/DefaultPage/DefaultPage'

import './home.css'

export default function Home(props) {
  return (
    <DefaultPage>
      <div className="page-home">
        <p className="text-magento-noborder">Crypto</p>
        <p className="text-cyan">Hermits</p>
        <p className="text-normal-black" style={{ marginTop: 30, maxWidth: 437 }}>
          Join the revolution of bookworms, self sufficient homesteaders, homeschoolers, 
          fighters of free speech and leaders of ethical sustainable living.
        </p>
        <button className="btn-black" style={{ marginTop: 40 }}>ENTER</button>
      </div>
    </DefaultPage>
  )
}