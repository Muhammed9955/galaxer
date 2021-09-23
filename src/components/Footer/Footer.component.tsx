import "./footer.styles.css";
interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <div className="footer">
      <div className="footer_body">
        <p>
          {" "}
          <strong>Galaxer.io</strong>{" "}
        </p>
        <p>
          XH3G Los Angeles, California, United States <br />
          <strong> Open</strong> 9:30 AM 5:30PM
        </p>
        <p>Email:Press@galaxer.io</p>
        <br />
        <hr className="footer_hr" />
        <p>
          © 2021, GALAXER LTD All Rights Reserved in Los Angeles, CALIFORNIA.{" "}
        </p>
      </div>
    </div>
  );
};
export default Footer;
