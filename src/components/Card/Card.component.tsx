import "./card.styles.css";
interface Props {
  Icon: any;
  title: string;
  pArr: string[];
}

const Card: React.FC<Props> = ({ Icon, title, pArr }) => {
  return (
    <div className="card">
      <div>
        {/* <AiOutlineStar className="card_icon" /> */}
        {<Icon className="card_icon" />}
      </div>
      <h1>{title} </h1>
      {pArr?.map((i) => (
        <p className="card_p">{i} </p>
      ))}{" "}
    </div>
  );
};
export default Card;
