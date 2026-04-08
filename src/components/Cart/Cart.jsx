import React from 'react';
import { Trash2 } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';


const Cart = ({cart, setCart}) => {

  if (cart.length === 0) {
    return (
      <section className="md:max-w-[88%] md:mx-auto p-8 rounded-xl flex flex-col gap-4 border border-zinc-100 shadow mx-3 mb-10">
         <h2 className="text-2xl font-bold">Your Cart</h2>
         <h1 className="mt-10 text-gray-500 text-3xl text-center font-extrabold py-13">Cart is empty</h1>
      </section>
    );
  }

  let total = 0;

  const deleteCart = (item) => {
    const filteredCart = cart.filter(items => items !== item );
    setCart(filteredCart);
    total = Number(total) - Number(item.price);
    toast("Deleted item Cart");
  }

  cart.forEach(item => {
    total += Number(item.price);
  });

  const clearCart = () => {
    const clearedCart = [];
    setCart(clearedCart);
    toast("Deleted item Cart");
  }

  
    

  return (

    <section className="md:max-w-[88%] md:mx-auto p-8 rounded-xl flex flex-col gap-4 border border-zinc-100 shadow mx-3 mb-10">

      <h2 className="text-2xl font-bold">Your Cart</h2>

          {cart.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-50"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm border border-gray-100">
                  <img src={item.logo} alt="" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-500 text-sm">${item.price}</p>
                </div>
              </div>
              <button onClick={() => deleteCart(item)} className="text-pink-500 hover:text-pink-900 font-medium text-sm transition-colors">
                Remove
              </button>
            </div>
          ))}


      <div className="mt-3 pt-6 border-t border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-800 font-medium">Total:</span>
            <span className="text-3xl font-bold text-gray-900">${total}</span>
          </div>

          <button onClick={clearCart} className="w-full btn btn-primary hover:bg-[#6D28D9] text-white font-semibold py-4 rounded-full transition-all shadow-lg shadow-purple-200 hover:scale-103 active:scale-96">
            Proceed To Checkout
          </button>
      </div>
        

    </section>
  );
};

export default Cart;