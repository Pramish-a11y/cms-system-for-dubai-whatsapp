import React from 'react';
import { Button } from './ui/button';

const CTASection = () => {
  return (
    <div className="bg-green-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Get in touch with us today and discover how our WhatsApp automation and creative solutions
          can help your business grow.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
            Schedule a Demo
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
