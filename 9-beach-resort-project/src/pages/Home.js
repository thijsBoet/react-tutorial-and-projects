import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services'

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="Matthijs Boet" subtitle="Frontend Web Developer">
          <Link to='./rooms' className="btn-primary">
            My Apps
          </Link>
        </Banner>
      </Hero>
      <Services/>
    </>
  );
};