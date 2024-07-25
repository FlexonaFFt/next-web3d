'use client';
import { useEffect } from 'react';
import Spline from '@splinetool/react-spline/next';
import '../styles/spline-home-model-styles.css';
import { gsap } from "gsap";

export default function SplineScene() {

  useEffect(() => {
    // Анимация мерцающего текста
    gsap.to("#flicker", {
      opacity: 0,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <main>
      <Spline
        scene="https://prod.spline.design/YjTVRuo0Iia7A1zz/scene.splinecode" 
      />
      <div className='lang-selectors'>
        <p className='lang-btn first'>RUS</p>
        <p className='lang-btn second'>/</p>
        <p className='lang-btn third'>ENG</p>
      </div>
      <div className='scroll-text'>
        <p id='flicker' className='flicker-text'>Scroll down</p>
      </div>
    </main>
  );
}