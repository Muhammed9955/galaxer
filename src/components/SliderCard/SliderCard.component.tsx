import "./sliderCard.styles.css";
import bannerImg from "../../images/bannerImg.jpg";

interface Props {}

const SliderCard: React.FC<Props> = () => {
  return (
    <div className="sliderCard">
      <div className="sliderCard_top">
        <img src={bannerImg} alt="" style={{ width: "100%", height: "100%" }} />
        <div className="sliderCard_top__title">
          <p className="sliderCard_top__p"> City of Dahin - Battle map </p>
        </div>
      </div>
      <div className="sliderCard_bottom">
        <div className="sliderCard_bottom__left">
          <div style={{ marginRight: "2rem" }}>
            <p className="p_top">125 Groups</p>
            <p className="p_bottom">500 players</p>
          </div>
          <div className="">
            <p className="p_top">Prize Pool</p>
            <p className="p_bottom">20 ETH</p>
          </div>
        </div>
        <p className="p_time">Nov.01.2021 - 12:35 pm</p>
      </div>
    </div>
  );
};
export default SliderCard;
