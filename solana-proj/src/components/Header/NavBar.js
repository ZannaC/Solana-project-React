import Vector from "../../assets/images/header/Vector.svg";
import Solana from "../../assets/images/header/solanaLogo.png";
import "./headerStyle.css";

const bar = [
  { theme: "Learn", id: 1 },
  { theme: "Build", id: 2 },
  { theme: "Network", id: 3 },
  { theme: "Community", id: 4 },
];

function NavBar() {
  return (
    <div className="header-container">
      <div>
        <img className="solana" src={Solana} alt="Solana logo" />
      </div>
      <div className="navigation-bar">
        {bar.map((data, id) => (
          <a href="https://www.w3schools.com/html/html_attributes.asp">
            {data.theme}
            <img className="vector" src={Vector} alt="Vector" />
          </a>
        ))}
      </div>
    </div>
  );
}
export default NavBar;
