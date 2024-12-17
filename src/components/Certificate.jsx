import React from 'react';
import styled from 'styled-components';
import PowerButton from '../subComponents/PowerButton';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import { motion } from 'framer-motion';

const MainContainer = styled.div`
  background: linear-gradient(135deg, #ff9a8b, #fad0c4, #fbc2eb);
  width: 100vw;
  height: full
  overflow: hidden;
  position: relative;
  padding-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

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

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Certificates = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
  width: 100%;
`;

const CertificateCard = styled.div`
  width: 100%;
  max-width: 400px;
  height: 250px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  background: #fff;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.8);
    transition: filter 0.3s ease;
  }

  &:hover img {
    filter: brightness(1);
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;

    h3 {
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
      text-align: center;
      font-family: 'Poppins', sans-serif;
    }

    a {
      color: #ff9a8b;
      background: #fff;
      padding: 0.4rem 1rem;
      text-decoration: none;
      font-weight: 600;
      border-radius: 5px;
      transition: all 0.3s ease;

      &:hover {
        background: #ff6f91;
        color: #fff;
      }
    }
  }

  &:hover .overlay {
    opacity: 1;
  }

  @media (max-width: 480px) {
    height: 200px;
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

const Certificate = () => {
  const certificates = [
    {
      id: 1,
      title: 'E-Commerce Website Development - SKP Decor Private Limited',
      img: 'https://res.cloudinary.com/dyvbiod0u/image/upload/v1734440680/xnhdoltqwjjlauom2gwd.jpg',
      link: 'https://drive.google.com/file/d/1qXFsI0Ok24AbTGGlfawAIxa1qqK3i9wb/view?usp=sharing',
    },
    {
      id: 2,
      title: 'Full-Stack Development Certificate',
      img: 'https://res.cloudinary.com/dyvbiod0u/image/upload/v1734441424/ctjdwb5aqh6nt5ojgsye.jpg',
      link: 'https://drive.google.com/file/d/1AIOoQSGPiiQchRjru4o_DAxZ-TPfTwmd/view?usp=sharing',
    }
  ];

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
          <Title>Certificates</Title>
          <Certificates>
            {certificates.map((cert) => (
              <CertificateCard key={cert.id}>
                <img src={cert.img} alt={cert.title} />
                <div className="overlay">
                  <h3>{cert.title}</h3>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Certificate
                  </a>
                </div>
              </CertificateCard>
            ))}
          </Certificates>
      </Main>
    </Container>
    </MainContainer>
  );
};

export default Certificate;
