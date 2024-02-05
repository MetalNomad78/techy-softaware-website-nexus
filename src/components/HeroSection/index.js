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
              We are <br />
            </Title>
            <Title style={nameStyle} className="fade-in">{Bio.name}</Title>
            <TextLoop className="fade-in">
              We provide
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
            
          </HeroLeftContainer>

          <HeroRightContainer id="Right" className="hero-right-container"> {/* Add a class for styling */}
            <Img src="https://i.pinimg.com/originals/ef/2d/b0/ef2db0885d94fd149a4b7914923bb2a3.gif" alt="hero-image" className="fade-in" /> {/* Add a class for styling */}
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
