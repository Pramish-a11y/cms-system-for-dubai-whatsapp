import React from 'react';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          Transform Your Business with
          <span className="text-green-600"> WhatsApp Automation</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Streamline your customer interactions, generate quality leads, and boost your B2B presence
          with our advanced WhatsApp automation solutions in Dubai.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            <MessageCircle className="mr-2 h-5 w-5" />
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
