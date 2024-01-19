import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      <ServiceCard
        title='Personal Savings'
        description='Start saving for your goals with our flexible and rewarding personal savings accounts.'
        imageUrl='https://via.placeholder.com/300'
      />
      <ServiceCard
        title='Investment Planning'
        description='Explore investment options and create a plan tailored to your financial aspirations.'
        imageUrl='https://via.placeholder.com/300'
      />
      <ServiceCard
        title='Home Loans'
        description='Achieve homeownership with our flexible and affordable home loan solutions.'
        imageUrl='https://via.placeholder.com/300'
      />
    </div>
  );
};

export default ServicesSection;
