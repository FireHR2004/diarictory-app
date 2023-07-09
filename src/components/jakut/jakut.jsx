import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import styles from './jakut.module.css';
import imageHeader from './assets/1.jpg';
import img1 from './assets/2.jpg';
import img2 from './assets/3.jpg';
import img3 from './assets/4.jpg';
import img4 from './assets/5.jpg';
import img5 from './assets/6.jpg';
import img6 from './assets/7.jpg';
import img7 from './assets/8.jpg';
import img8 from './assets/9.jpg';
import { Slide } from 'react-reveal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Jakut = () => {
  var settings = {
    dots: true,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
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
    ],
  };

  return(
  // <div className={styles.Jakut}>
  //   Jakut Component
  // </div>
  <section className='font-Montserrat'>
      {/* header */}
      <section className="w-full h-[100vh] bg-cover bg-no-repeat bg-center bg-fixed"style={{ backgroundImage: `url(${imageHeader})`}}>
        <div className={`shadow-inner w-full h-[100vh] absolute ${styles.eblur}`}></div>
        <div className="relative " >
          {/* <img src={imageHeader} className="w-full h-[750px] object-cover mix-blend-overlay" alt="Image" /> */}
            <Fade bottom duration={1500}>
              <h2 className="text-[50px] md:text-[80px] lg:text-[80px] xl:text-[100px] text-white font-bold tracking-widest uppercase text-center pt-[35vh]" style={{textShadow: '4px 4px 2px rgba(0,0,0,0.6)' }}>
                North Jakarta
              </h2>
            </Fade>
        </div>
        </section>
      {/* header */}

      <section className='w-full justify-between items-center flex-col-reverse xl:flex xl:flex-row-reverse m-auto mt-44'>
        <div className="overflow-hidden xl:w-[350rem]">
          <img src={img2} alt="" />
        </div>
        <div className="p-5 text-[15px] xl:text-[20px] m-auto justify-center items-center relative xl:mx-44 text-justify font-Poppins">
          <Fade left duration={1500}>
            <p>North Jakarta has several unique features that set it apart from other areas of Jakarta. Its main uniqueness is the existence of the Thousand Islands, which offer white sandy beaches and underwater natural beauty. Tanjung Priok Port is also a vital trade and logistics center for the national economy. Taman Impian Jaya Ancol is the largest entertainment complex in North Jakarta and offers a variety of recreational facilities. The rich cultural and ethnic diversity is reflected in the temples, traditional markets, and cultural events. North Jakarta is also an important business and commerce center, with modern corporate and shopping centers. These unique qualities make North Jakarta an attractive area to experience the beauty of nature, culture, and various business activities.</p>
          </Fade>
        </div>
      </section>

      <section className='m-auto justify-center items-center w-full pt-32'>
        <Fade top duration={2500}>
          <div className="p-5 font-bold uppercase text-[35px] text-center xl:text-7xl">
            <h1>History of North Jakarta</h1>
          </div>
        </Fade>
        <section className="w-full h-[100vh] bg-cover bg-no-repeat bg-center bg-fixed mt-40"style={{ backgroundImage: `url(${img3})`}}>
          <div className="relative " ></div>
        </section>
      </section>
      <section className='w-full justify-between items-center flex-col xl:flex xl:flex-row m-auto'>
        <div className="overflow-hidden xl:w-[450rem]">
          <img src={img1} alt="" />
        </div>
        <div className="p-5 text-[15px] xl:text-[25px] m-auto justify-center items-center relative text-justify font-Poppins">
          <Fade bottom duration={1500}>
            <p>During the Dutch colonial period, North Jakarta played an important role as the administrative, commercial, and military center of Batavia. This area became the basis of the colonial government, with various administrative offices located here. The Sunda Kelapa Port, which developed into the Tanjung Priok Port, became an important trading center in Southeast Asia. In addition, North Jakarta also has a strong military defense with the construction of forts to protect colonial interests. The history of North Jakarta illustrates the region's strategic role in the history of Dutch colonialism in Indonesia.</p>
          </Fade>
        </div>
      </section>

      <Fade bottom duration={2500}>
        <section className='justify-center items-center pt-[150px] font-Poppins container m-auto overflow-hidden my-56'>
          <div className="p-5 font-bold uppercase text-[35px] text-center xl:text-7xl overflow-hidden m-auto">
            <h1>Heritage Place</h1>
          </div>
          <Slide>
            <Slider {...settings}>
              <div className='xl:p-3 my-10 shadow-xl flex flex-col items-center mx-[5px] justify-center overflow-hidden m-auto'>
                <div className='overflow-hidden xl:w-[45vh] xl:h-[45vh] xl:m-auto p-[10px] h-[250px]'>
                  <img src={img4} alt="North Jakarta" />
                </div>
                <div className='pt-5 text-center text-[20px] uppercase font-semibold'>
                  <h1>Bahari Museum</h1>
                </div>
              </div>
              <div className='xl:p-3 my-10 shadow-xl flex flex-col items-center mx-[5px] justify-center overflow-hidden m-auto'>
                <div className='overflow-hidden xl:w-[45vh] xl:h-[45vh] xl:m-auto p-[10px] h-[250px]'>
                  <img src={img5} alt="North Jakarta" />
                </div>
                <div className='pt-5 text-center text-[20px] uppercase font-semibold'>
                  <h1>Syahbandar Tower</h1>
                </div>
              </div>
              <div className='xl:p-3 my-10 shadow-xl flex flex-col items-center mx-[5px] justify-center overflow-hidden m-auto'>
                <div className='overflow-hidden xl:w-[45vh] xl:h-[45vh] xl:m-auto p-[10px] h-[250px]'>
                  <img src={img6} alt="North Jakarta" />
                </div>
                <div className='pt-5 text-center text-[20px] uppercase font-semibold'>
                  <h1>Luar Batang mosque</h1>
                </div>
              </div>
              <div className='xl:p-3 my-10 shadow-xl flex flex-col items-center mx-[5px] justify-center overflow-hidden m-auto'>
                <div className='overflow-hidden xl:w-[45vh] xl:h-[45vh] xl:m-auto p-[10px] h-[250px]'>
                  <img src={img7} alt="North Jakarta" />
                </div>
                <div className='pt-5 text-center text-[20px] uppercase font-semibold'>
                  <h1>Rumah Si Pitung</h1>
                </div>
              </div>
              <div className='xl:p-3 my-10 shadow-xl flex flex-col items-center mx-[5px] justify-center overflow-hidden m-auto'>
                <div className='overflow-hidden xl:w-[45vh] xl:h-[45vh] xl:m-auto p-[10px] h-[250px]'>
                  <img src={img8} alt="North Jakarta" />
                </div>
                <div className='pt-5 text-center text-[20px] uppercase font-semibold'>
                  <h1>Sunda Kelapa Harbour</h1>
                </div>
              </div>
            </Slider>
          </Slide>
        </section>
      </Fade>
  </section>
  );
}

Jakut.propTypes = {};

Jakut.defaultProps = {};

export default Jakut;
