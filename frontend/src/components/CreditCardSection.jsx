import React from 'react';

const CreditCardSection = () => {
  return (
    <div className='bg-white p-8 rounded shadow-md'>
      <h3 className='text-2xl font-semibold mb-4 text-primary-500'>
        Credit Cards
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Credit Card Design 1 */}
        <div className='border p-8 rounded-md flex flex-col justify-between bg-gradient-to-r from-primary-500 to-primary-700 text-white'>
          <div className='flex justify-end'>
            <img
              src='https://via.placeholder.com/50'
              alt='Card Logo'
              className='h-12'
            />
          </div>
          <div className='text-xl font-bold'>John Doe</div>
          <div className='flex justify-between'>
            <div>**** **** **** 1234</div>
            <div>Exp: 12/24</div>
          </div>
        </div>

        {/* Credit Card Design 2 */}
        <div className='border p-8 rounded-md flex flex-col justify-between bg-gradient-to-r from-secondary-500 to-secondary-700 text-white'>
          <div className='flex justify-end'>
            <img
              src='https://via.placeholder.com/50'
              alt='Card Logo'
              className='h-12'
            />
          </div>
          <div className='text-xl font-bold'>Jane Smith</div>
          <div className='flex justify-between'>
            <div>**** **** **** 5678</div>
            <div>Exp: 10/23</div>
          </div>
        </div>

        {/* Credit Card Design 3 */}
        <div className='border p-8 rounded-md flex flex-col justify-between bg-gradient-to-r from-accent-500 to-accent-700 text-white'>
          <div className='flex justify-end'>
            <img
              src='https://via.placeholder.com/50'
              alt='Card Logo'
              className='h-12'
            />
          </div>
          <div className='text-xl font-bold'>Bob Johnson</div>
          <div className='flex justify-between'>
            <div>**** **** **** 9876</div>
            <div>Exp: 08/25</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardSection;
