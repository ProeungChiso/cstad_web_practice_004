
'use client';

import { Card } from 'flowbite-react';
import customer from '../../assets/images/customer.png';

function FeedbackCard() {
  return (
    <Card href="#" className="lg:max-w-sm md:max-w-sm max-w-[300px]">
    <div className='flex justify-center rounded-full overflow-hidden'>
        <img src={customer} alt="" className='w-[120px] h-[120px]'/>
    </div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
        Mr/Ms Name
      </h5>
      <p className="font-normal text-gray-700">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Hic ullam labore facere in cum adipisci quae asperiores! 
        Placeat nisi asperiores necessitatibus...
        
      </p>
    </Card>
  );
}

export default FeedbackCard;
