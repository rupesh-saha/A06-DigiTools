import React from 'react';
import SubscriptionCards from './SubscriptionCards';

const subscriptionPromise = fetch('/subscription.json').then(res => res.json())

const Subscriptions = () => {
  return (
    <div className="py-18 md:py-27">

      <section className="lg:max-w-[88%] mx-auto flex flex-col items-center gap-5">

        <h1 className="text-5xl font-bold text-center px-5">Simple, Transparent Pricing</h1>
        <p className="font-medium text-[#627382] text-center px-7">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

        <SubscriptionCards subscriptionPromise={subscriptionPromise}></SubscriptionCards>
        
      </section>
      
    </div>
  );
};

export default Subscriptions;