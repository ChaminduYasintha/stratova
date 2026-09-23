import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { VisionMission } from '../components/VisionMission';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { CoreValues } from '../components/CoreValues';
import { Services } from '../components/Services';
import { SupportServices } from '../components/SupportServices';
import { Leadership } from '../components/Leadership';
import { Contact } from '../components/Contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <VisionMission />
      <WhyChooseUs />
      <CoreValues />
      <Services />
      <SupportServices />
      <Leadership />
      <Contact />
    </>
  );
};
