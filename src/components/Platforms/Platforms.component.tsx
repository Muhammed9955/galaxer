import "./platfroms.styles.css";
import cooltext1 from "../../images/cooltext1.png";
import cooltext2 from "../../images/cooltext2.png";
import steam from "../../images/steam.jpg";
import logi from "../../images/logi.png";
import ubisoft from "../../images/ubisoft.png";
import unity from "../../images/unity.png";

interface Props {}

const Platfroms: React.FC<Props> = () => {
  return (
    <div>
      <img src={cooltext1} alt="platforms" className="cooltext1" />
      <div className="platfroms_imgs">
        <img src={steam} alt="platforms" className="platfroms_img" />
        <img src={logi} alt="platforms" className="platfroms_img" />
        <img src={ubisoft} alt="platforms" className="platfroms_img" />
        <img src={unity} alt="platforms" className="platfroms_img" />
      </div>
      <img src={cooltext2} alt="platforms" className="cooltext2" />
    </div>
  );
};
export default Platfroms;
