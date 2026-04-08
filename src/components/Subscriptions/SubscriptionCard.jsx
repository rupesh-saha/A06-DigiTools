import React from 'react';
import { Check } from 'lucide-react';

const SubscriptionCard = ({item}) => {
  return (

    <div className={`card w-96 shadow h-full ${
      item.highlighted 
        ? "bg-linear-to-b from-[#4F39F6] to-[#9139F6] text-white" 
        : "bg-[#f9fafc] text-gray-900"
    }`}>
      
      {item.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFEDD5] text-[red] px-4 py-1 rounded-full text-sm font-semi shadow-md">
          Most Popular
        </div>
      )}

      <div className="card-body flex flex-col h-full p-5">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">{item.name}</h2>
          <p className={`text-sm mt-1 mb-6 ${item.highlighted ? "text-purple-100" : "text-[#627382]"}`}>
            {item.info}
          </p>
          
          <span className={item.highlighted  ? "text-purple-100" : "text-gray-800"}><span className="font-extrabold text-5xl">${item.price.amount}</span>/Month</span>


          <ul className="mt-8 flex flex-col gap-4">
            {item.features.map((list, index) => (
              <li key={index} className="flex items-center gap-3 text-sm font-medium">
                <Check size={18} className={item.highlighted  ? "text-white" : "text-[green]"} strokeWidth={3} />
                {list}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-10">
          <button className={`btn rounded-full btn-block border-none transition-transform hover:scale-105 active:scale-95 shadow-lg ${
            item.highlighted  
              ? "bg-white text-[#4F39F6] hover:bg-gray-100" 
              : "bg-linear-to-r from-[#4F39F6] to-[#9139F6] text-white"
          }`}>
            {item.btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;