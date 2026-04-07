import React from 'react';
import { User } from 'lucide-react';

const GetStartedCard = ({item}) => {
  return (
    <div className="relative flex flex-col items-center rounded-xl border border-zinc-100 bg-white p-12 text-center shadow-sm">
      
      {/* Number Badge */}
      <div className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#7C3AED] text-sm font-semibold text-white">
        {item.step}
      </div>

      {/* Icon Container */}
      <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-[#F5F3FF]">
        <img src={item.icon}></img>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-zinc-900">
          {item.title}
        </h3>
        <p className="text leading-relaxed text-zinc-500">
          {item.description}
        </p>
      </div>
      
    </div>
  );
};

export default GetStartedCard;