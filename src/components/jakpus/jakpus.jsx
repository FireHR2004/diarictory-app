import React from 'react';
import PropTypes from 'prop-types';
import styles from './jakpus.module.css'; 
import imageHeader from './assets/1.jpg';
import Fade from 'react-reveal/Fade';
import { Slide } from 'react-reveal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from './assets/2.jpg';
import img2 from './assets/2.1.jpg';
import img3 from './assets/3.webp';
import img4 from './assets/4.png';
import img5 from './assets/5.jpg';
import img6 from './assets/6.jpg';
import slide1 from './assets/slide1.jpg';
import slide2 from './assets/slide2.jpg';
import slide3 from './assets/slide3.jpg';
import slide4 from './assets/slide4.jpg';
import slide5 from './assets/slide5.jpg';

const Jakpus = () => {

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
    <section className='font-Montserrat'>
        {/* header */}
        <section className="w-full h-[100vh] bg-cover bg-no-repeat bg-center bg-fixed bg-opacity-60"style={{ backgroundImage: `url(${imageHeader})`}}>
          <div className="relative" >
            {/* <img src={imageHeader} className="w-full h-[750px] object-cover mix-blend-overlay" alt="Image" /> */}
              <Fade bottom duration={1500}>
                <h2 className="text-[50px] md:text-[80px] lg:text-[80px] xl:text-[100px] text-white font-bold tracking-widest uppercase text-center pt-[35vh]" style={{textShadow: '4px 4px 2px rgba(0,0,0,0.6)' }}>
                  The Heart of Jakarta
                </h2>
              </Fade>
          </div>
          </section>
        {/* header */}

        <section className='w-full justify-between items-center flex-col-reverse xl:flex xl:flex-row-reverse m-auto'>
          <div className="overflow-hidden xl:w-[350rem]">
            <img src={img5} alt="" />
          </div>
          <div className="p-5 text-[15px] xl:text-[25px] m-auto justify-center items-center relative xl:mx-44 text-justify font-Poppins">
            <Fade left duration={1500}>
              <h3 className="font-bold text-6xl text-Montserrat uppercase py-10">Central Jakarta</h3>
              <p>Central Jakarta has a significant role in various aspects of life in Jakarta. As the center of government, this region is the center of administration and government activities in Indonesia. As a business and trade center, Central Jakarta is an important area for companies, banks, and shopping centers. The existence of a rich cultural and historical heritage provides added value as a tourist and educational destination. As an education center, Central Jakarta provides a variety of leading educational institutions. In addition, as a center for cultural activities and entertainment, this area offers a variety of performing arts buildings, art galleries, and nightlife centers. Thus, Central Jakarta has an important role in social, economic, cultural, and educational development and life in the capital city of Indonesia.</p>
            </Fade>
          </div>
        </section>

        <section className='m-auto justify-center items-center w-full pt-32 bg-slate-950 text-white'>
          <Fade top duration={2500}>
            <div className="p-5 font-bold uppercase text-[35px] text-center xl:text-7xl">
              <h1>National Monument</h1>
            </div>
          </Fade>
          <section className="w-full h-[100vh] bg-cover bg-no-repeat bg-bottom bg-fixed mt-40"style={{ backgroundImage: `url(${img1})`}}>
            <div className="relative " ></div>
          </section>
        </section>

        <section className='w-full justify-between items-center flex-col xl:flex xl:flex-row m-auto bg-slate-950 text-white'>
          <div className="overflow-hidden xl:w-[450rem]">
            <img src={img2} alt="" />
          </div>
          <div className="p-5 text-[15px] xl:text-[25px] m-auto justify-center items-center relative text-justify font-Poppins">
            <Fade top duration={1500}>
              <p>The National Monument (Monas), located in Central Jakarta, is an icon and symbol of Indonesia's pride. Monas symbolizes the spirit of struggle and independence of the Indonesian people. As a historic site, Monas is a popular tourist destination and a center for national commemorations on important days such as Indonesia's Independence Day. By offering beautiful views from its peak, a museum displaying artifacts and information about Indonesian history, and beautiful gardens, Monas is an important place for Jakartans and visitors to learn about and appreciate the nation's struggle and respect national values.</p>
            </Fade>
          </div>
        </section>


        <section className='justify-center items-center pt-[150px] font-Poppins m-auto overflow-hidden mb-10 text-white bg-slate-950'>
          <Fade bottom duration={2500}>
            <div className="p-5 font-bold uppercase text-[35px] text-center xl:text-7xl overflow-hidden m-auto">
              <h1>Historic place in Central Jakarta</h1>
            </div>
            <Slide>
              <Slider {...settings}>
                <div className='xl:p-3 my-10 shadow-xl flex flex-col items-center mx-[5px] justify-center overflow-hidden m-auto'>
                  <div className='overflow-hidden xl:w-[45vh] xl:h-[45vh] xl:m-auto p-[10px] h-[250px]'>
                    <img src={slide1} alt="North Jakarta" />
                  </div>
                  <div className='pt-5 text-center text-[20px] uppercase font-semibold white'>
                    <h1>Istiqlal Mosque</h1>
                  </div>
                </div>
                <div className='xl:p-3 my-10 shadow-xl flex flex-col items-center mx-[5px] justify-center overflow-hidden m-auto'>
                  <div className='overflow-hidden xl:w-[45vh] xl:h-[45vh] xl:m-auto p-[10px] h-[250px]'>
                    <img src={slide2} alt="North Jakarta" />
                  </div>
                  <div className='pt-5 text-center text-[20px] uppercase font-semibold white'>
                    <h1>Katedral Church</h1>
                  </div>
                </div>
                <div className='xl:p-3 my-10 shadow-xl flex flex-col items-center mx-[5px] justify-center overflow-hidden m-auto'>
                  <div className='overflow-hidden xl:w-[45vh] xl:h-[45vh] xl:m-auto p-[10px] h-[250px]'>
                    <img src={slide3} alt="North Jakarta" />
                  </div>
                  <div className='pt-5 text-center text-[20px] uppercase font-semibold white'>
                    <h1>National Museum</h1>
                  </div>
                </div>
                <div className='xl:p-3 my-10 shadow-xl flex flex-col items-center mx-[5px] justify-center overflow-hidden m-auto'>
                  <div className='overflow-hidden xl:w-[45vh] xl:h-[45vh] xl:m-auto p-[10px] h-[250px]'>
                    <img src={slide4} alt="North Jakarta" />
                  </div>
                  <div className='pt-5 text-center text-[20px] uppercase font-semibold white'>
                    <h1>Jakarta Arts Building</h1>
                  </div>
                </div>
                <div className='xl:p-3 my-10 shadow-xl flex flex-col items-center mx-[5px] justify-center overflow-hidden m-auto'>
                  <div className='overflow-hidden xl:w-[45vh] xl:h-[45vh] xl:m-auto p-[10px] h-[250px]'>
                    <img src={slide5} alt="North Jakarta" />
                  </div>
                  <div className='pt-5 text-center text-[20px] uppercase font-semibold white'>
                    <h1>Inscription Park</h1>
                  </div>
                </div>
              </Slider>
            </Slide>
          </Fade>
        </section>

        <section className='m-auto justify-center items-center w-full pt-10'>
          <Fade top duration={2500}>
            <div className="p-20 font-bold uppercase text-[35px] text-center xl:text-7xl">
              <h1>The Legendary Italian Ice cream</h1>
            </div>
          </Fade>
          <Fade left duration={2500}>
            <div className="overflow-hidden w-[23rem] xl:w-[60rem] xl:m-auto items-center justify-center relative">
              <img src={img3} alt="" className='xl:w-[75rem]'/>
            </div>
          </Fade>
          <Fade left duration={2500}>
            <div className="p-5 text-[15px] xl:text-[25px] m-auto justify-center items-center relative xl:mx-44 text-justify font-Poppins">
                <p>Ragusa Italian Ice Cream is a well-known ice cream brand with a branch in Central Jakarta. Their ice creams are known for their premium quality, authentic taste, and various delicious flavors. Ragusa uses high-quality ingredients and traditional manufacturing methods to produce rich, creamy, and delicious ice cream. Their shop has become a favorite destination in Central Jakarta for ice cream lovers looking for a special experience.</p>
            </div>
          </Fade>
          <Fade left duration={2500}>
            <section className='w-full justify-between items-center flex-col xl:flex xl:flex-row m-auto container'>
              <div className="overflow-hidden">
                <img src={img4} alt="" />
              </div>
              <div className="text-[15px] xl:text-[20px] m-auto justify-center items-center relative text-center font-Poppins xl:text-left pt -20">
                  <h3 className="font-bold text-4xl xl:text-6xl text-Montserrat capitalize py-10">Hj. Sias Mawarni</h3>
                  <h5 className="text-xl xl:text-4xl text-Montserrat uppercase">The Owner of Ragusa</h5>
              </div>
            </section>
          </Fade>
        </section>

        <section className="w-full" >
          <div className="relative h-[70vh] bg-cover bg-no-repeat bg-top bg-fixed py-[50px" style={{ backgroundImage: `url(${img6})`}}></div>
        </section>

      </section>
  );
}

Jakpus.propTypes = {};

Jakpus.defaultProps = {};

export default Jakpus;
