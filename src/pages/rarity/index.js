import React from 'react'

import DefaultPage from '../../components/DefaultPage/DefaultPage'
import rarityImage from '../../assets/rarity-item.png';
import './rarity.css';

export default function Connect(props) {
  const items = [
    'Common',
    'Uncommon',
    'Rare',
    'Epic',
    'Legendary',
    'Exotic',
    'Mythic'
  ]
  return (
    <DefaultPage>
      <div className="page-home">
        <p className="text-magento-border" style={{ marginTop: '2vh' }}>Rarity</p>
        <p className="text-normal-black" style={{ marginTop: 20, maxWidth: 970 }}>
          Each Bookworm NFT has a rarity ranging from common to mythic. 
          The color of the book on the NFT corresponds with the rarity level. Below are some examples of NFTs you could get.
        </p>
        <div className="rarity-wrapper">
          {items.map((item, index) => 
            <div className="rarity-item" key={`rarity-${index}`}>
              <img className="rarity-image" src={rarityImage} alt={item} />
              <div>{item}</div>
            </div>
          )}
        </div>
      </div>
    </DefaultPage>
  )
}