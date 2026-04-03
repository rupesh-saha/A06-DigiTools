import React, { use } from 'react';
import CardItem from './CardItem';

const Card = ({cardsPromise, cart, setCart}) => {
  const cardData = use(cardsPromise);
  console.log(cardData);

  return (
    <div className="product-card md:max-w-[88%] mx-auto gap-7 grid grid-cols-1 md:grid-cols-3 md:mb-28 px-3">

      {
        cardData.map((item) => <CardItem key={item.id} item={item} cart={cart} setCart={setCart}></CardItem>)
      }

      
    </div>
  );
};

export default Card;