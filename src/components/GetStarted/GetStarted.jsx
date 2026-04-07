import React from 'react';
import GetStartedCards from './GetStartedCards';

const startedPromise = fetch('/getinfo.json').then(res => res.json())

const GetStarted = () => {
  return (
    <div className="bg-[#f9fafc] py-18 md:py-27">

      <section className="lg:max-w-[88%] mx-auto flex flex-col items-center gap-5">

        <h1 className="text-5xl font-bold text-center px-5">Get Started In 3 Steps</h1>
        <p className="font-medium text-[#627382] text-center px-7">Start using premium digital tools in minutes, not hours.</p>

        <GetStartedCards startedPromise={startedPromise}></GetStartedCards>


      </section>
      
    </div>
  );
};

export default GetStarted;