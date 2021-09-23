import "./UniverseAndUpdates.styles.css";

interface Props {}

const UniverseAndUpdates: React.FC<Props> = () => {
  return (
    <div className="uni">
      <div className="uni_decoration"></div>
      <div className="uni_body">
        <h1 className="uni_title">Universe & updates</h1>
        <p className="uni_p">
          Galaxer will gradually evolve into a community-owned Decentralized
          Organization
        </p>
        <p className="uni_p">
          This process occurs as GLX is distributed among players and stakers.
        </p>
        <p className="uni_p">
          The Galaxer dev team will be able to vote with the locked Play to Earn
          and Staking rewards allocations. This will prevent hostile actors from
          disrupting the ecosystem during the early and crucial phases of
          development.{" "}
        </p>
        <div className="uni_btn">Read Whitepaper</div>
      </div>
    </div>
  );
};
export default UniverseAndUpdates;
