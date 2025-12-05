import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between  py-4 shadow-md bg-gradient-to-r from-[#30204D] to-[#533589] px-12">
      {/* Left Logo */}
      <div className="flex items-center">
        <Image
          src="/images/mainLogo.svg"
          alt="Left Logo"
          width={139}
          height={60}
          priority
        />
      </div>

      {/* Center Routes */}
      <div className="flex space-x-6">
        <Link
          href="/"
          className="text-white hover:text-gray-300 font-medium flex gap-2"
        >
          Solutions
          <Image
            src="/images/arrow.svg"
            alt="Arrow vector"
            height={5}
            width={8}
          />
        </Link>
        <Link
          href="/solutions"
          className="text-white hover:text-gray-300 font-medium"
        >
          Omnichannel
        </Link>
        <Link
          href="/about-us"
          className="text-white hover:text-gray-30 0 font-medium"
        >
          Téléphonie
        </Link>
        <Link
          href="/pricing"
          className="text-white hover:text-gray-300 font-medium"
        >
          Tarification
        </Link>
        <Link href="/" className="text-white hover:text-gray-300 font-medium">
          À propos
        </Link>
        <Link
          href="/security"
          className="text-white hover:text-gray-300 font-medium"
        >
          Sécurité
        </Link>
        <Link
          href="/invest"
          className="text-white hover:text-gray-300 font-medium"
        >
          Investisseurs
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <div className="flex justify-center items-center">
          <Image
            src="/images/Vector.svg"
            alt="Right Logo"
            width={24}
            height={16}
            priority
          />{' '}
          <span className=" rounded px-2 py-1 text-white text-lg">EN</span>
          <Image
            src="/images/arrow.svg"
            alt="Arrow vector"
            height={8}
            width={8}
          />
        </div>

        <div></div>

        <div className="bg-[#FF9500] rounded-full py-2.5 px-5 flex justify-center items-center gap-2.5">
          <span className="font-bold text-white">Essai gratuit</span>
          <div className="bg-white rounded-full flex items-center justify-center">
            <ArrowRight />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
