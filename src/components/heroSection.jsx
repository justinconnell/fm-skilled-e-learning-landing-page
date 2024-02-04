// noinspection JSValidateTypes

import heroImageMobile1 from '../assets/images/image-hero-mobile.webp';
import heroImageMobile2 from '../assets/images/image-hero-mobile@2x.webp';
import heroImageTablet1 from '../assets/images/image-hero-tablet.webp';
import heroImageTablet2 from '../assets/images/image-hero-tablet@2x.webp';
import heroImageDesktop1 from '../assets/images/image-hero-desktop.webp';
import heroImageDesktop2 from '../assets/images/image-hero-desktop@2x.webp';

export default function HeroSection() {
  const mobileSrcSet = `${heroImageMobile1} 1x, ${heroImageMobile2} 2x`;
  const tabletSrcSet = `${heroImageTablet1} 1x, ${heroImageTablet2} 2x`;
  const desktopSrcSet = `${heroImageDesktop1} 1x, ${heroImageDesktop2} 2x`;

  return (
    <figure className="hero-section">
      <picture>
        <source media="(max-width: 767px)" srcSet={mobileSrcSet}/>
        <source media="(max-width: 1439px)" srcSet={tabletSrcSet}/>
        <source media="(min-width: 1440px)" srcSet={desktopSrcSet}/>
        <img className="hero-section__image" src={heroImageDesktop2} alt="Hero Image"/>
      </picture>
      <figcaption className="hero-section__cta">
        <h1 className="hero-section__cta__heading">Maximize skill, minimize budget</h1>
        <p className="hero-section__cta__text">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <a href="#" className="hero-section__cta__button">
          Get Started
        </a>
      </figcaption>
    </figure>
  );
}

