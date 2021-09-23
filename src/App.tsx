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
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

function App() {
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
      <div>
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
          slidesToShow={3}
          slidesToScroll={3}
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
          slidesToShow={4}
          slidesToScroll={4}
        />
        <SliderItem
          title="MEET OUR BRAIN"
          sliderItems={ourBrainArr}
          slidesToShow={4}
          slidesToScroll={4}
        />
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
