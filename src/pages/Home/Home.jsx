import React from "react"
import "./Home.css"
import Navbar from "../../components/Navbar/Navbar"
import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import TitileCards from "../../components/TitileCards/TitileCards"
import Footer from "../../components/Footer/Footer"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          {/* <p>
            This “Aladdin” retains the memorable musical set pieces from the
            original: “Friend Like Me,” “Prince Ali” and the Oscar-winning “A
            Whole New World,” albeit with a couple of Bollywood and old-school
            Will Smith hip-hop flourishes.
          </p> */}
          <div className="hero-btns">
          <button className="btn">
            <img src={play_icon} alt="" />
            Play
          </button>
          <button className="btn dark-btn">
            <img src={info_icon} alt="" />
            More Info
          </button>
        </div>
        <TitileCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitileCards titile={"Blockbuster Movies"}/>
      <TitileCards titile={"Only on Netflix"}/>
      <TitileCards titile={"Upcoming"}/>
      <TitileCards titile={"Top Pics for You"}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
