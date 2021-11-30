import React from 'react'
import DefaultPage from '../../components/DefaultPage/DefaultPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'

import './faq.css'

export default function Faq(props) {
  return (
    <DefaultPage>
      <div className="page-home">
        <p className="text-magento-border" style={{ marginTop: '2vh' }}>FAQ</p>
        <div className="faq-text-group">
          <div className="faq-text-question">
            <FontAwesomeIcon icon={faPlusSquare} className="faq-text-plus" />
            <p className="text-faq-black">How do I download MetaMask and fund my MetaMask wallet?</p>
          </div>
          <p className="faq-text-answer">
            1. You need to download MetaMask. <br />
            2. Buy Ethereum from an exchange. <br />
            3. Transfer it to your MetaMask Wallet. <br />
          </p>
          <div className="faq-text-question">
            <FontAwesomeIcon icon={faPlusSquare} className="faq-text-plus" />
            <p className="text-faq-black">How do I mint an NFT?</p>
          </div>
          <p className="faq-text-answer">
            Once you have MetaMask installed and Ethereum in your wallet you can click here to mint an NFT.
          </p>
          <div className="faq-text-question">
            <FontAwesomeIcon icon={faPlusSquare} className="faq-text-plus" />
            <p className="text-faq-black">When can I mint an NFT?</p>
          </div>
          <p className="faq-text-answer">
            You can officially mint an NFT on January 8th at 1:00 pm ET.
          </p>
          <div className="faq-text-question">
            <FontAwesomeIcon icon={faPlusSquare} className="faq-text-plus" />
            <p className="text-faq-black">What do you have planned for the future of CryptoHermits?</p>
          </div>
          <p className="faq-text-answer">
            We have a lot planned once we reach 100% in sales for the bookworm collection. 
            The next collection we are excited for is the homesteader collection. 
            From there we hope to expand to other collections. 
            We want to create a community of self-sufficient, independent thinkers who aren't afraid to fight censorship!
          </p>
          <div className="faq-text-question">
            <FontAwesomeIcon icon={faPlusSquare} className="faq-text-plus" />
            <p className="text-faq-black">Can I buy on my mobile phone?</p>
          </div>
          <p className="faq-text-answer">
            Yes, simply download MetaMask for iOS or Android and visit our site using the MetaMask browser.
          </p>
        </div>
      </div>
    </DefaultPage>
  )
}