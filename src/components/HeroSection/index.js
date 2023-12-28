import React from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  SocialMediaIcons,
  SocialMediaIcon,
  ResumeButton,
} from './HeroStyle';
import HeroImg from '../../images/HeroImage.png';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import './HeroSection.css'; // Import your CSS file

const HeroSection = () => {
  const nameStyle = {
    color: '#FFD700', // Set the color to gold/yellow
  };

  return (
    <div id="about">
      <HeroContainer className="hero-container"> {/* Add a class for styling */}
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer className="hero-inner-container"> {/* Add a class for styling */}
          <HeroLeftContainer id="Left" className="hero-left-container"> {/* Add a class for styling */}
            <Title className="fade-in">
              Hi, I am <br />
            </Title>
            <Title style={nameStyle} className="fade-in">{Bio.name}</Title>
            <TextLoop className="fade-in">
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle className="fade-in">{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="display" className="fade-in">
              Resume/CV
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right" className="hero-right-container"> {/* Add a class for styling */}
            <Img src={HeroImg} alt="hero-image" className="fade-in" /> {/* Add a class for styling */}
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
