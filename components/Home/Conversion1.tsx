'use client';

import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Conversion1 = () => {
  const msgRef = useRef(null);
  const leftCardRef = useRef(null);
  const iconRef = useRef(null);
  const phoneRef = useRef(null);
  const badgeRef = useRef(null);

  useLayoutEffect(() => {
    // LEFT CARD fade + slide
    gsap.fromTo(
      leftCardRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftCardRef.current,
          start: 'top 85%',
          toggleActions: 'restart none none reverse',
        },
      },
    );

    // ICON pulse + rotate slightly
    gsap.fromTo(
      iconRef.current,
      { scale: 0.7, rotate: -10, opacity: 0 },
      {
        scale: 1,
        rotate: 0,
        opacity: 1,
        duration: 1,
        ease: 'elastic.out(1, 0.4)',
        scrollTrigger: {
          trigger: iconRef.current,
          start: 'top 85%',
          toggleActions: 'restart none none reverse',
        },
      },
    );

    // PHONE image smooth slide
    gsap.fromTo(
      phoneRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: phoneRef.current,
          start: 'top 90%',
          toggleActions: 'restart none none reverse',
        },
      },
    );

    // CHAT BUBBLE message

    gsap.fromTo(
      msgRef.current,
      { y: -40, opacity: 0, scale: 1.15 }, // comes from above + enlarged
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'back.out(1.7)', // smooth “drop + settle”
        scrollTrigger: {
          trigger: msgRef.current,
          start: 'top 85%',
          toggleActions: 'restart none none reverse',
        },
      },
    );

    // BOTTOM BADGE FADE + slide from right
    gsap.fromTo(
      badgeRef.current,
      { x: 120, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: badgeRef.current,
          start: 'top 90%',
          toggleActions: 'restart none none reverse',
        },
      },
    );
  }, []);

  return (
    <section className="relative w-full bg-white md:pb-20 ">
      <div className="relative max-w-[1300px] md:flex justify-between mx-auto px-4 md:px-0">
        {/* LEFT SIDE */}
        <div>
          <div
            ref={leftCardRef}
            className="
            bg-white rounded-2xl  p-6 
            w-full md:w-[450px]
            mx-auto md:mx-0
            relative md:absolute md:top-0 md:left-0
          "
            style={{ boxShadow: '0 4px 25px rgba(0,0,0,0.15)' }}
          >
            <h3 className="text-[18px] font-bold uppercase mb-3">
              Interface de conversation centralisée
            </h3>

            <p className="text-gray-700 text-[14px] leading-[22px] mb-5">
              Toutes vos conversations client dans une seule interface
              intuitive. Plus besoin de jongler entre applications – tout est au
              même endroit.
            </p>

            <ul className="space-y-3 text-[14px] text-gray-800">
              <li className="flex items-start gap-3">
                <Image
                  src="/images/check-orange.svg"
                  width={20}
                  height={20}
                  alt=""
                />
                Historique complet par client
              </li>

              <li className="flex items-start gap-3">
                <Image
                  src="/images/check-orange.svg"
                  width={20}
                  height={20}
                  alt=""
                />
                Tous les canaux visibles
              </li>

              <li className="flex items-start gap-3">
                <Image
                  src="/images/check-orange.svg"
                  width={20}
                  height={20}
                  alt=""
                />
                Interface mobile et desktop
              </li>
            </ul>
          </div>

          {/* Vertical Line + Icon */}
          <div className="hidden md:flex absolute top-[270px] flex-col items-center">
            <div className="w-2 h-2 bg-gray-300 rounded-full mb-4" />
            <div className="border-l-[2.5px] border-dashed border-gray-300 h-60" />

            <div ref={iconRef} className="relative -top-4">
              <div className="bg-[#FF9500] rounded-full w-[90px] h-[90px] flex items-center justify-center shadow-xl">
                <Image src="/images/pen.svg" width={45} height={45} alt="pen" />
              </div>
            </div>

            <div className="-mt-3 border-l-[2px] border-dashed border-gray-300 h-60" />
            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          <div ref={phoneRef}>
            <Image
              src="/images/apple.png"
              alt="phone"
              width={425}
              height={878}
            />
          </div>

          {/* Chat Bubble */}
          <div
            ref={msgRef}
            className="absolute top-[19%] right-[12%] sm:right-[14%] md:right-[42px]"
          >
            {/* MESSAGE BUBBLE */}
            <div className="relative">
              <div
                className="bg-[#5FB544] text-white rounded-xl px-3 sm:px-4 py-2 
      text-[12px] sm:text-[13px] w-[180px] sm:w-[220px] leading-[17px] shadow message-box"
              >
                Allô ! Je tiens à ce que j’ai rassemblé tous les documents qu’il
                faut pour notre prochaine rencontre. Mais je dois confirmer.
                Possible de répliquer ?
              </div>

              {/* ARROW UNDER MESSAGE */}
              <div
                className="absolute left-5 top-full w-0 h-0 border-l-[6px] border-r-[6px] 
      border-t-[8px] border-l-transparent border-r-transparent border-t-[#5FB544]"
              ></div>
            </div>

            {/* NAME */}
            <span className="text-[10px] ml-4 sm:text-[11px] mt-1 block text-green-800 opacity-80">
              – Alphonse Clerc
            </span>
          </div>

          {/* Bottom Badge */}
          <div
            ref={badgeRef}
            className="absolute bottom-2 right-44 -translate-x-1/2 bg-white rounded-l-2xl z-0 uppercase whitespace-nowrap"
            style={{ boxShadow: '0 4px 25px rgba(0,0,0,0.15)' }}
          >
            <h1 className="px-12 font-bold py-12 mr-40 text-[20px]">
              Tchat Omnichannel
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conversion1;
