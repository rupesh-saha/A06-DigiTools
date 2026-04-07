import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-white pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="footer px-10 md:max-w-[88%] mx-auto pb-10 flex flex-col md:flex-row justify-between gap-10">
        
        {/* Logo and Description */}
        <aside className="max-w-xs">
          <h2 className="text-3xl font-bold mb-4">DigiTools</h2>
          <p className="text-[#627382] leading-relaxed">
            Premium digital tools for creators, professionals, and businesses. 
            Work smarter with our suite of powerful tools.
          </p>
        </aside>

        {/* Links Sections */}
        <div className="flex flex-wrap gap-12 md:gap-24">
          <nav className="flex flex-col gap-4">
            <h6 className="footer-title opacity-100 text-white capitalize text-base">Product</h6>
            <a className="link link-hover text-[#627382]">Features</a>
            <a className="link link-hover text-[#627382]">Pricing</a>
            <a className="link link-hover text-[#627382]">Templates</a>
            <a className="link link-hover text-[#627382]">Integrations</a>
          </nav>

          <nav className="flex flex-col gap-4">
            <h6 className="footer-title opacity-100 text-white capitalize text-base">Company</h6>
            <a className="link link-hover text-[#627382]">About</a>
            <a className="link link-hover text-[#627382]">Blog</a>
            <a className="link link-hover text-[#627382]">Careers</a>
            <a className="link link-hover text-[#627382]">Press</a>
          </nav>

          <nav className="flex flex-col gap-4">
            <h6 className="footer-title opacity-100 text-white capitalize text-base">Resources</h6>
            <a className="link link-hover text-[#627382]">Documentation</a>
            <a className="link link-hover text-[#627382]">Help Center</a>
            <a className="link link-hover text-[#627382]">Community</a>
            <a className="link link-hover text-[#627382]">Contact</a>
          </nav>
        </div>

        {/* Social Links */}
        <nav>
          <h6 className="footer-title opacity-100 text-white capitalize text-base mb-4">Social Links</h6>
          <div className="grid grid-flow-col gap-4">
            <a className="bg-white p-2 rounded-full text-black hover:bg-gray-200 transition-colors cursor-pointer">
              <Instagram size={20} />
            </a>
            <a className="bg-white p-2 rounded-full text-black hover:bg-gray-200 transition-colors cursor-pointer">
              <Facebook size={20} />
            </a>
            <a className="bg-white p-2 rounded-full text-black hover:bg-gray-200 transition-colors cursor-pointer">
              <Twitter size={20} />
            </a>
          </div>
        </nav>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-zinc-800 pt-8 px-10 md:max-w-[88%] mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-[#627382] gap-4">
        <p>© 2026 DigiTools. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;