import { Alert } from '@/components/ui';
import React from 'react';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>WhatsApp Automation & Lead Generation Services | Dubai</title>
        <meta name="description" content="Transform your business with our WhatsApp automation services. Generate quality leads and enhance brand awareness through creative B2B marketing strategies." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-400 to-green-600 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Transform Your Business with WhatsApp Automation
              </h1>
              <p className="text-xl mb-8">
                Streamline communication, generate quality leads, and boost your B2B marketing with our advanced WhatsApp solutions.
              </p>
              <button className="bg-white text-green-600 font-bold py-4 px-8 rounded-lg hover:bg-green-50 transition duration-300">
                Get Started Today
              </button>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              {/* Placeholder for hero image */}
              <div className="relative">
                <div className="w-full h-96 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Premium Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* WhatsApp Automation */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="h-16 w-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">WhatsApp Automation</h3>
              <p className="text-gray-600">
                Automate your customer communication with intelligent WhatsApp solutions. Engage customers 24/7 with automated responses and personalized messaging.
              </p>
            </div>

            {/* Lead Generation */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Lead Generation</h3>
              <p className="text-gray-600">
                Generate high-quality B2B leads through targeted Meta campaigns and strategic content marketing that converts.
              </p>
            </div>

            {/* Creative Strategy */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="h-16 w-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Creative Strategy</h3>
              <p className="text-gray-600">
                Develop compelling brand awareness campaigns with our expert creative team. Custom TVC concepts that resonate with your B2B audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-bold mb-2">24/7 Automated Support</h4>
                <p className="text-gray-600">Never miss a customer inquiry with our round-the-clock automated WhatsApp support system.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-bold mb-2">Enhanced Conversion Rates</h4>
                <p className="text-gray-600">Our targeted approach ensures higher conversion rates and better ROI for your marketing campaigns.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-bold mb-2">Personalized Communication</h4>
                <p className="text-gray-600">Create meaningful connections with automated yet personalized customer interactions.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-bold mb-2">Data-Driven Results</h4>
                <p className="text-gray-600">Make informed decisions with comprehensive analytics and performance tracking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Start automating your WhatsApp communication and generating quality leads today.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-green-600 font-bold py-4 px-8 rounded-lg hover:bg-green-50 transition duration-300">
              Schedule a Demo
            </button>
            <button className="bg-green-700 text-white font-bold py-4 px-8 rounded-lg hover:bg-green-800 transition duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;