import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'
import Intro from './Intro'
;


const MainContainer = styled.div`
  background: linear-gradient(135deg, #ff9a8b, #fad0c4, #fbc2eb);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #ffffff;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }
`;

const Container = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 2rem;
`;

const Contact = styled.a`
  color: #fff;
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
    color: #ff6f91;
  }
`;

const WORK = styled(NavLink)`
  color: ${({ click }) => (click ? '#000' : '#fff')};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;

  &:hover {
    color: #ff6f91;
    text-shadow: 2px 2px 10px rgba(255, 111, 145, 0.8);
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
`;

const ABOUT = styled(NavLink)`
  color: ${({ click }) => (click ? '#000' : '#fff')};
  text-decoration: none;
  z-index: 1;

  &:hover {
    color: #ff6f91;
  }
`;

const SKILLS = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  z-index: 1;

  &:hover {
    color: #ff6f91;
  }
`;

const Center = styled.button`
  position: absolute;
  top: ${({ click }) => (click ? '80%' : '50%')};
  left: ${({ click }) => (click ? '90%' : '50%')};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.8s ease;

  svg {
    animation: ${({ click }) => (click ? 'none' : pulse)} 2s infinite;
  }

  span {
    font-size: 1.5rem;
    margin-top: 0.5rem;
    display: ${({ click }) => (click ? 'none' : 'block')};
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: transparent;
  bottom: 0;
  right: 50%;
  width: ${({ click }) => (click ? '50%' : '0%')};
  height: ${({ click }) => (click ? '100%' : '0%')};
  z-index: 1;
  transition: height 0.5s ease, width 0.8s ease;
`;

// Animations
const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Main Component
const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? 'dark' : 'light'} />
        <SocialIcons theme={click ? 'dark' : 'light'} />

        <Center click={click} onClick={handleClick}>
          <YinYang width={click ? 80 : 120} height={click ? 80 : 120} fill="currentColor" />
          <span>click</span>
        </Center>

        <Contact href="mailto:junaidk8185@gmail.com" target="_blank">
          Say Hello!
        </Contact>

        <WORK to="/work" click={click}>
          Work
        </WORK>

        <BottomBar>
          <ABOUT to="/about" click={click}>
            About Me
          </ABOUT>
          <SKILLS to="/skills">
            My Skills
          </SKILLS>
        </BottomBar>
      </Container>
      {click && <Intro />}
    </MainContainer>
  );
};

export default Main;
