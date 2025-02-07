import "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/VS.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>ABOUT ME</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a Software Developer with a strong foundation in Full-Stack
              Development, MERN Stack, and Core CS Fundamentals like DSA, DBMS,
              and OS. With a keen eye for scalability and performance, I have
              built projects like Fiesta (Food Delivery App) and Serenique
              (E-commerce Platform) that enhance user experience and streamline
              online transactions.
            </p>
            <p>
              Passionate about problem-solving, I constantly explore new
              technologies to create efficient, user-centric solutions. With a
              solid understanding of React.js, Node.js , Express.js and MongoDB
              , I thrive on tackling complex challenges and delivering
              innovative web applications that meet the requirements of the
              clients.
            </p>
          </div>
        </div>
      </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>7+</h1>
            <p>CERTIFICATIONS</p>
          </div>
          <div className="about-achievement">
            <h1>3+</h1>
            <p>INTERNSHIPS</p>
          </div>
          <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS</p>
          </div>
        </div>
      </div>
    
  );
};

export default About;
