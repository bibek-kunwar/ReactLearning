import React, { useEffect } from 'react'

import HeroSection from '../Components/HeroSection'
import { useGlobalContext } from '../Components/Context'

const About = () => {
  const { udpateAboutPage } = useGlobalContext();

  useEffect(() => udpateAboutPage(), []);

  return <HeroSection />;
};

export default About