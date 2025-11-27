import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      {/* <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div> */}
      <div className="software-skills-main-div skills-categories">
        {Object.entries(skillsSection.softwareSkills).map(([category, techs]) => (
          <div className="skill-block" key={category}>
            <h3>{category}</h3>
            <div className="skill-icons">
              {techs.map((tech) => (
                <div className="skill-icon" key={tech.skillName}>
                  {tech.type === "font" ? (
                    <i className={tech.fontAwesomeClassname} style={{ fontSize: "28px", width: "28px", height: "28px", textAlign: "center" }}></i>
                  ) : (
                    <img src={tech.svg} alt={tech.skillName} style={{ width: "28px", height: "28px", objectFit: "contain" }} />
                  )}
                  <span>{tech.skillName}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
