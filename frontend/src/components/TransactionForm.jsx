import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import toast, { Toaster } from 'react-hot-toast';

const TransactionForm = () => {
  const [senderId, setSenderId] = useState('');
  const [receiverId, setReceiverId] = useState('');
  const [amount, setAmount] = useState(0);
  const [users, setUsers] = useState([]);
  const [selectedSender, setSelectedSender] = useState(null);
  const [selectedReceiver, setSelectedReceiver] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchSenderDetails = async () => {
      if (senderId) {
        try {
          const response = await axios.get(
            `http://localhost:3000/api/users/users/${senderId}`
          );
          setSelectedSender(response.data);
        } catch (error) {
          console.error('Error fetching sender details:', error);
        }
      } else {
        setSelectedSender(null);
      }
    };

    const fetchReceiverDetails = async () => {
      if (receiverId) {
        try {
          const response = await axios.get(
            `http://localhost:3000/api/users/users/${receiverId}`
          );
          setSelectedReceiver(response.data);
        } catch (error) {
          console.error('Error fetching receiver details:', error);
        }
      } else {
        setSelectedReceiver(null);
      }
    };

    fetchSenderDetails();
    fetchReceiverDetails();
  }, [senderId, receiverId]);

  const fetchUsers = () => {
    axios
      .get('http://localhost:3000/api/users/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };

  const handleTransaction = async (e) => {
    e.preventDefault();

    if (senderId === receiverId) {
      toast.error('Cannot send to the same person.');
      return;
    }

    if (Number(amount) <= 0) {
      toast.error('Amount must be greater than 0.');
      return;
    }

    try {
      await axios.post('http://localhost:3000/api/transactions/transaction', {
        sender: senderId,
        receiver: receiverId,
        amount: Number(amount),
      });

      toast.success('Transaction Successful');
    } catch (error) {
      console.error('Error:', error.response.data);
      toast.error('Transaction Failed');
    }
  };

  return (
    <div>
      <Navbar />
      <div className='bg-primary-200 min-h-screen flex items-center justify-center'>
        <div className='bg-primary-100 p-8 rounded shadow-md w-96'>
          <h2 className='text-2xl font-bold mb-4 text-primary-600'>
            Send Money
          </h2>
          <form onSubmit={handleTransaction} className='space-y-4'>
            <div>
              <label className='block mb-2 text-sm text-gray-600'>
                Sender ID:
                <select
                  value={senderId}
                  onChange={(e) => setSenderId(e.target.value)}
                  className='border p-2 rounded w-full focus:outline-none bg-secondary-50 focus:border-primary-500'
                >
                  <option className='bg-secondary-50' value=''>
                    Select Sender
                  </option>
                  {users.map((user) => (
                    <option
                      key={user._id}
                      value={user._id}
                      className='text-gray-800'
                    >
                      {user.accountNumber} - {user.firstName}
                    </option>
                  ))}
                </select>
                {selectedSender && (
                  <div className='mt-2 p-2 bg-secondary-50 rounded'>
                    <p className='text-sm text-gray-800'>
                      Sender Balance: INR {selectedSender.balance.toFixed(2)}
                    </p>
                  </div>
                )}
              </label>
            </div>

            <div>
              <label className='block mb-2 text-sm text-gray-600'>
                Receiver ID:
                <select
                  value={receiverId}
                  onChange={(e) => setReceiverId(e.target.value)}
                  className='border p-2 rounded w-full focus:outline-none bg-secondary-50 focus:border-primary-500'
                >
                  <option value=''>Select Receiver</option>
                  {users.map((user) => (
                    <option
                      key={user._id}
                      value={user._id}
                      className='text-gray-800'
                    >
                      {user.accountNumber} - {user.firstName}
                    </option>
                  ))}
                </select>
                {selectedReceiver && (
                  <div className='mt-2 p-2 bg-secondary-50 rounded'>
                    <p className='text-sm text-gray-800'>
                      Receiver Balance: INR{' '}
                      {selectedReceiver.balance.toFixed(2)}
                    </p>
                  </div>
                )}
              </label>
            </div>

            <div>
              <label className='block mb-2 text-sm text-gray-600'>
                Amount:
                <input
                  type='number'
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className='border p-2 rounded w-full focus:outline-none bg-secondary-50 focus:border-primary-500'
                />
              </label>
            </div>

            <div>
              <button
                type='submit'
                className='bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600 w-full focus:outline-none'
              >
                Send Money
              </button>
            </div>
          </form>
          <Toaster position='bottom-right' />
        </div>
      </div>
    </div>
  );
};

export default TransactionForm;
