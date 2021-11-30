import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import './mobilemenu.css'

const navItems = [
  {title: 'Home', link: '/'},
  {title: 'Mint NFT', link: '/mint'},
  {title: 'Rarity', link: '/rarity'},
  {title: 'About', link: '/about'},
  {title: 'RoadMap', link: '/roadmap'},
  {title: 'Team', link: '/team'},
  {title: "FAQ's", link: '/faq'},
  {title: 'Connect', link: '/connect'}
]

export default function MobileMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const activeMenu = location.pathname
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="mobile-menu">
      <FontAwesomeIcon icon={faBars} className="mobile-menu-opener" color="#FFF" onClick={() => setOpenMenu(true)} />
      {openMenu && (<div className="mobile-menu-wrapper">
        <FontAwesomeIcon icon={faTimes} className="mobile-menu-closer" color="#FFF"  onClick={() => setOpenMenu(false)}/>
        <ul className="mobile-link-ul">
        {navItems.map((item, index) => 
          <li key={`navitem-${index}`} onClick={() => navigate(item.link)}>
            {item.link == activeMenu && (<div className="mobile-link-left" />)}
            {item.title}
          </li>
        )}
        </ul>
      </div>)}
    </div>
  )
}