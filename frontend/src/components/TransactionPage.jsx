import React, { useEffect, useState } from 'react';
import TransactionItem from './TransactionItem';
import Navbar from './Navbar';
import axios from 'axios';
import toast from 'react-hot-toast';

const TransactionPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    axios
      .get('http://localhost:3000/api/transactions/transactions')
      .then((response) => {
        // Set the fetched data to the state
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='h-screen'>
      <Navbar />
      <div className='container mx-auto p-4'>
        <div className='max-w-2xl mx-auto'>
          <h1 className='text-primary-700 text-3xl font-bold mb-4'>
            All Transactions
          </h1>

          {transactions.length === 0 ? (
            <div className='bg-white rounded-md p-4 shadow-md mb-8'>
              <h2 className='text-lg font-semibold mb-2'>
                No Transactions Yet
              </h2>
            </div>
          ) : (
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {transactions.map((transaction, index) => (
                <TransactionItem key={index} transaction={transaction} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
