import React from 'react'
import DefaultPage from '../../components/DefaultPage/DefaultPage'

import './roadmap.css'

export default function RoadMap(props) {
  return (
    <DefaultPage>
      <div className="page-home">
        <p className="text-magento-border" style={{ marginTop: '2vh' }}>Roadmap</p>
        <p className="text-normal-black" style={{ maxWidth: 542, marginTop: 35 }}>
        We are starting off with the bookworm collection and if we reach 100% we will begin working on the homesteader collection.
        </p>
        <div className="roadmap-step">
          <p className="roadmap-percent">25%</p>
          <p>AirDrop</p>
        </div>
        <div className="roadmap-step">
          <p className="roadmap-percent">50%</p>
          <p>Donating $20,000 to an illiteracy program</p>
        </div>
        <div className="roadmap-step">
          <p className="roadmap-percent">75%</p>
          <p>Merch - reading lights, bookmarks, lava lamps, blankets, mugs, teas</p>
        </div>
        <div className="roadmap-step">
          <p className="roadmap-percent">100%</p>
          <p>Liquidity pool. All inclusive tropical vacation</p>
        </div>
      </div>
    </DefaultPage>
  )
}