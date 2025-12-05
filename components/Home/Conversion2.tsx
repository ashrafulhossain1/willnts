'use client';

import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Conversion2 = () => {
  const leftPhoneRef = useRef<HTMLDivElement>(null);
  const msgRef1 = useRef<HTMLDivElement>(null);
  const msgRef2 = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const animate = (el: HTMLDivElement | null, from: any, to: any) => {
      if (el) gsap.fromTo(el, from, to);
    };

    // LEFT PHONE + MESSAGES + BADGE
    animate(
      leftPhoneRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftPhoneRef.current,
          start: 'top 90%',
          toggleActions: 'restart none none reverse',
        },
      },
    );

    [msgRef1.current, msgRef2.current].forEach((msg, idx) => {
      animate(
        msg,
        { x: -50, opacity: 0, scale: 1.1 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: msg,
            start: 'top 85%',
            toggleActions: 'restart none none reverse',
          },
        },
      );
    });

    animate(
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

    // RIGHT CARD + ICON
    animate(
      rightCardRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rightCardRef.current,
          start: 'top 85%',
          toggleActions: 'restart none none reverse',
        },
      },
    );

    animate(
      iconRef.current,
      { scale: 0.7, rotate: -10, opacity: 0 },
      {
        scale: 1,
        rotate: 0,
        opacity: 1,
        duration: 1,
        ease: 'elastic.out(1,0.4)',
        scrollTrigger: {
          trigger: iconRef.current,
          start: 'top 85%',
          toggleActions: 'restart none none reverse',
        },
      },
    );
  }, []);

  return (
    <section className="relative w-full bg-white md:pb-20 py-10">
      <div className="relative max-w-[1300px] mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-start gap-12">
        {/* LEFT SIDE: PHONE + CHAT + BADGE */}
        <div className="relative w-full md:w-auto flex justify-center md:justify-start">
          <div ref={leftPhoneRef} className="relative">
            {/* PHONE */}
            <Image
              src="/images/apple.png"
              alt="phone"
              width={380}
              height={760}
              className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]"
            />

            {/* FIRST CHAT */}
            <div
              ref={msgRef1}
              className="absolute top-[12%] right-[5%] sm:right-[8%] md:right-[10%]"
            >
              <div className="relative">
                <div className="bg-[#5FB544] text-white rounded-xl px-4 py-2 text-[11px] sm:text-[13px] w-40 sm:w-[210px] leading-[17px] shadow">
                  Allô ! Je tiens à ce que j’ai rassemblé tous les documents
                  qu’il faut pour notre prochaine rencontre.
                </div>
                <div className="absolute left-5 top-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-8 border-l-transparent border-r-transparent border-t-[#5FB544]" />
              </div>
              <span className="text-[10px] sm:text-[11px] ml-4 mt-1 block text-green-800 opacity-80">
                – Alphonse Clerc
              </span>
            </div>

            {/* SECOND CHAT */}
            <div
              ref={msgRef2}
              className="absolute top-[28%] left-[5%] sm:left-[8%] md:left-[10%]"
            >
              <div className="relative w-40 sm:w-[210px]">
                {/* Chat Bubble */}
                <div className="bg-[#26659e] text-white rounded-xl px-4 py-2 text-[11px] sm:text-[13px] leading-[17px] shadow relative">
                  Bonjour ! J'ai bien reçu le document.
                </div>

                {/* Name with tail at the start */}
                <div className="flex items-center mt-1">
                  {/* Tail on the left of the name */}
                  <div className="absolute left-5 bottom-3.5 w-0 h-0 border-l-[6px] border-r-[6px] border-t-8 border-l-transparent border-r-transparent border-t-[#26659e]" />

                  <span className="text-[10px] sm:text-[11px] text-[#26659e] opacity-80">
                    – Alphonse Client
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* badge */}
          <div
            ref={badgeRef}
            className="absolute bottom-0 -right-96 bg-white rounded-l-2xl  px-10 py-10"
            style={{ boxShadow: '0 4px 25px rgba(0,0,0,0.15)' }}
          >
            <h1 className="font-bold text-[18px] sm:text-[20px] mr-36">
              Tchat Omnichannel
            </h1>
            <li className="flex items-center gap-3">
              <Image
                src="/images/check-orange.svg"
                width={18}
                height={18}
                alt=""
              />
              Facebook, Messenger avec la page du cabinet.
            </li>
          </div>
        </div>

        {/* RIGHT SIDE: CARD + VERTICAL LINE + ICON */}
        <div className="relative w-full md:w-[420px] flex flex-col items-end">
          <div
            ref={rightCardRef}
            className="bg-white rounded-2xl p-6 w-full relative"
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
              <li className="flex items-start justify-start gap-3">
                <Image
                  src="/images/check-orange.svg"
                  width={18}
                  height={18}
                  alt=""
                />
                Historique complet par client
              </li>
              <li className="flex items-start justify-start gap-3">
                <Image
                  src="/images/check-orange.svg"
                  width={18}
                  height={18}
                  alt=""
                />
                Tous les canaux visibles
              </li>
              <li className="flex items-start justify-start gap-3">
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

          {/* Vertical line + icon at the far right */}
          <div className=" md:flex absolute top-60 right-0 flex-col items-center mt-6">
            <div className="w-2 h-2 bg-gray-300 rounded-full mb-4" />
            <div className="border-l-[2.5px] border-dashed border-gray-300 h-60" />
            <div ref={iconRef} className="relative -top-4">
              <div className="bg-[#FF9500] rounded-full w-[85px] h-[85px] flex items-center justify-center shadow-xl">
                <Image src="/images/pen.svg" width={45} height={45} alt="pen" />
              </div>
            </div>
            <div className="-mt-3 border-l-2 border-dashed border-gray-300 h-60" />
            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conversion2;
