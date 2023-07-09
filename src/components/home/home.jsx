import React from 'react';
import PropTypes from 'prop-types';
import './home.module.css';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import Fade from 'react-reveal/Fade';
import imgchat1 from './assets/2.1.jpg';
import imgchat2 from './assets/2.2.jpg';
import imgchat3 from './assets/2.3.jpg';
import imgchat4 from './assets/2.4.jpg';
import imgchat5 from './assets/2.5.jpg';
import imgchat6 from './assets/2.6.jpg';

const Home = ({ url, image, title }) => {
  
  let links = [
    { url: "/north-jakarta", image: "./assets/2.1.jpg", title: "north jakarta" },
    { url: "/west-jakarta", image: "./assets/2.2.jpg", title: "west jakarta" },
    { url: "/south-jakarta", image: "./assets/2.3.jpg", title: "south jakarta" },
    { url: "/central-jakarta", image: "./assets/2.4.jpg", title: "central jakarta" },
    { url: "/east-jakarta", image: "./assets/2.5.jpg", title: "east jakarta" },
    { url: "/pulau-seribu", image: "./assets/2.6.jpg", title: "kepulauan seribu" }
  ];
  return(
    <section>
      {/* header */}
      <section className="w-full font-Montserrat">
          <div className="relative h-[100vh] bg-cover bg-no-repeat bg-top p-[100px] " style={{ backgroundImage: `url(${img1})` }}>
              <Fade bottom duration={1500}>
                <div className="w-full mx-auto sm:px-10 md:w-[120vh] md:p-[10px]">
                  <h2 className="text-[30px] text-center md:text-[80px] md:text-center lg:text-[80px] xl:text-[75px] xl:text-left text-white font-bold tracking-widest uppercase pt-[20vh] bg" style={{textShadow: '4px 4px 2px rgba(0,0,0,0.6)' }}>
                    Let Jakarta's Charm Captivate You
                  </h2>
                </div>
              </Fade>
          </div>
        </section>
      {/* header */}
     
      <Fade bottom duration={2000}>
        <section className='m-auto items-center flex flex-col font-Montserrat w-[50%] p-3 pt-[150px] container'>
          <div className='text-center font-bold items-center justify-center p-3'>
            <h1 className='text-[45px]'>JAKARTA</h1>
          </div>
          <div className='text-center items-center justify-center text-[20px] md:text-[15px] lg:text-[16px] xl:text-[20px] text-sm md:text-base font-Poppins'>
            <p>Jakarta, the capital city of Indonesia, is a city rich in historical attractions, delicious culinary delights, exciting entertainment, art, and much more. With its cultural diversity and historical significance, Jakarta offers fascinating and unique experiences for visitors.</p>
          </div>
        </section>

        <section className="w-full flex justify-center items-center p-3 pt-16 md:pt-24 lg:pt-32 xl:pt-40 font-Montserrat container mx-auto">
          <div className="flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="w-full px-5 order-2 md:order-1 p-4">
              <img src={img2} className="w-full" alt="Image" />
            </div>
            <div className="w-full md:w-1/2 px-5 order-1 md:order-2 p-4">
              <div className="text-justify md:text-justify md:p-5 font-Poppins">
                <p className="text-[20px] md:text-[15px] lg:text-[16px] xl:text-[20px] text-sm md:text-base">Jakarta offers a range of historical tourist destinations, including Kota Tua, the National Monument (Monas), Istana Merdeka, and the National Museum. These places provide insights into Jakarta's rich cultural and historical heritage, allowing visitors to delve into the city's past and learn more about Indonesian history and culture.</p>
              </div>
            </div>
          </div>
        </section>

        <section className='flex flex-col justify-center items-center pt-[150px] font-Poppins container m-auto overflow-hidden'>
          <div className='m-auto pb-56'>
            <div className='p-10 justify-center flex text-center font-bold text-[45px]'>
              <h1 className='tracking-[10px] uppercase'>Regency</h1>
            </div>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 text-center items-center justify-items-center p-10'>
              {/* {[
                ['../jakut/jakut', './assets/2.1.jpg', 'North Jakarta']
              ]}.map(([url, image, title]))
              <a href={url}>
                <div className='p-3 mx-5 shadow-lg flex flex-col items-center justify-center hover:mb-10 duration-[0.5s]'>
                  <div className='overflow-hidden w-96 h-52'>
                    <img src={image} alt={title} />
                  </div>
                  <div className='pt-5 text-center text-[20px] uppercase font-semibold'>
                    <h1>{title}</h1>
                  </div>
                </div>
              </a>               */}
              {links.map((link) => (
                <a key={link.title} href={link.url}>
                  <div className='p-3 mx-5 shadow-lg flex flex-col items-center justify-center hover:mb-10 duration-[0.5s]'>
                    <div className='overflow-hidden w-96 h-52'>
                      <img src={require(`${link.image}`)} alt={link.title} />
                    </div>
                    <div className='pt-5 text-center text-[20px] uppercase font-semibold'>
                      <h1>{link.title}</h1>
                    </div>
                  </div>
                </a>
              ))}
              {/* <a href="/north-jakarta">
                <div className='p-3 mx-5 shadow-lg flex flex-col items-center justify-center hover:mb-10 duration-[0.5s]'>
                  <div className='overflow-hidden w-96 h-52'>
                    <img src={imgchat1} alt="North Jakarta" />
                  </div>
                  <div className='pt-5 text-center text-[20px] uppercase font-semibold'>
                    <h1>North Jakarta</h1>
                  </div>
                </div>
              </a>
              <a href="/west-jakarta">
                <div className='p-3 mx-5 shadow-lg flex flex-col items-center justify-center hover:mb-10 duration-[0.5s]'>
                  <div className='overflow-hidden w-96 h-52'>
                    <img src={imgchat2} alt="North Jakarta" />
                  </div>
                  <div className='pt-5 text-center text-[20px] uppercase font-semibold'>
                    <h1>West Jakarta</h1>
                  </div>
                </div>
              </a>
              <a href="/south-jakarta">
                <div className='p-3 mx-5 shadow-lg flex flex-col items-center justify-center hover:mb-10 duration-[0.5s]'>
                  <div className='overflow-hidden w-96 h-52'>
                    <img src={imgchat3} alt="North Jakarta" />
                  </div>
                  <div className='pt-5 text-center text-[20px] uppercase font-semibold'>
                    <h1>south Jakarta</h1>
                  </div>
                </div>
              </a>
              <a href="/central-jakarta">
                <div className='p-3 mx-5 shadow-lg flex flex-col items-center justify-center hover:mb-10 duration-[0.5s]'>
                  <div className='overflow-hidden w-96 h-52'>
                    <img src={imgchat4} alt="North Jakarta" />
                  </div>
                  <div className='pt-5 text-center text-[20px] uppercase font-semibold'>
                    <h1>Central Jakarta</h1>
                  </div>
                </div>
              </a>
              <a href="/east-jakarta">
                <div className='p-3 mx-5 shadow-lg flex flex-col items-center justify-center hover:mb-10 duration-[0.5s]'>
                  <div className='overflow-hidden w-96 h-52'>
                    <img src={imgchat5} alt="North Jakarta" />
                  </div>
                  <div className='pt-5 text-center text-[20px] uppercase font-semibold'>
                    <h1>East Jakarta</h1>
                  </div>
                </div>
              </a>
              <a href="/pulau-seribu">
                <div className='p-3 mx-5 shadow-lg flex flex-col items-center justify-center hover:mb-10 duration-[0.5s]'>
                  <div className='overflow-hidden w-96 h-52'>
                    <img src={imgchat6} alt="North Jakarta" />
                  </div>
                  <div className='pt-5 text-center text-[20px] uppercase font-semibold'>
                    <h1>Pulau Seribu</h1>
                  </div>
                </div>
              </a> */}
            </div>      
          </div>
        </section>
      </Fade>
    </section>
  );
}

// Home.propTypes = {};

// Home.defaultProps = {};

export default Home;
