import Image from 'next/image';
import React from 'react';

// Define the statistics data based on the image

const Hero: React.FC = () => {
  return (
    // Outer container with the dark purple gradient background
    // Estimated colors: a deep purple (#30204D) to a slightly lighter purple (#533589)
    <div className="bg-gradient-to-r from-[#30204D] to-[#533589] relative">
      {/* Inner content container - controls max width and padding */}
      <div className="md:max-w-[1300px] mx-auto lg:pt-[165px] lg:pb-[207px] px-4 sm:px-6 lg:px-8 text-white">
        {/* Title Section */}
        <h2 className="uppercase font-bold text-5xl mb-6 sm:mb-8">
          <span className="text-white">Plateforme </span>
          <span className="text-[#FF9500] relative inline-block">
            Omnichannel
            {/* Orange underline element */}
            <Image
              className="filter top-14 brightness-150 absolute right-5"
              src="/images/line.png"
              alt="Arrow vector"
              height={17}
              width={214}
            />
          </span>
        </h2>

        {/* Description Paragraph */}
        <p className="text-gray-200 text-lg max-w-2xl mb-5 sm:mb-10 pt-4">
          Une seule interface pour toutes vos communications client. Facebook
          Messenger, SMS, Fax, Appels, Messagerie interne - tout centralisé.
        </p>
        <div
          className="mb-5"
          style={{
            width: '696px',
            height: '1px',
            background:
              'linear-gradient(to right, white 0%, rgba(255,255,255,0) 100%)',
          }}
        />

        {/* Statistics Section */}
        <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-12">
          {/* 1 */}
          <div className="flex items-center space-x-4">
            <div
              className={`flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#FF9500] text-white text-[40px] font-bold shadow-lg`}
            >
              6
            </div>

            {/* Statistic Label */}
            <div className="uppercase text-lg font-bold tracking-wide text-white max-w-[134px]">
              Canaux centralisés
            </div>
          </div>
          {/* 2 */}
          <div className="flex items-center space-x-4">
            <div
              className={`flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#FF9500] text-white text-[22px] font-bold shadow-lg`}
            >
              100%
            </div>

            <div className="uppercase text-lg font-bold tracking-wide text-white max-w-[134px]">
              Historique conservé
            </div>
          </div>
          {/* 3 */}
          <div className="flex items-center space-x-4">
            <div
              className={`flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#FF9500] text-white text-[40px] font-bold shadow-lg`}
            >
              1
            </div>
            <div className="uppercase text-lg font-bold tracking-wide text-white max-w-[134px]">
              Interface unique
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[85px] leading-none overflow-hidden -bottom-1">
        <Image
          src="/images/hero-bottom.png"
          alt="banner shape"
          className="object-cover"
          fill
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
