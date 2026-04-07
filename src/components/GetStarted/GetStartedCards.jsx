import React, { use } from 'react';
import GetStartedCard from './GetStartedCard';

const GetStartedCards= ({startedPromise}) => {
  const startedData = use(startedPromise);
  console.log(startedData);

  return (
    <div className="grid grid-cols-1 gap-5 md:gap-7 p-3 md:grid-cols-3 mt-6">

      {
        startedData.map((item) => <GetStartedCard key={item.id} item={item}></GetStartedCard>)
      }
      
    </div>
  );
};

export default GetStartedCards;