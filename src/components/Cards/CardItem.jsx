import React, { useState } from 'react';
import { Check} from 'lucide-react';


const CardItem = ({item, cart, setCart}) => {
  const [isClicked, setIsClicked] = useState(false);

  const manageCart = () => {
    
    setIsClicked(true);
    let newCart = [...cart, item];
    setCart(newCart);
    console.log(cart);
  }

  return (
    <div className=" bg-white border border-zinc-100 rounded-4xl p-5 shadow">
      
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-full flex items-center justify-center text-2xl">
          <img src={item.logo} alt="" />
        </div>
        <span className={`${item.tag == "Best Seller" && "bg-[#FFF4E1] text-[#A67D2D]"} ${item.tag == "Popular" && "bg-[#e1e7ff] text-[#851df9]"} ${item.tag == "New" && "bg-[#dbfce7] text-[#0a883e]"} px-2 py-1.5 rounded-full text-xs font-bold`}>
          {item.tag}
        </span>
      </div>

      <h2 className="text-xl font-bold text-[#101727] mb-2">{item.name}</h2>
      <p className="text-[#627382] text-sm leading-relaxed mb-4">
        {item.description}
      </p>

      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-4xl font-bold text-[#101727]">${item.price}</span>
        <span className="text-[#627382] font-medium">/Mo</span>
      </div>

      <ul className="space-y-3 mb-6">
        
        {
          item.features.map(feature => 
            <li className="flex items-center gap-3 text-[#627382]">
            <Check size={18} className="text-[#059669]" strokeWidth={3} />
            <span className="text-sm font-medium">{feature}</span>
        </li>
          )
        }

        {/* <li className="flex items-center gap-3 text-[#627382]">
          <Check size={18} className="text-[#059669]" strokeWidth={3} />
          <span className="text-sm font-medium">Grammar checker</span>
        </li> */}
      </ul>

      <button onClick={manageCart} className={`w-full py-3 rounded-full btn btn-primary transition-opacity ${
      isClicked ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"}`}>
        {isClicked ? "Added to Cart" : "Buy Now"}
      </button>

    </div>
  );
};

export default CardItem;