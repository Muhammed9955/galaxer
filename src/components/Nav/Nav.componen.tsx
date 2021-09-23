import { useEffect, useState } from "react";
import "./nav.styles.css";
import logo_token from "../../images/logo_token.png";

interface Props {}

const Nav: React.FC<Props> = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_scroll"}`}>
      <div className="nav_body">
        <img src={logo_token} alt="logo_token" className="logo_token" />
        <div className="nav_items">
          <p className="nav_item">Home</p>
          <p className="nav_item">marketPlace</p>
          <p className="nav_item">white paper</p>
          <p className="nav_item">play now </p>
        </div>
      </div>
    </div>
  );
};
export default Nav;
