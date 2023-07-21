import Arrow from "../../../assets/images/main/development-course-section/development-arrow-image.svg";

import "./devCourseSectionStyle.css";

function DevCourseInfo() {
  return (
    <div className="development-course-info">
      <button
        className="development-course-info__btn-chapters custom-button-style"
        action="https://www.w3schools.com"
        target="blank"
        type="submit"
      >
        17 Chapters
      </button>
      <h2>Solana Development Course</h2>
      <h5>
        Quickstart your Solana development starting
        <br /> from nothing to complex programs.
      </h5>
      <form action="https://www.w3schools.com" target="blank" type="submit">
        <img
          className="development-course-info__btn-arrow"
          src={Arrow}
          alt="Arrow"
        />
      </form>
    </div>
  );
}
export default DevCourseInfo;
