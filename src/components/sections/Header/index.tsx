import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X as CloseIcon, ChevronDown } from 'lucide-react';
import { Button } from '../../ui/button';
import { navigationConfig } from '../../../config/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [router]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-green-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>Dubai-based support available 24/7</span>
            </div>
            <div className="hidden md:block">
              <span>Trusted by 500+ Dubai businesses</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        } transition-all duration-200`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/api/placeholder/200/50"
                  alt="WhatsApp Automation Dubai"
                  width={200}
                  height={50}
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-x-8">
              {navigationConfig.primaryLinks.map((item, index) => (
                <div key={index} className="relative group">
                  {item.links ? (
                    <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 py-2">
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {item.label}
                    </Link>
                  )}

                  {item.links && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.links.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex lg:items-center lg:gap-x-4">
              {navigationConfig.secondaryLinks.map((item, index) => (
                <Button
                  key={index}
                  variant={item.type === 'outline' ? 'outline' : 'default'}
                  asChild
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <CloseIcon className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-3">
              {navigationConfig.mobileLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block py-2 text-base text-gray-600 hover:text-gray-900"
                >
                  {item.label}
                </Link>
              ))}
            </div>

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [router]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-green-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>Dubai-based support available 24/7</span>
            </div>
            <div className="hidden md:block">
              <span>Trusted by 500+ Dubai businesses</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 ${
          isScrolled
            ? 'bg-white shadow-md'
            : 'bg-transparent'
        } transition-all duration-200`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/api/placeholder/200/50"
                  alt="WhatsApp Automation Dubai"
                  width={200}
                  height={50}
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-x-8">
              {navigationConfig.primaryLinks.map((item, index) => (
                <div key={index} className="relative group">
                  {item.links ? (
                    <button
                      className="flex items-center gap-1 text-gray-600 hover:text-gray-900 py-2"
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {item.label}
                    </Link>
                  )}

                  {item.links && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.links.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex lg:items-center lg:gap-x-4">
              {navigationConfig.secondaryLinks.map((item, index) => (
                <Button
                  key={index}
                  variant={item.type === 'outline' ? 'outline' : 'default'}
                  asChild
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <CloseIcon className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-3">
              {navigationConfig.mobileLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block py-2 text-base text-gray-600 hover:text-gray-900"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
