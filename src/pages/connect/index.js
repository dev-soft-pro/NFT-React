import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'

import DefaultPage from '../../components/DefaultPage/DefaultPage'

export default function Connect(props) {
  return (
    <DefaultPage>
      <div className="page-home">
        <p className="text-magento-border" style={{ marginTop: '2vh' }}>Connect</p>
        <p className="text-normal-black" style={{ maxWidth: 586, marginTop: 30 }}>
          Chat with us on Twitter and connect with friends on Discord who are just as intentional (and fed up) as you. 
          We just want to be left alone and leave others alone. Let's find peace in solitary, together.
        </p>
        <p style={{ marginTop: 30 }}>
					<FontAwesomeIcon icon={faTwitter} style={{ marginRight: 60, fontSize: 72 }} color="#1E9BF0" />
					<FontAwesomeIcon icon={faDiscord} style={{ fontSize: 72 }} color="#404EED" />
				</p>
      </div>
    </DefaultPage>
  )
}