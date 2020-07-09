import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <Hero hero="roomsHero">
      <Banner title="My Apps">
        <Link to='./' className="btn-primary">
          return to Bio
        </Link>
      </Banner>
    </Hero>
  );
};