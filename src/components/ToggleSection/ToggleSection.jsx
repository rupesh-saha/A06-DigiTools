import React from 'react';

const ToggleSection = ({toggle, setToggle}) => {

  const manageToggle = (value) => {
    if (value === "product") {
      setToggle("product");
      console.log(value);
    }
    else {
      setToggle("cart")
      console.log(value);
    }
  }

  return (
    <div className="space-y-4 lg:max-w-[88%] mx-auto flex flex-col items-center mb-10">

      <h1 className="font-extrabold text-5xl text-center">Premium Digital Tools</h1>

      <p className="text-medium text-[#627382] text-center">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>

      <div className="inline-flex items-center bg-white border border-zinc-100 rounded-full p-1.5 shadow-sm">
        <button onClick={()=> manageToggle("product")} className={`${toggle === "product" ? "btn-primary btn" : "btn"} px-10 py-3 rounded-full font-bold text-lg shadow-xl shadow-indigo-200/50 mr-1`}>
          Products
        </button>
        <button onClick={()=> manageToggle("cart")} className={`${toggle === "cart" ? "btn-primary btn" : "btn"} px-10 py-3 rounded-full font-bold text-lg`}>
          Cart
        </button>
      </div>
      
    </div>
  );
};

export default ToggleSection;