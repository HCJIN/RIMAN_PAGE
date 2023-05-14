import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const NavBar = () => {
  return (
    <div className='main'>
      <div className='hadear'>
        <img src='https://www.rimankorea.com/logo_rimankorea.svg?30b253deffbf5c06549e270cc61b2f69' alt='로고' className='logo'/>
        <ul className='menu-list'>
          <li className='menu_1'>BRANDS</li>
          <li className='menu_2'>PRODUCTS</li>
          <li className='menu_3'>NEWS & MEDIA</li>
          <li className='menu_4'>ABOUT US</li>
          <li className='menu_5'>CAREERS</li>
          <li className='menu_6'>RIMAN MALL</li>
        </ul>
        <div className='Login'>
          <FontAwesomeIcon icon={faUser} className='My_page_Icon'/>
          <div className='My_Page'>My Office</div>
          <div className='Menu_Bar'>=</div>
        </div>
      </div>
    </div>
  )
}

export default NavBar