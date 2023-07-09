import React from 'react';
import PropTypes from 'prop-types';
import styles from './jakbar.module.css';
import img from './assets/1.jpg';
import img1 from './assets/2.jpg';
import img2 from './assets/3.jpg';
import img3 from './assets/4.jpg';
import img4 from './assets/5.jpg';
import img5 from './assets/6.png';
import img6 from './assets/7.jpg';
import Fade from 'react-reveal/Fade';

const Jakbar = () => {
  return(
    <section className='font-[Montserrat]'>
      {/* header */}
      <section className='text-[30px] m-auto justify-center items-center w-full xl:p-[120px] pb-10 bg-slate-950 text-white'>
        <Fade left duration={2500}>
          <div className="font-bold p-5 xl:text-left xl:text-6xl m-auto">
            <h1>West Jakarta</h1>
          </div>
          <div className="p-5 text-[15px] xl:text-[20px] m-auto justify-center items-center relative text-justify font-Poppins">
            <p>West Jakarta is an administrative area in Jakarta that is located in the western part of the city. This region is the center of government, business, and trade activities. In West Jakarta, there are various modern shopping centers, tourist attractions such as the Fatahillah Museum and Taman Mini Indonesia Indah, as well as luxury housing complexes such as Pantai Indah Kapuk (PIK) and Gading Serpong. West Jakarta also has a bustling nightlife with nightclubs, restaurants, and entertainment venues. This area reflects the diversity of cultures and is one of the important centers in Jakarta.</p>
          </div>
        </Fade>
      </section>
      {/* header */}

      <section className="w-full bg-slate-950 text-white" >
        <div className="relative h-[70vh] bg-cover bg-no-repeat bg-center bg-fixed py-[50px" style={{ backgroundImage: `url(${img})`}}></div>
      </section>

      <section className='w-full justify-between items-center flex-col xl:flex xl:flex-row m-auto bg-slate-950 text-white'>
        <div className="overflow-hidden xl:w-[450rem]">
          <img src={img1} alt="" />
        </div>
        <div className="p-5 text-[15px] xl:text-[25px] m-auto justify-center items-center relative text-justify font-Poppins xl:px-20">
          <Fade bottom duration={1500}>
            <h3 className="font-bold text-6xl text-Montserrat uppercase py-10">Kota Tua</h3>
            <p className='font-Poppins'>Kota Tua, in West Jakarta, is a historic area known as Batavia during the Dutch colonial period. This area has Dutch colonial buildings such as the Fatahillah Museum and the Zion Church. Kota Tua is also a center for commerce and ethnic communities that have contributed to the development of Jakarta. Although neglected, the area has been restored and is a popular tourist destination with museums, cafes, and souvenir shops. Kota Tua is a witness to the development of Jakarta's history and the beauty of Dutch architecture that is still preserved.</p>
          </Fade>
        </div>
      </section>

      <section className="w-full h-[100vh] bg-cover bg-no-repeat bg-center"style={{ backgroundImage: `url(${img2})`}}>
        <div className={`shadow-inner w-full h-[100vh] absolute ${styles.eblur}`}></div>
        <div className="relative " >
          {/* <img src={imageHeader} className="w-full h-[750px] object-cover mix-blend-overlay" alt="Image" /> */}
            <Fade bottom duration={1500}>
              <h2 className="text-[40px] md:text-[80px] lg:text-[80px] xl:text-[100px] text-white font-bold tracking-widest uppercase text-center pt-[35vh]" style={{textShadow: '4px 4px 2px rgba(0,0,0,0.6)' }}>
                Jakarta's Chinatown
              </h2>
            </Fade>
        </div>
      </section>

      <section className='w-full justify-between items-center flex-col-reverse xl:flex xl:flex-row-reverse m-auto my-10'>
        <div className="overflow-hidden xl:w-[350rem]">
          <img src={img3} alt="" />
        </div>
        <div className="p-5 text-[15px] xl:text-[25px] m-auto justify-center items-center relative xl:mx-44 text-justify font-Poppins">
          <Fade left duration={1500}>
            <p>West Jakarta is nicknamed the "Chinatown of Jakarta" due to the presence of a significant ethnic Chinese population in the area. Since the Dutch colonial era, many ethnic Chinese communities have settled in West Jakarta, especially in the Glodok area. Glodok is considered the commercial and cultural center of Chinese in Jakarta, with shops, markets, temples, and restaurants selling goods and food typical of Chinese.</p>
          </Fade>
        </div>
      </section>

      <section className='m-auto justify-center items-center w-full pt-56'>
        <Fade top duration={2500}>
          <div className="p-20 font-bold uppercase text-[35px] text-center xl:text-7xl">
            <h1>The Legendary Coffee Shop</h1>
          </div>
        </Fade>
        <Fade left duration={2500}>
          <div className="overflow-hidden w-[23rem] xl:w-[60rem] xl:m-auto items-center justify-center relative">
            <img src={img4} alt="" className='xl:w-[75rem]'/>
          </div>
        </Fade>
        <Fade left duration={2500}>
          <div className="p-5 text-[15px] xl:text-[25px] m-auto justify-center items-center relative xl:mx-44 text-justify font-Poppins mt-10">
              <p>Kopi Tak Kie is a legendary coffee shop in Glodok, West Jakarta. This shop has been operating since 1927 and is famous for serving traditional coffee with a distinctive taste. Kopi Tak Kie offers an authentic retro atmosphere and is a favorite destination for coffee lovers who want to experience coffee from the past. This coffee shop also offers snacks and traditional snacks.</p>
          </div>
        </Fade>
        <Fade left duration={2500}>
          <section className='w-full justify-between items-center flex-col xl:flex xl:flex-row m-auto container'>
            <div className="overflow-hidden">
              <img src={img5} alt="" />
            </div>
            <div className="text-[15px] xl:text-[20px] m-auto justify-center items-center relative text-center font-Poppins xl:text-left pt -20">
                <h3 className="font-bold text-4xl xl:text-6xl text-Montserrat uppercase">Latief Yulus</h3>
                <h5 className="text-xl xl:text-4xl text-Montserrat uppercase">The Owner of Kopi Tak Kie</h5>
            </div>
          </section>
        </Fade>
      </section>

      <section className="w-full" >
        <div className="relative h-[70vh] bg-cover bg-no-repeat bg-top bg-fixed py-[50px" style={{ backgroundImage: `url(${img6})`}}></div>
      </section>

  </section>
);}

Jakbar.propTypes = {};

Jakbar.defaultProps = {};

export default Jakbar;
