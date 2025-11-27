import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <div className="header-title">
                <h1 className="experience-heading">Experiences</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 192 7" preserveAspectRatio="none" class="dgrCFv kQiChz">
                  <path stroke-linecap="round" stroke-width="3" d="M1 3.409S50.376-.539 85 1.673c13.942.891 16.501 3.618 30.5 3.472 12.647-.133 19.355-3.662 32-3.472 11.105.168 14.5 6.596 28 3.472C189 2.02 191 3.409 191 3.409"></path>
                </svg>
              </div>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companyLogo: card.companyLogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
