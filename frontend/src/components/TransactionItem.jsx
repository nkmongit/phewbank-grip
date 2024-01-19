import React from 'react';

const TransactionItem = ({ transaction }) => {
  const { sender, receiver, amount, timestamp } = transaction;

  return (
    <div className='mb-4'>
      <div className='rounded-md p-4 shadow-md bg-gradient-to-br from-primary-color-500 to-primary-color-700 text-primary-900'>
        <h2 className='text-lg font-semibold mb-2 text-primary-300 break-all'>
          Transaction ID: {transaction._id}
        </h2>
        <div className='mb-2'>
          <strong className='text-primary-500'>Sender:</strong>{' '}
          <span className='text-secondary-300'>
            {sender.firstName} {sender.lastName}
          </span>{' '}
          (Account No: {sender.accountNumber})
        </div>
        <div className='mb-2'>
          <strong className='text-primary-500'>Receiver:</strong>{' '}
          <span className='text-secondary-300'>
            {receiver.firstName} {receiver.lastName}
          </span>{' '}
          (Account No: {receiver.accountNumber})
        </div>
        <div className='mb-2'>
          <strong className='text-primary-500'>Amount:</strong>{' '}
          <span className='text-primary-800'>{amount} INR</span>
        </div>
        <div className='mb-2'>
          <strong className='text-primary-500'>Date:</strong>{' '}
          <span className='text-secondary-300'>
            {new Date(timestamp).toLocaleString().split(',')[0]}
          </span>
        </div>
        <div className='mb-2'>
          <strong className='text-primary-500'>Time:</strong>{' '}
          <span className='text-secondary-300'>
            {new Date(timestamp).toLocaleString().split(',')[1]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
