import DevCourseInfo from "./DevCourseInfo";
import ThemesList from "./ThemesList";
import "./devCourseSectionStyle.css";

const DevelopmentCourseSection = () => {
  return (
    <div className="developer-container">
      <DevCourseInfo />
      <ThemesList />
    </div>
  );
};
export default DevelopmentCourseSection;
