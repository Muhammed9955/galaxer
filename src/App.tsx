import "./App.css";
import Card from "./components/Card/Card.component";
import Nav from "./components/Nav/Nav.componen";
import Platfroms from "./components/Platforms/Platforms.component";
import UniverseAndUpdates from "./components/UniverseAndUpdates/UniverseAndUpdates.component";
import Welcome from "./components/Welcome_to_Galaxer/Welcome_to_Galaxer.component";
import { cardsArr } from "./data";
import cooltext3 from "./images/cooltext3.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import Footer from "./components/Footer/Footer.component";
import SliderItem from "./components/SliderItem/SliderItem.component";
import screenshot1 from "./images/screenshot1.png";
import char1 from "./images/char1.png";
import SliderCard from "./components/SliderCard/SliderCard.component";
import MenuAnimation from "./components/MenuAnimation/MenuAnimation";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

function App() {
  const BannerItems = Array(3)
    .fill(3)
    .map((i, n) => (
      <div className="BannerItems_style" key={n}>
        <div className="banner-details">
          <div className="banner-inner-head">
            <div className="banner-num">02</div>
            <h2>
              NFT stuff <br />
              In/out Game staking
            </h2>
          </div>
          <p>
            only taken address:
            <br />
            0x54sd65sa68fasd4adsadad5646asd
          </p>
          <button>Read Whitepaper</button>
        </div>
      </div>
    ));
  const INGAME_SCREENSHOTSArr = Array(30)
    .fill(30)
    .map((i, n) => (
      <img
        key={n}
        src={screenshot1}
        alt="screenshot1"
        className="inGame_screenShots__item"
      />
    ));
  const ourBrainArr = Array(30)
    .fill(30)
    .map((i, n) => (
      <div style={{ position: "absolute", width: "100vw" }}>
        <img
          key={n}
          src={char1}
          alt="screenshot1"
          className="ourbrain_screenShots__item"
        />
        <p>ANGELO R, FOUNDER AND CEO</p>
      </div>
    ));
  const sliderCards = Array(10)
    .fill(10)
    .map((i, n) => <SliderCard key={n} />);
  return (
    <div style={{ background: "black" }}>
      <Nav />
      <SliderItem
        title=""
        sliderItems={BannerItems}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
      />
      <div className="cards_contianer">
        {cardsArr.map((i) => (
          <Card title={i.title} pArr={i.pArr} Icon={i.icon} />
        ))}
      </div>

      <div className="App">
        <Welcome />
        <Platfroms />
        {/* <div style={{ width: "100vw", margin: "auto", textAlign: "start" }}> */}
        <SliderItem
          title=""
          sliderItems={sliderCards}
          slidesToShow={
            window.innerWidth > 1500 ? 3 : window.innerWidth > 1200 ? 2 : 1
          }
          slidesToScroll={3}
          arrows={true}
        />
        {/* </div> */}
        <div className="">
          <UniverseAndUpdates />
          <br />
          <br />
          <br />
        </div>

        <SliderItem
          title="IN-GAME EXPERIENCE SCREENSHOTS"
          sliderItems={INGAME_SCREENSHOTSArr}
          slidesToShow={
            window.innerWidth > 1500 ? 3 : window.innerWidth > 1200 ? 2 : 1
          }
          arrows={true}
          slidesToScroll={3}
        />
        <br />
        <SliderItem
          title="MEET OUR BRAIN"
          sliderItems={ourBrainArr}
          slidesToShow={
            window.innerWidth > 1500 ? 4 : window.innerWidth > 1200 ? 3 : 1
          }
          arrows={true}
          slidesToScroll={1}
        />
        <br />
        <div className="cooltext3">
          <hr />
          <img src={cooltext3} alt="cooltext3" />
          <hr />
        </div>
        <div className="bottom_icons">
          <AiOutlineTwitter className="bottom_icon" />
          <FaTelegramPlane className="bottom_icon" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
