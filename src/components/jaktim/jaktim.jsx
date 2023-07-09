import React from 'react';
import PropTypes from 'prop-types';
import styles from './jaktim.module.css';
import Fade from 'react-reveal/Fade';
import img1 from './assets/1.jpeg';
import img2 from './assets/2.jpeg';
import img3 from './assets/3.jpeg';
import img4 from './assets/4.jpeg';
import img5 from './assets/5.jpg';
import img6 from './assets/6.jpeg';
const Jaktim = () => {
  return(
  <section className='font-Montserrat'>
    {/* header */}
    <section className="w-full h-[100vh] bg-cover bg-no-repeat bg-center bg-fixed"style={{ backgroundImage: `url(${img2})`}}>
      <div className={`shadow-inner w-full h-[100vh] absolute ${styles.eblur}`}></div>
      <div className="relative " >
        {/* <img src={imageHeader} className="w-full h-[750px] object-cover mix-blend-overlay" alt="Image" /> */}
          <Fade bottom duration={1500}>
            <h2 className="text-[50px] md:text-[80px] lg:text-[80px] xl:text-[100px] text-white font-bold tracking-widest uppercase text-center pt-[35vh]" style={{textShadow: '4px 4px 2px rgba(0,0,0,0.6)' }}>
              East Jakarta
            </h2>
          </Fade>
      </div>
      </section>
    {/* header */}

    <section className='m-auto items-center flex flex-col font-Montserrat w-[50%] p-3 pt-[150px] container'>
        <div className='text-center items-center justify-center text-[20px] md:text-[15px] lg:text-[16px] xl:text-[25px] text-sm md:text-base font-Poppins'>
          <p>East Jakarta is an administrative area in Jakarta that has dense settlements, rapid urban growth, good accessibility, industrial and warehousing centers, as well as attractive tourism potential. This area has distinctive social and economic dynamics and continues to grow as an important part of the city of Jakarta as a whole.</p>
        </div>
    </section>

    <section className='w-full justify-between items-center flex-col xl:flex xl:flex-row m-auto pt-56 container'>
        <div className="overflow-hidden xl:w-[450rem]">
          <img src={img1} alt="" />
        </div>
        <div className="p-5 text-[15px] xl:text-[25px] m-auto justify-center items-center relative text-justify font-Poppins">
          <Fade top duration={1500}>
            <p className='font-Poppins'>East Jakarta is the most densely populated area in Jakarta due to significant population growth, rapid housing development, good accessibility, and the presence of important industrial and warehouse centers. These factors collectively contribute to East Jakarta's overcrowding and present challenges in infrastructure management and public services in the area.</p>
          </Fade>
        </div>
      </section>

      <section className='m-auto justify-center items-center w-full pt-56 container overflow-hidden'>
        <Fade top duration={2500}>
          <div className="p-20 font-bold uppercase text-[45px] text-center xl:text-7xl">
            <h1>Asinan Betawi</h1>
          </div>
        </Fade>
        <Fade left duration={2500}>
          <div className="overflow-hidden w-[24rem] xl:w-[60rem] xl:m-auto items-center justify-center relative">
            <img src={img5} alt="" className='xl:w-[50rem] xl:m-auto'/>
          </div>
        </Fade>
        <Fade left duration={2500}>
          <div className="p-5 text-[15px] xl:text-[25px] m-auto justify-center items-center relative xl:mx-44 text-center font-Poppins my-20">
              <p>Asinan Betawi Kamboja H. Mansyur is a famous stall or tavern in Jakarta, especially in the Rawamangun area. This stall is known for serving Asinan Betawi, a traditional dish made from a mixture of fresh vegetables such as cucumber, long beans, bean sprouts, and yam, which is drizzled with peanut sauce or spicy sour sauce. Asinan Betawi Kamboja H. Mansyur has become a popular culinary destination among locals and visitors looking for delicious traditional food. For more information on the exact location, it is advisable to seek up-to-date information through local sources such as online maps or restaurant directories.</p>
          </div>
        </Fade>
      </section>

      <section className='w-full justify-center items-center flex-col xl:flex xl:flex-row m-auto container pb-20'>
        <div className="overflow-hidden xl:w-[450rem] w-[50vh] h-[50vh] m-auto">
          <div className="mapouter">
            <div className="gmap_canvas ">
              <iframe className="gmap_iframe w-[50vh] h-[50vh]" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=700&amp;height=700&amp;hl=en&amp;q=asinan betawi h.mansyur kamboja&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
              <a href="https://thepasswordgame.com/"></a>
            </div>
          </div>
        </div>
        <div className="p-5 text-[15px] xl:text-[25px] m-auto justify-center items-center relative text-justify font-Poppins">
          <Fade top duration={1500}>
            <p className='font-Poppins'>Why is it called Asinan Betawi Kamboja? Because the location of the shop is on Jl. Taman Kamboja, this Betawi Asinan Shop is often called 'Kamboja Asinan'. For a more precise location, it is on Jl. Taman Kamboja No. 10, RT.8/RW.11, Rawamangun, Kec. Pulo Gadung.</p>
          </Fade>
        </div>
      </section>

      <section className="w-full h-[100vh] bg-cover bg-no-repeat bg-bottom"style={{ backgroundImage: `url(${img4})`}}>
        <div className={`shadow-inner w-full h-[100vh] absolute ${styles.eblur}`}></div>
        <div className="relative " >
          {/* <img src={imageHeader} className="w-full h-[750px] object-cover mix-blend-overlay" alt="Image" /> */}
            <Fade bottom duration={1500}>
              <h2 className="text-[40px] md:text-[80px] lg:text-[80px] xl:text-[100px] text-white font-bold tracking-widest uppercase text-center pt-[35vh]" style={{textShadow: '4px 4px 2px rgba(0,0,0,0.6)' }}>
                Taman Mini Indonesia Indah
              </h2>
            </Fade>
        </div>
      </section>

      <section className='m-auto justify-center items-center w-full pt-10 container overflow-hidden'>
        <Fade top duration={2500}>
          <div className="p-5 text-[15px] xl:text-[25px] m-auto justify-center items-center relative xl:mx-44 text-center font-Poppins my-20">
              <p>Taman Mini Indonesia Indah (TMII) is a cultural tourism complex featuring miniature buildings and culture from various provinces in Indonesia. The main objective is to introduce and promote Indonesia's rich culture, ethnic diversity, and natural beauty to visitors. TMII offers educational and recreational experiences with museums, art galleries, theaters, and recreational rides. This complex is a popular destination for tourists who want to learn about and appreciate Indonesia's rich culture in one central place.</p>
          </div>
        </Fade>
      </section>

      <section className='w-full justify-between items-center flex-col-reverse xl:flex xl:flex-row-reverse m-auto'>
        <div className="overflow-hidden xl:w-[350rem]">
          <img src={img3} alt="" />
        </div>
        <div className="p-5 text-[15px] xl:text-[25px] m-auto justify-center items-center relative xl:mx-44 text-justify font-Poppins">
          <Fade left duration={1500}>
            <p>Taman Mini Indonesia Indah has pavilions representing every province in Indonesia. Each pavilion displays the unique culture, traditions, and crafts of the province in question. Visitors can visit each pavilion to learn more about the cultural heritage and natural beauty of Indonesia.</p>
          </Fade>
        </div>
      </section>

      <section className="w-full" >
        <div className="relative h-[70vh] bg-cover bg-no-repeat bg-top bg-fixed py-[50px" style={{ backgroundImage: `url(${img6})`}}></div>
      </section>


  </section>
);}

Jaktim.propTypes = {};

Jaktim.defaultProps = {};

export default Jaktim;
