import Slider from "react-slick";
interface Props {
  title: any;
  sliderItems?: any;
  slidesToShow: number;
  slidesToScroll: number;
}

const SliderItem: React.FC<Props> = ({
  title,
  sliderItems,
  slidesToShow,
  slidesToScroll,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
  };

  return (
    <div>
      <h2> {title} </h2>
      <Slider {...settings}>{sliderItems}</Slider>
    </div>
  );
};
export default SliderItem;
