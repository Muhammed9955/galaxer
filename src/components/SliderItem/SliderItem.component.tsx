import Slider from "react-slick";
interface Props {
  title: any;
  sliderItems?: any;
  slidesToShow: number;
  slidesToScroll: number;
  arrows?: boolean;
}

const SliderItem: React.FC<Props> = ({
  title,
  sliderItems,
  slidesToShow,
  slidesToScroll,
  arrows,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    arrows,
  };

  return (
    <div style={{ margin: "2rem 0" }}>
      <h2 style={{ margin: "1rem 0 " }}> {title} </h2>
      <Slider {...settings}>{sliderItems}</Slider>
    </div>
  );
};
export default SliderItem;
