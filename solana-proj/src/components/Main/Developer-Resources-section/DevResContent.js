import VectorStack from "../../../assets/images/main/developer-resources-section/vectorStack.svg";
import "./devResSectionStyle.css";

function DevResContent() {
  return (
    <div className="developer-container">
      <div className="developer-content">
        <h1>
          Developer
          <br /> Resources
        </h1>
        <h4>
          A manual for joining the Solana <br />
          ecosystem. By builders for builders.
        </h4>
        <div className="developer-btn">
          <button
            className="developer-btn__build-now"
            action="https://www.w3schools.com"
            target="blank"
            type="submit"
          >
            BUILD NOW
          </button>
          <button
            className="developer-btn__stack-exchange"
            action="https://www.w3schools.com"
            target="blank"
            type="submit"
          >
            STACK EXCHANGE <img src={VectorStack} alt="VectorStack" />
          </button>
        </div>
        <h2>Get started.</h2>
        <h4 class="get-started">
          Use these Solana Foundation and community courses to begin your
          journey into Solana development.
        </h4>
      </div>
    </div>
  );
}
export default DevResContent;
