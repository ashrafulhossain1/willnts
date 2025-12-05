'use client';

import type React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, easeOut } from 'framer-motion';

interface NavLink {
  label: string;
  href: string;
  hasArrow?: boolean;
}

const navLinks: NavLink[] = [
  { label: 'Solutions', href: '/', hasArrow: true },
  { label: 'Omnichannel', href: '/solutions' },
  { label: 'Téléphonie', href: '/about-us' },
  { label: 'Tarification', href: '/pricing' },
  { label: 'À propos', href: '/' },
  { label: 'Sécurité', href: '/security' },
  { label: 'Investisseurs', href: '/invest' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut, // ✅ TypeScript safe
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: 'auto',
      transition: { duration: 0.3, ease: easeOut },
    },
    exit: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: { duration: 0.2, ease: easeOut },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: easeOut },
    },
  };

  return (
    <>
      <motion.nav
        initial={false}
        animate="visible"
        variants={containerVariants}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4  bg-gradient-to-r from-[#30204D] to-[#533589] px-4 sm:px-8 lg:px-12"
      >
        {/* Left Logo */}
        <motion.div
          className="flex items-center flex-shrink-0"
          variants={linkVariants}
        >
          <Image
            src="/images/mainLogo.svg"
            alt="Left Logo"
            width={139}
            height={60}
            priority
            className="w-auto h-auto"
          />
        </motion.div>

        {/* Desktop Center Routes */}
        <motion.div
          variants={containerVariants}
          className="hidden lg:flex items-center gap-1"
        >
          {navLinks.map((link, index) => (
            <motion.div key={index} variants={linkVariants}>
              <Link
                href={link.href}
                className="text-white hover:text-orange-300 font-medium px-3 py-2 text-sm transition-colors duration-200 flex items-center gap-2 relative group"
              >
                {link.label}
                {link.hasArrow && (
                  <motion.img
                    src="/images/arrow.svg"
                    alt="Arrow"
                    height={5}
                    width={8}
                    whileHover={{ x: 2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                )}
                <motion.span
                  className="absolute bottom-1 left-0 h-0.5 bg-orange-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Side - Desktop */}
        <motion.div
          variants={containerVariants}
          className="hidden lg:flex items-center gap-4"
        >
          {/* Language Selector */}
          <motion.div
            variants={linkVariants}
            className="flex items-center cursor-pointer hover:text-orange-300 transition-colors"
          >
            <Image
              src="/images/Vector.svg"
              alt="Language"
              width={24}
              height={16}
              priority
            />
            <span className="text-white text-sm font-medium px-2">EN</span>
            <motion.img
              src="/images/arrow.svg"
              alt="Arrow"
              height={8}
              width={8}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* CTA Button */}
          <motion.button
            variants={linkVariants}
            className="bg-orange-500 hover:bg-orange-600 rounded-full py-2.5 px-5 flex items-center gap-2.5 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-bold text-white text-sm">Essai gratuit</span>
            <div className="bg-white rounded-full flex items-center justify-center p-1">
              <ArrowRight size={16} className="text-orange-500" />
            </div>
          </motion.button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          variants={linkVariants}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed top-20 left-0 right-0 z-40 lg:hidden bg-gradient-to-b from-[#30204D] to-[#3d2663] shadow-lg overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {/* Mobile Navigation Links */}
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-white hover:text-orange-300 font-medium px-3 py-2.5 text-base transition-colors duration-200 rounded-lg hover:bg-white/10"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1 }}
                className="w-full mt-4 bg-orange-500 hover:bg-orange-600 rounded-full py-3 px-5 flex items-center justify-center gap-2.5 font-bold text-white transition-colors"
              >
                <span>Essai gratuit</span>
                <div className="bg-white rounded-full flex items-center justify-center p-1">
                  <ArrowRight size={16} className="text-orange-500" />
                </div>
              </motion.button>

              {/* Mobile Language Selector */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.2 }}
                className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-white/10 cursor-pointer hover:text-orange-300 transition-colors text-white"
              >
                <Image
                  src="/images/Vector.svg"
                  alt="Language"
                  width={20}
                  height={13}
                  priority
                />
                <span className="text-sm font-medium">EN</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
