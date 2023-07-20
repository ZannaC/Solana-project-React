import Arrow from "../../../assets/images/main/development-course-section/development-arrow-image.svg";
import "./devCourseSectionStyle.css";

const ThemeBlock = (props) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${props.image})`,
  };
  return (
    <div>
      <div
        className="development-course__one-theme-block"
        style={backgroundImageStyle}
      >
        <button
          className="development-course-info__btn-chapters"
          action="https://www.w3schools.com"
          target="blank"
          type="submit"
        >
          {props.chapters}
        </button>
        <form
          className="form"
          action="https://www.w3schools.com"
          target="blank"
          type="submit"
        >
          {props.theme}
          <img
            className="development-course-info__btn-arrow"
            src={Arrow}
            alt="Arrow"
          />
        </form>
      </div>
    </div>
  );
};
export default ThemeBlock;
