import React from 'react';
import PropTypes from 'prop-types';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import logo from './assets/2.png';

const Navbar = ({ url, title }) => {
  return(
    <nav>
      <div className="shadow-md bg-white  w-full top-0 left-0">
        <div className="md:flex bg-white py-1 justify-center">
            <a href="/">
              <div className="font-bold flex items-center justify-center md:justify-start cursor-pointer font-Poppins uppercase text-xl w-full md:w-auto">
                <img src={logo} className="w-[50px]" alt="Logo" />
                <h2 className='px-5'>DIARICTORY</h2>
              </div>              
            </a>
          {/* <div className='p-1'>
            <p>Search</p>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
