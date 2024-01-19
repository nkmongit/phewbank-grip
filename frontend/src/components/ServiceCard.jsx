import React from 'react';

const ServiceCard = ({ title, description, imageUrl }) => {
  return (
    <div className='bg-white p-6 rounded shadow-md'>
      <img
        src={imageUrl}
        alt={title}
        className='mb-4 w-full h-40 object-cover rounded'
      />
      <h3 className='text-lg font-semibold mb-2'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  );
};

export default ServiceCard;
