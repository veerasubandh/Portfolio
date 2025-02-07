import React from "react";
import "./Skills.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Skills = () => {
  return (
    <div id="skills" className="skill">
      <div className="skill-title">
        <h1>SKILLS</h1>
        <img src={theme_pattern} alt="Decorative Pattern" />
      </div>
      <div className="about-skills">
        <div className="about-skill">
          <p>Programming Languages: C++, Java, JavaScript</p>
          <hr />
        </div>
        <div className="about-skill">
          <p>
            Web Technologies: HTML, CSS, React.js, Node.js, Express.js,
            Bootstrap, Tailwind CSS
          </p>
          <hr />
        </div>
        <div className="about-skill">
          <p>Database Systems: MongoDB, MySQL</p>
          <hr />
        </div>
        <div className="about-skill">
          <p>
            Developer Tools: Git, GitHub, VS Code, IntelliJ IDEA, Microsoft
            Office
          </p>
          <hr />
        </div>
        <div className="about-skill">
          <p>Core CS Fundamentals: OOPs, DSA, Problem-Solving, DBMS, OS</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Skills;
