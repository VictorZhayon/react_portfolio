import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { nav } from 'framer-motion/client';


const Navbar = () => {
  const [active, setActive] = useState("")
  return (
    <nav
      className= {
        '${styles.paddindX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary'
      }
    >
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <Link 
          to ="/"
          className='flex items-center gap2'
          onClick={() =>{
            setActive("");
            window.scrollTo(0,0);
          }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain'/>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar