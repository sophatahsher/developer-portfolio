import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode} from "swiper/modules";
export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  if (!achievementSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>

          {/* <div className="achievement-cards-div"> */}
          {/* <div className="achievement-carousel-container">
          <div className="achievement-carousel">
            {achievementSection.achievementsCards.map((card, i) => {
              return (
                <div className="achievement-card-wrapper" key={i}>
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                />
                </div>
              );
            })}
          </div>
          </div> */}
          <div className="achievement-carousel">
            <Swiper
              modules={[FreeMode]}
              freeMode={true}
              grabCursor={true}
              spaceBetween={20}
              slidesPerView={3.5}
              breakpoints={{
                320: {
                  slidesPerView: 1.2,
                  spaceBetween: 15
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 20
                },
                1200: {
                  slidesPerView: 4.2,
                  spaceBetween: 25
                }
              }}
              className="achievement-swiper"
            >
              {achievementSection.achievementsCards.map((card, i) => (
                <SwiperSlide key={i}>
                  <AchievementCard
                    isDark={isDark}
                    cardInfo={{
                      title: card.title,
                      description: card.subtitle,
                      image: card.image,
                      imageAlt: card.imageAlt,
                      footer: card.footerLink
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </Fade>
  );
}
