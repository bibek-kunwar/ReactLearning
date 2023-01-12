import  { useEffect } from 'react'
import { useGlobalContext } from '../Components/Context'
import HeroSection from '../Components/HeroSection'
import Contact from './Contact';
import Services from './Services';
// const data = {
//     name: "Bibek Kunwar",
//     image: "./images/hero.svg"
//   }

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <>
      <HeroSection />
      <Services />
      <Contact/>

    </>
  );
};

export default Home;