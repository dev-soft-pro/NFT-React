import React from 'react'

import DefaultPage from '../../components/DefaultPage/DefaultPage'
import './mint.css'

export default function Connect(props) {
  return (
    <DefaultPage>
      <div className="page-home">
        <p className="text-magento-border" style={{ marginTop: '2vh' }}>Mint Nft</p>
        <p className="text-normal-black" style={{ marginTop: 30 }}>
          Tokens Minted 15/100
        </p>
        <p className="text-normal-black" style={{ marginTop: 30 }}>
          Get your random cryptohermit nft below, All nfts are 0.01 Eth!
        </p>
        <p className="text-normal-black" style={{ marginTop: 30 }}>
          Number of Nfts to mint (3 max per wallet)
        </p>
        <select name='mintAmount' id='mintAmount' className='mint-amount'>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
				</select>
        <div style={{ marginTop: 37 }}>
          <button className="btn-cyan" style={{ marginRight: 28 }}>CONNECT WALLET</button>
          <button className="btn-magento">MINT NFT</button>
        </div>
      </div>
    </DefaultPage>
  )
}