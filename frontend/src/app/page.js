'use client';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import Loader from './components/loader.js';
import SplineScene from './components/spline-home-model.js';
import LandingPart from './components/landing-part.js';
import './globals.css';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleComplete = () => {
      setLoading(false);
    };
  
    const handleStart = () => {
      setLoading(true);
    };
  
    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', (err) => {
      console.error('Error during route change:', err);
      handleComplete();
    });
  
    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleComplete);
      Router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main>
          <SplineScene />
          <LandingPart />
        </main>
      )}
    </>
  );
}

export default MyApp;