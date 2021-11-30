import React from 'react'

import './defaultpage.css'
import coverPhoto from '../../assets/desktop.jpeg';
import coverPhotoMobile from '../../assets/mobile.jpeg';
import logo from '../../assets/Crypto-Hermits-Logo-2-Small.png';
import HeaderLink from '../HeaderLink/HeaderLink';
import Footer from '../Footer/Footer';

export default function DefaultPage(props) {
  return (
    <div className="default-layout">
      <div className="default-background-wrapper">
        <div className="header-gradient" />
        <div className='center-image' alt='CryptoHermits Logo' />
        <div className="footer-gradient" />
        <img src={logo} className="top-left-logo" alt="logo" />
      </div>
      <div className="content-wrapper">
        <HeaderLink />
        <div className="child-wrapper">
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  )
}