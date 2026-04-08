import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const FooterSection = () => {
  return (
    <div className="bg-[#0f172a] text-gray-400 p-10">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        
        {/* Main Grid: 1 col on mobile, 2 cols on small tabs, 5 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-4 pb-10 border-b border-gray-800">
          
          {/* Brand Section - Spans 1 full col on mobile, maybe 2 on desktop */}
          <div className="md:col-span-1 lg:pr-8">
            <h2 className="text-white text-3xl font-bold mb-4">DigiTools</h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Nav Groups */}
          <div className="flex flex-col gap-3">
            <h6 className="text-white font-semibold text-lg mb-1">Product</h6>
            <a className="hover:text-white transition-colors text-sm">Features</a>
            <a className="hover:text-white transition-colors text-sm">Pricing</a>
            <a className="hover:text-white transition-colors text-sm">Templates</a>
            <a className="hover:text-white transition-colors text-sm">Integrations</a>
          </div>

          <div className="flex flex-col gap-3">
            <h6 className="text-white font-semibold text-lg mb-1">Company</h6>
            <a className="hover:text-white transition-colors text-sm">About</a>
            <a className="hover:text-white transition-colors text-sm">Blog</a>
            <a className="hover:text-white transition-colors text-sm">Careers</a>
            <a className="hover:text-white transition-colors text-sm">Press</a>
          </div>

          <div className="flex flex-col gap-3">
            <h6 className="text-white font-semibold text-lg mb-1">Resources</h6>
            <a className="hover:text-white transition-colors text-sm">Documentation</a>
            <a className="hover:text-white transition-colors text-sm">Help Center</a>
            <a className="hover:text-white transition-colors text-sm">Community</a>
            <a className="hover:text-white transition-colors text-sm">Contact</a>
          </div>

          <div className="flex flex-col gap-4">
            <h6 className="text-white font-semibold text-lg mb-1">Social Links</h6>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="text-[#0f172a]" />
              </a>
              <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
                <FontAwesomeIcon icon={faFacebook} className="text-[#0f172a]" />
              </a>
              <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
                <FontAwesomeIcon icon={faTwitter} className="text-[#0f172a]" />
              </a>
            </div>
          </div>
        

        </div>


        <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-8 gap-6 text-xs sm:text-sm">
          <p className="text-center md:text-left">
            © 2026 Digitools. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <a className="hover:text-white cursor-pointer transition-colors">Privacy Policy</a>
            <a className="hover:text-white cursor-pointer transition-colors">Terms of Service</a>
            <a className="hover:text-white cursor-pointer transition-colors">Cookies</a>
          </div>
        </div>

      </div>

    </div>
  );
};

export default FooterSection;