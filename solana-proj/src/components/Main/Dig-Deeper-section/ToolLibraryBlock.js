import Arrow45 from "../../../assets/images/main/dig-deeper-section/arrow45.svg";
import "./digDeeperSectionStyle.css";

const ToolLibraryBlock = (props) => {
  return (
    <div className="dig-deeper__tool-library-block">
      <ul>
        <li className="dig-deeper__tool-library">TOOL / LIBRARY</li>
        <li className="dig-deeper__tool-library-theme">{props.theme}</li>
        <li className="dig-deeper-tool-library-content ">{props.content}</li>
        <li>
          <button
            className="dig-deeper-tool-library-btn"
            action="https://www.w3schools.com"
            target="blank"
            type="submit"
          >
            Learn more
            <img src={Arrow45} alt="Arrow45" />
          </button>
        </li>
      </ul>
    </div>
  );
};
export default ToolLibraryBlock;
