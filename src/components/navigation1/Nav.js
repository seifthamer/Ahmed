import React, { useEffect } from 'react';
import './Nav.css'
import './Navbar'
const Nav = () => {
  const toggleMenu = () => {
    const links = document.querySelectorAll('.n-right > a');
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

  return <div>React Component</div>; // Replace with your desired component JSX
};

export default Nav;
