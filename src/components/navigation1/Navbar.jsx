import React from 'react'
import avatar from '../../images/Layer_1.svg'
import  './Nav.css'
import { useEffect } from 'react'

const Nav = () => {
    const toggleMenu = () => {
    const links = document.querySelectorAll('.n-left > a');
    links.forEach((link) => {
      link.style.display = link.style.display === 'none' ? 'flex' : 'none';
    });
  };

  useEffect(() => {
    const handleDOMContentLoaded = () => {
      const menuIcon = document.querySelector('.menu-icon');
      menuIcon.addEventListener('click', toggleMenu);
    };

    document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
    };
}, []);

  

  return (
    <div className="n-wrapper" id="Navbar">
     
        <div className='n-right'>
          <img src={avatar} alt=''></img>

        </div>
        <div class='n-left'>
          <input type="checkbox" id="toggle-menu" class="toggle-menu"/>
          <label for="toggle-menu" class="menu-icon">&#9776;</label>
          <a class='blue' href='#'>Home</a>
          <a href='#'>About us</a>
          <a href='#'>Services</a>
          <a href='#'>Projects</a>
          <a href='#'>Blogs</a>
        </div>
     


    </div>
  )
}

export default Nav