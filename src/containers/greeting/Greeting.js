import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import FloatingBackground from "../../components/animations/FloatingBackground";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px]" id="greeting">
        <div className="greet-main relative">
          <div className="greeting-main">
            <div className="greeting-text-div">
              <div>
                <h1
                  className={isDark ? "dark-mode greeting-text" : "greeting-text"}
                >
                  {" "}
                  {greeting.title}{" "}
                  <span className="wave-emoji">{emoji("👋")}</span>
                </h1>
                <br/>
                <div
                  className={
                    isDark
                      ? "dark-mode greeting-text-p"
                      : "greeting-text-p subTitle"
                  }
                >
                  {greeting.subTitle}
                </div>
                <div id="resume" className="empty-div"></div>
                <SocialMedia />
                <div className="button-greeting-div">
                  <Button text="Contact me" href="#contact" />
                  {greeting.resumeLink && (
                    <a
                      // href={require("./resume.pdf")}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={greeting.resumeLink}
                      download={greeting.resumeName}
                      className="download-link-button"
                    >
                      <Button text="Download my resume" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="greeting-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={landingPerson} />
              ) : (
                <img
                  alt="man sitting on table"
                  src={require("../../assets/images/manOnTable.svg")}
                ></img>
              )}
            </div>
          </div>
        </div>
        <div className="z-50"><FloatingBackground /></div>
      </div>
    </Fade>
  );
}
