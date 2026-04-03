import React, { Suspense } from 'react';
import Card from './Card';

const cardsPromise = fetch('/cardinfo.json').then(res => res.json())


const Cards = ({cart, setCart}) => {


  return (
    <div>

      <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>

      <Card cart={cart} setCart={setCart} cardsPromise={cardsPromise}></Card>

      </Suspense>
      
    </div>
  );
};

export default Cards;