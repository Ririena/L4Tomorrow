import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Parallax() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animasi Parallax Effect
    gsap.to(parallaxRef.current, {
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: 'top top', // Mulai scroll dari atas container
        end: 'bottom bottom', // Akhiri scroll di bagian bawah container
        scrub: true,
      },
      y: -50, // ubah nilai ini sesuai dengan seberapa jauh Anda ingin elemen bergerak
      ease: 'power1.out' // Animasi smooth
    });
  }, []);

  return (
    <div
      ref={parallaxRef}
      className="h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: '#f0f0f0', height: '100vh' }} // Set tinggi container ke tinggi layar penuh
    >
      <img
        src="https://via.placeholder.com/500x500"
        alt="Dummy Image 1"
        className="absolute top-0 left-0 w-full h-screen object-cover z-0"
      />
      <img
        src="/violetP.jpg"
        alt="Dummy Image 2"
        className="absolute top-0 left-0 w-full h-screen object-cover z-10"
        style={{ opacity: 0.8 }} // Sesuaikan opacity jika diperlukan
      />
      <div className="relative z-20 text-4xl font-bold">
        Scroll down for Parallax Effect
      </div>
      <div className="h-screen bg-white"></div>
    </div>
  );
}

export default Parallax;
