import React from 'react'
import DefaultPage from '../../components/DefaultPage/DefaultPage'

import './team.css'

export default function Team(props) {
  return (
    <DefaultPage>
      <div className="page-home">
        <p className="text-magento-border" style={{ marginTop: '2vh' }}>Team</p>
        <p className="text-title-black para-founder">Founder</p>
        <p className="text-normal-black para-team">
          Due to the social climate we have decided to stay anonymous. 
          This reaffirms something we strongly believe in. Who we are 
          in the terms of controversial categories like gender, race, 
          and political affiliations do not matter. Our beliefs and 
          character define us. The elites do not get to divide us 
          unless we consent to prioritizing our differences compared 
          to our similarities. We are all together on this beautiful 
          planet; join the rebellion of hermits. This is the way.
        </p>
        <p className="text-title-black para-artist">Artist</p>
        <p className="text-normal-black para-artist-content">
          Jeremy Webster
        </p>
      </div>
    </DefaultPage>
  )
}