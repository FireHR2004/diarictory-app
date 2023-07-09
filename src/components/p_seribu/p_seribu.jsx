import React from 'react';
import PropTypes from 'prop-types';
import styles from './p_seribu.module.css';
import Fade from 'react-reveal/Fade';
import imageHeader from './assets/header.jpg';
import Slider from "react-slick";
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img5.jpg';
import img4 from './assets/img6.jpg';
import img5 from './assets/img7.jpg';
import img6 from './assets/img3.jpg';
import ornust from './assets/ornust.jpg';
import { Slide } from 'react-reveal';

const PSeribu = () => {
    var settings = {
      dots: true,
      infinite: false,
      speed: 1500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <section className='font-Montserrat'>
      {/* header */}
      <section className="w-full h-[100vh] bg-cover bg-no-repeat bg-center"style={{ backgroundImage: `url(${imageHeader})`}}>
        <div className={`shadow-inner w-full h-[100vh] absolute ${styles.eblur}`}></div>
        <div className="relative " >
          {/* <img src={imageHeader} className="w-full h-[750px] object-cover mix-blend-overlay" alt="Image" /> */}
            <Fade bottom duration={1500}>
              <h2 className="text-[50px] md:text-[80px] lg:text-[80px] xl:text-[100px] text-white font-bold tracking-widest uppercase text-center pt-[35vh]" style={{textShadow: '4px 4px 2px rgba(0,0,0,0.6)' }}>
                kepulauan Seribu
              </h2>
            </Fade>
        </div>
        </section>
      {/* header */}
      {/* Description */}
      <section className="font-Montserrat container m-auto" duration={1500}>
        <Fade left>
          <section className='w-full flex flex-col xl:p-[25vh]'>
            <div className="p-5 xl:text-[50px] font-bold uppercase">
              <h3>Kepulauan Seribu</h3>
            </div>
            <div className="p-5 xl:text-[25px] text-justify">
              <p>Kepulauan Seribu have their own charm, from the alluring white sandy beaches and clear sea water to the beautiful coral reefs. Some of the famous islands include Pramuka Island, Tidung Island, Pari Island, and Macan Island. These islands offer various activities such as snorkeling, diving, sailing, or just relaxing by the beach.</p>
            </div>
          </section>
        </Fade>
      </section>
      {/* Description */}
      {/* slider */}
      <section className='pb-[150px] overflow-hidden m-auto md:p-10'>
        <Slide>
          <Slider {...settings}>
            <div className="overflow-hidden xl:w-[40rem] md:h-[9rem] h-[15rem] xl:h-[20rem] relative p-[10px] m-auto ">
              <img src={img1} alt="" />
            </div>
            <div className="overflow-hidden xl:w-[40rem] md:h-[9rem] h-[15rem] xl:h-[20rem] relative p-[10px] m-auto ">
              <img src={img2} alt="" />
            </div>
            <div className="overflow-hidden xl:w-[40rem] md:h-[9rem] h-[15rem] xl:h-[20rem] relative p-[10px] m-auto ">
              <img src={img3} alt="" />
            </div>
            <div className="overflow-hidden xl:w-[40rem] md:h-[9rem] h-[15rem] xl:h-[20rem] relative p-[10px] m-auto ">
              <img src={img4} alt="" />
            </div>
            <div className="overflow-hidden xl:w-[40rem] md:h-[9rem] h-[15rem] xl:h-[20rem] relative p-[10px] m-auto ">
              <img src={img5} alt="" />
            </div>
          </Slider>
        </Slide>
      </section>
      {/* slider */}

      <section className="flex flex-col sm:flex-col xl:flex-row-reverse xl:p-20 justify-between m-auto  overflow-hidden">
        <div className="overflow-hidden xl:w-[60vh] m-auto w-[50vh] md:mx-auto ">
          <img src={ornust} alt=""/>
        </div>
        <div className="p-5 text-justify m-auto xl:w-[50%] xl:text-[20px] md:text-[20px] text-[12px] md:p-[5vh]">
          <p>Onrust Island became the center of Dutch administrative, military, and trade activities in the 17th century. The island was used as a base and warehouse for Dutch trading and colonization expeditions in Southeast Asia. Onrust Island became a strategic place to control the spice trade and protect Dutch colonial interests in the East Indies region. This island was also an important center in the maritime trade network controlled by the VOC.</p>
        </div>
      </section>

      <section className="w-full]" >
        <div className="relative h-[70vh] bg-cover bg-no-repeat bg-center bg-fixed py-[50px" style={{ backgroundImage: `url(${img6})`}}></div>
      </section>
    </section>
  );
}
PSeribu.propTypes = {};

PSeribu.defaultProps = {};

export default PSeribu;
