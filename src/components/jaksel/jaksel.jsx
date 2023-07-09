import React from 'react';
import PropTypes from 'prop-types';
import styles from './jaksel.module.css';
import Fade from 'react-reveal/Fade';
import { Slide } from 'react-reveal';
import imageHeader from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.webp';
import img4 from './assets/4.jpg';
import img5 from './assets/5.jpg';
import img6 from './assets/6.jpg';
import img7 from './assets/7.jpg';
import img8 from './assets/8.jpg';

const Jaksel = () => (
  <section className='font-Montserrat'>
      {/* header */}
      <section className="w-full h-[100vh] bg-cover bg-no-repeat bg-center"style={{ backgroundImage: `url(${imageHeader})`}}>
        <div className={`shadow-inner w-full h-[100vh] absolute ${styles.eblur2}`}></div>
        <div className="relative " >
          {/* <img src={imageHeader} className="w-full h-[750px] object-cover mix-blend-overlay" alt="Image" /> */}
            <Fade bottom duration={1500}>
              <h2 className="text-[50px] md:text-[80px] lg:text-[80px] xl:text-[100px] text-white font-bold tracking-widest uppercase text-center pt-[35vh]" style={{textShadow: '4px 4px 2px rgba(0,0,0,0.6)' }}>
                South Jakarta
              </h2>
            </Fade>
        </div>
        </section>
      {/* header */}
      <Fade bottom duration={1500}>
      <section className='m-auto items-start flex flex-col font-Montserrat w-[60%] pt-[150px] container'>
          <div className='text-center xl:text-left font-bold items-center justify-center pt-6 text-[30px] xl:text-[45px]'>
            <h1>Business and Commerce Center</h1>
          </div>
          <div className='text-justify items-start justify-start text-[20px] md:text-[15px] lg:text-[16px] xl:text-[25px] text-sm md:text-base pt-6 font-Poppins'>
            <p>South Jakarta is an important business and commercial center in Jakarta. In this area, there are many offices, shopping centers, hotels, and luxury restaurants. The presence of these business centers has made South Jakarta a dynamic center of economic activity.</p>
          </div>
      </section>  
      <section className='w-full justify-between items-center flex-col xl:flex xl:flex-row m-auto pt-56'>
        <div className="overflow-hidden xl:w-[150rem] xl:h-[75rem]">
          <img src={img8} alt="" />
        </div>
        <div className="p-11 text-[15px] xl:text-[25px] m-auto justify-center items-center relative text-justify font-Poppins xl:w-[100%]">
          <p>South Jakarta is an important business center thanks to factors such as the availability of a thriving commercial area, good accessibility, complete infrastructure, the presence of companies and financial institutions, and the support of the local government. The presence of modern business centers and other business support facilities makes South Jakarta an attractive place for companies and businesses to operate. This area is the center of dynamic economic activity in Jakarta, offering various opportunities and business potential.</p>
        </div>
      </section>
      </Fade>

      <section className="w-full relative bg-slate-950 text-white" >
        <div className={`shadow-inner w-full h-[70vh] absolute ${styles.eblur}`}></div>
        <div className=" h-[70vh] bg-cover bg-no-repeat bg-center bg-fixed py-[50px]" style={{ backgroundImage: `url(${img4})`}}>
          <Fade bottom duration={1500}>
            <h2 className="text-[40px] md:text-[80px] lg:text-[80px] xl:text-[100px] text-white font-bold tracking-widest uppercase text-center pt-[15vh]" style={{textShadow: '4px 4px 2px rgba(0,0,0,0.6)' }}>
              GULAI TIKUNGAN
            </h2>
          </Fade>
        </div>
      </section>
      <section className='w-full justify-between items-center flex-col xl:flex xl:flex-row-reverse m-auto xl:p-20 pt-20 bg-slate-950 text-white'>
        <div className="overflow-hidden xl:w-[450rem]">
          <img src={img3} alt="" />
        </div>
        <div className="p-5 text-[15px] xl:text-[20px] m-auto justify-center items-center relative text-justify font-Poppins">
          <Fade top duration={1500}>
            <h3 className="font-bold text-4xl xl:text-6xl text-Montserrat uppercase py-10 xl:text-left text-center">Famous Streetfood Gultik</h3>
            <p className='font-Poppins'>"Gultik" is a popular culinary dish originating from West Sumatra, Indonesia. This dish is a goulash or curry with thin slices of beef cooked with special spices. Gultik has a rich taste, a fragrant aroma of spices, and a soft texture. This dish is often served with white rice or ketupat, as well as accompaniments such as long beans, cassava leaves, and crackers. Gultik is a dish that is liked and known in various regions of Indonesia because of its unique delicacy.</p>
          </Fade>
        </div>
      </section>

      <section className='m-auto justify-center items-center w-full pt-56'>
        <Fade bottom duration={2500}>
          <div className="p-20 font-bold uppercase text-[45px] text-center xl:text-7xl">
            <h1>Ragunan Zoo</h1>
          </div>
          <div className="overflow-hidden w-[23rem] xl:w-[60rem] m-auto items-center justify-center relative">
            <img src={img5} alt="" className='xl:w-[75rem]'/>
          </div>
          <div className="p-5 text-[15px] xl:text-[25px] m-auto justify-center items-center relative text-center font-Poppins xl:p-36">
            <p>Ragunan Zoo in South Jakarta is a popular tourist destination that offers biodiversity and education about wildlife. In addition, this zoo is also a place for family recreation with beautiful gardens and green open spaces. By combining conservation, education, and recreation, Ragunan Zoo provides a valuable experience for visitors.</p>
          </div>
          <section className='w-full justify-between items-center flex-col xl:flex xl:flex-row-reverse m-auto mt-20'>
            <div className="overflow-hidden xl:w-[50rem]">
              <img src={img7} alt="" />
            </div>
            <div className="p-5 text-[60px] xl:text-[150px] m-auto justify-center items-center relative text-center font-Montserrat w-[50vh] font-bold uppercase">
              <Fade top duration={1500}>
                <h3>2.289</h3>
                <h4 className='xl:text-5xl text-[30px]'>Species</h4>
              </Fade>
            </div>
          </section>
        </Fade>
      </section>

      <section className="w-full relative" >
        <div className=" h-[70vh] bg-cover bg-no-repeat bg-center bg-fixed" style={{ backgroundImage: `url(${img2})`}}>
        </div>
      </section>
  </section>
);

Jaksel.propTypes = {};

Jaksel.defaultProps = {};

export default Jaksel;
