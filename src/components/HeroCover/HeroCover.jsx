import { Flame, Play } from 'lucide-react';
import React from 'react';
import banner from '../../assets/banner.png';


const HeroCover = () => {
  return (
    <main>
      <section className="lg:max-w-[88%] mx-auto my-10 md:my-20 flex gap-15 items-center flex-col md:flex-row px-6">

        <div className="info-card flex-1 text-center md:text-left">

          <span className="font-medium py-2 px-4 bg-[#E1E7FF] text-[#7028f8] rounded-full inline-flex gap-1 items-center"><Flame size={18}></Flame>New: AI-Powered Tools Available</span>

          <h1 className="font-extrabold text-[#101727] md:leading-18 my-4 text-6xl md:text-6xl">Supercharge Your<br className="hidden md:block"></br> Digital Workflow</h1>

          <p className="text-[#627382] font-light mb-8">Access premium AI tools, design assets, templates, and productivity<br className="hidden md:block"></br> software—all in one place. Start creating faster today.<br className="hidden md:block"></br> Explore Products</p>

          <section className="flex gap-3 flex-col sm:flex-row">
            <a className="btn w-full sm:w-auto btn-primary rounded-full bg-linear-to-r from-[#4F39F6] to-[#9139F6] hover:scale-103 active:scale-97 transition">Explore Products</a>
            <a className="btn w-full sm:w-auto btn-outline btn-primary rounded-full hover:scale-110 active:scale-97 transition"><Play size={18}></Play>Watch Demo</a>
          </section>

        </div>

        <div className="img-card hidden md:block">
          <img src={banner} alt="" />
        </div>

      </section>

      <section className="bg-[#7028f8] py-6 md:py-8 mb-14 md:mb-32">
        <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0">
          
          <div className="flex flex-col items-center text-center md:flex-1 md:border-r border-white/30">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">50K+</h2>
            <p className="text-white/90 text-sm md:text-base font-medium mt-1">Active Users</p>
          </div>

          <div className="flex flex-col items-center text-center md:flex-1 md:border-r border-white/30">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">200+</h2>
            <p className="text-white/90 text-sm md:text-base font-medium mt-1">Premium Tools</p>
          </div>

          <div className="flex flex-col items-center text-center md:flex-1">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">4.9</h2>
            <p className="text-white/90 text-sm md:text-base font-medium mt-1">Rating</p>
          </div>

        </div>
      </section>
    </main>
  );
};

export default HeroCover;