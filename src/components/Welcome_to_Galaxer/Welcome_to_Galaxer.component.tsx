import "./styles.css";
interface Props {}

const Welcome: React.FC<Props> = () => {
  return (
    <div className="welcome-msg">
      <h1>Welcome_to_Galaxer</h1>
      <p>
        Galaxer is a modern open world game based on Ethereum network that
        allows players to act out their own story in whatever fashion they want,
        affecting how the fictional planet of Galaxer and its inhabitants, both
        actual players and NPCs, operate.
      </p>
      <p>
        Players who jump into one of the user-created RP servers becomes even
        more immersed in the game – as they take on the form of a normal NPC,
        which can be customised in a number of different ways.
      </p>
      <p>
        The game universe connects to the GLX native token as the in-game
        currency, allowing you to farm and stake tokens to earn in – and out-
        game rewards.
      </p>
      <p>
        Every piece of stuff and weapon will be a unique NFT with different
        rarity (common, rare, unique, legendary) tradable via a unique in (and
        out) game store.
      </p>
      <p>Token adress :</p>
      <p>0x75d0fb8db2f6485fdfe6ff58321e91effae759a8</p>
      <p className="uni_btn" style={{ width: "100px" }}>
        Read more
      </p>
    </div>
  );
};
export default Welcome;
