import ToolLibraryList from "./ToolLibraryList";
import "./digDeeperSectionStyle.css";

const DigDeeperSection = () => {
  return (
    <div className="dig-deeper-container">
      <h2>Dig deeper.</h2>
      <h4>Learn from resources across the greater Solana ecosystem.</h4>
      <ToolLibraryList />
    </div>
  );
};
export default DigDeeperSection;
