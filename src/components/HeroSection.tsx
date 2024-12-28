import { MessageCircle, ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="mb-6 inline-flex items-center px-4 py-2 bg-green-100 rounded-full">
              <span className="text-green-800 text-sm font-medium">Trusted by Leading Dubai Businesses</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Automate Your
              <span className="text-green-600 block mt-2">Patient Bookings & Property Inquiries</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Increase bookings by 40% with intelligent WhatsApp automation. Perfect for dental clinics
              and real estate agencies in Dubai.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Calendar className="mr-2 h-5 w-5" />
                Book Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="group"
              >
                See Success Stories
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center"
                  >
                    <img 
                      src={`/api/placeholder/40/40`}
                      alt={`Client ${i}`}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Used by top Dubai clinics & developers</p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">Rated 5.0 by clients</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-96 lg:h-full min-h-[400px] w-full">
            <Image
              src="/api/placeholder/600/400"
              alt="WhatsApp Business Automation"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
