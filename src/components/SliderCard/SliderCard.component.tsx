import "./sliderCard.styles.css";

interface Props {}

const SliderCard: React.FC<Props> = () => {
  return (
    <div className="sliderCard">
      <div className="sliderCard_top">
        <div className="sliderCard_top__title">
          <p className="sliderCard_top__p"> City of Dahin - Battle map </p>
        </div>
      </div>
      <div className="sliderCard_bottom">
        <div className="">
          <p className="p_top">125 Groups</p>
          <p className="p_bottom">500 players</p>
        </div>
        <div className="">
          <p className="p_top">Prize Pool</p>
          <p className="p_bottom">20 ETH</p>
        </div>
        <p>Nov.01.2021 - 12:35 pm</p>
      </div>
    </div>
  );
};
export default SliderCard;
