import React, { use } from 'react';
import SubscriptionCard from './SubscriptionCard';

const SubscriptionCards = ({subscriptionPromise}) => {

  const subscriptionData = use(subscriptionPromise);
  console.log(subscriptionData);

  return (
    <div className="grid grid-cols-1 gap-10 md:gap-7 p-3 md:grid-cols-3 mt-6">

      {
        subscriptionData.map((item) => <SubscriptionCard key={item.id} item={item}></SubscriptionCard>)
      }
      
    </div>
  );
};

export default SubscriptionCards;