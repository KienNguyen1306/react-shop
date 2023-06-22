import Acticletop from "../../components/Acticletop";
import "./About.css";
import AboutBody from "./AboutBody";

function About() {
  return (
    <div className="about">
      <div className="body">
        <Acticletop title="Giới Thiệu" link="/about" />
        <AboutBody />
      </div>
    </div>
  );
}

export default About;
