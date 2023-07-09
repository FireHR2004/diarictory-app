import React from 'react';
import PropTypes from 'prop-types';
import styles from './footer.module.css';
import logo from './assets/2.png';

const Footer = () => {
    return(
      <footer className='font-Poppins'>
        <div className='flex-col xl:flex xl:flex-row justify-center w-full py-8'>
          <div className='p-5 mx-[10vh] md:px-auto'>
            <div className='font-bold text-center'>
              <img src={logo} className='w-[250px]'/>
            </div>
          </div>

          <div className='p-5 sm:mx-10 xl:px-[150px]'>
            <div className='font-bold text-left pt-5'>
              <h3>About Me</h3>
            </div>
            <div className='text-justify pt-5'>
              <p>Diarictory is a website that provides recommendations for tourist attractions, culinary, and historical places in Jakarta. Find detailed information and reviews about the city's landmarks, restaurants, and historical heritage for the best experience in exploring Jakarta.</p>
            </div>
          </div>
          <div className='p-5 sm:mx-10 xl:px-[50px]'>
            <div className='font-bold text-left pt-5'>
              <h3>Contact Us</h3>
            </div>
            <div className='text-justify pr-5 pt-5'>
              <ul>
                <li>Instagram</li>
                <li>twitter</li>
                <li>Whatsapp</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center p-5 border-t-2'>
          <p>&copy; Diarictory 2023</p>
        </div>
      </footer>
    );
}

// Footer.propTypes = {};

// Footer.defaultProps = {};

export default Footer;
