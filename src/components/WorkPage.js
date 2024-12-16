import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";

const MainContainer = styled.div`
  background: linear-gradient(135deg, #ff9a8b, #fad0c4, #fbc2eb);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  padding-top: 60px;

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

const Main = styled(motion.div)`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    width: 90%;
    gap: 1.5rem;
  }
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

const BottomBar = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
`;

const ABOUT = styled.a`
  color: #fff;
  text-decoration: none;
  z-index: 1;

  &:hover {
    color: #ff6f91;
  }
`;

const SKILLS = styled.a`
  color: #fff;
  text-decoration: none;
  z-index: 1;

  &:hover {
    color: #ff6f91;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />

        <Contact href="mailto:junaidk8185@gmail.com" target="_blank">
          Say Hello!
        </Contact>

        <Main variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
      </Container>
    </MainContainer>
  );
};

export default WorkPage;
