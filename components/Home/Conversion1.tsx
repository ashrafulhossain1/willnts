'use client';

import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Conversion1 = () => {
  const msgRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
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

    gsap.fromTo(
      msgRef.current,
      { y: -40, opacity: 0, scale: 1.15 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: msgRef.current,
          start: 'top 85%',
          toggleActions: 'restart none none reverse',
        },
      },
    );

    gsap.fromTo(
      badgeRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
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
    <section className="relative w-full bg-white md:pb-20 py-10">
      <div className="relative max-w-[1300px] mx-auto px-4 md:px-0 flex flex-col md:flex-row md:justify-between items-center md:items-start gap-12">
        {/* LEFT CARD */}
        <div className="w-full md:w-[420px]">
          <div
            ref={leftCardRef}
            className="bg-white rounded-2xl p-6 w-full mx-auto relative"
            style={{ boxShadow: '0 4px 25px rgba(0,0,0,0.15)' }}
          >
            <h3 className="text-[18px] font-bold uppercase mb-3">
              Interface de conversation centralisée
            </h3>
            <p className="text-gray-700 text-[14px] leading-[22px] mb-4">
              Toutes vos conversations client dans une seule interface
              intuitive.
            </p>
            <ul className="space-y-3 text-[14px] text-gray-800">
              <li className="flex items-start gap-3">
                <Image
                  src="/images/check-orange.svg"
                  width={18}
                  height={18}
                  alt=""
                />
                Historique complet par client
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/images/check-orange.svg"
                  width={18}
                  height={18}
                  alt=""
                />
                Tous les canaux visibles
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/images/check-orange.svg"
                  width={18}
                  height={18}
                  alt=""
                />
                Interface mobile et desktop
              </li>
            </ul>
          </div>

          {/* Vertical Line + Icon */}
          <div className=" md:flex absolute top-[300px] flex-col items-center left-0">
            <div className="w-2 h-2 bg-gray-300 rounded-full mb-4" />
            <div className="border-l-[2.5px] border-dashed border-gray-300 h-60" />
            <div ref={iconRef} className="relative -top-4">
              <div className="bg-[#FF9500] rounded-full w-[85px] h-[85px] flex items-center justify-center shadow-xl">
                <Image src="/images/pen.svg" width={45} height={45} alt="pen" />
              </div>
            </div>
            <div className="-mt-3 border-2 border-dashed border-gray-300 h-60" />
            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
          </div>

          {/* BADGE */}
          <div
            ref={badgeRef}
            className="absolute sm:left-auto bottom-5 right-[400px]  bg-white rounded-l-2xl  px-10 py-10"
            style={{ boxShadow: '0 4px 25px rgba(0,0,0,0.15)' }}
          >
            <h1 className="font-bold text-[18px] sm:text-[20px] mr-36">
              Tchat Omnichannel
            </h1>
          </div>
        </div>

        {/* RIGHT PHONE + CHAT + BADGE */}
        <div className="relative w-full md:w-auto flex justify-center md:justify-end">
          <div ref={phoneRef} className="relative">
            {/* PHONE */}
            <Image
              src="/images/apple.png"
              alt="phone"
              width={380}
              height={760}
              className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]"
            />

            {/* CHAT BUBBLE */}
            <div
              ref={msgRef}
              className="absolute top-[12%] right-[10%] sm:right-[12%] md:right-[8%]"
            >
              <div className="relative">
                <div className="bg-[#5FB544] text-white rounded-xl px-4 py-2 text-[11px] sm:text-[13px] w-[160px] sm:w-[210px] leading-[17px] shadow">
                  Allô ! Je tiens à ce que j’ai rassemblé tous les documents
                  qu’il faut pour notre prochaine rencontre.
                </div>
                <div className="absolute left-5 top-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-8 border-l-transparent border-r-transparent border-t-[#5FB544]" />
              </div>
              <span className="text-[10px] sm:text-[11px] ml-4 mt-1 block text-green-800 opacity-80">
                – Alphonse Clerc
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conversion1;
