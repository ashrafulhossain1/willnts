import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#30204D] to-[#533589] relative pt-32">
      <div className="max-w-[1300px] mx-auto lg:pt-[165px] lg:pb-[207px] px-4 sm:px-6 lg:px-8 text-white">
        {/* Title Section */}
        <h2 className="uppercase font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 lg:mb-8">
          <span className="text-white">Plateforme </span>
          <span className="text-[#FF9500] relative inline-block">
            Omnichannel
            <Image
              className="absolute top-10 sm:top-12 lg:top-14 right-0 sm:right-2 lg:right-5 filter brightness-150"
              src="/images/line.png"
              alt="Underline"
              width={214}
              height={17}
            />
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-200 text-base sm:text-lg lg:text-lg max-w-full sm:max-w-xl lg:max-w-2xl mb-4 sm:mb-6 lg:mb-10 pt-2 sm:pt-4">
          Une seule interface pour toutes vos communications client. Facebook
          Messenger, SMS, Fax, Appels, Messagerie interne - tout centralisé.
        </p>

        {/* Divider */}
        <div
          className="mb-4 sm:mb-6 lg:mb-10 w-full sm:w-[500px] lg:w-[696px] h-[1px]"
          style={{
            background:
              'linear-gradient(to right, white 0%, rgba(255,255,255,0) 100%)',
          }}
        />

        {/* Statistics */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-start sm:justify-between space-y-6 sm:space-y-6 lg:space-y-0 sm:space-x-6 lg:space-x-12">
          {/* 1 */}
          <div className="flex items-center space-x-4">
            <div className="flex h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] lg:h-[70px] lg:w-[70px] items-center justify-center rounded-full bg-[#FF9500] text-white text-[28px] sm:text-[40px] font-bold shadow-lg">
              6
            </div>
            <div className="uppercase text-sm sm:text-lg lg:text-lg font-bold tracking-wide text-white max-w-[120px] sm:max-w-[134px]">
              Canaux centralisés
            </div>
          </div>

          {/* 2 */}
          <div className="flex items-center space-x-4">
            <div className="flex h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] lg:h-[70px] lg:w-[70px] items-center justify-center rounded-full bg-[#FF9500] text-white text-[18px] sm:text-[22px] lg:text-[22px] font-bold shadow-lg">
              100%
            </div>
            <div className="uppercase text-sm sm:text-lg lg:text-lg font-bold tracking-wide text-white max-w-[120px] sm:max-w-[134px]">
              Historique conservé
            </div>
          </div>

          {/* 3 */}
          <div className="flex items-center space-x-4">
            <div className="flex h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] lg:h-[70px] lg:w-[70px] items-center justify-center rounded-full bg-[#FF9500] text-white text-[28px] sm:text-[40px] font-bold shadow-lg">
              1
            </div>
            <div className="uppercase text-sm sm:text-lg lg:text-lg font-bold tracking-wide text-white max-w-[120px] sm:max-w-[134px]">
              Interface unique
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="relative w-full h-[60px] sm:h-[70px] lg:h-[85px] overflow-hidden -bottom-1">
        <Image
          src="/images/hero-bottom.png"
          alt="banner shape"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
