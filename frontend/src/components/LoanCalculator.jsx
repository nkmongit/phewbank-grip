import React, { useState } from 'react';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateLoan = (e) => {
    e.preventDefault();

    if (!loanAmount || !interestRate || !loanTerm) {
      alert('Please enter all fields.');
      return;
    }

    const principal = parseFloat(loanAmount);
    const annualInterestRate = parseFloat(interestRate);
    const numberOfPayments = parseFloat(loanTerm) * 12;

    if (
      isNaN(principal) ||
      isNaN(annualInterestRate) ||
      isNaN(numberOfPayments)
    ) {
      alert('Please enter valid numeric values.');
      return;
    }

    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const compoundFactor = Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const monthlyPaymentResult =
      (principal * monthlyInterestRate * compoundFactor) / (compoundFactor - 1);

    setMonthlyPayment(monthlyPaymentResult.toFixed(2));
  };

  return (
    <div className='bg-gradient-to-b from-background-200 to-background-300 p-6 rounded shadow-md'>
      <h3 className='text-lg font-semibold mb-2 text-primary-700'>
        Loan Calculator
      </h3>
      <form onSubmit={calculateLoan}>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Loan Amount ($)
            </label>
            <input
              type='number'
              step='0.01'
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className='border p-2 rounded w-full focus:outline-none focus:border-primary-500'
              required
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Annual Interest Rate (%)
            </label>
            <input
              type='number'
              step='0.01'
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className='border p-2 rounded w-full focus:outline-none focus:border-primary-500'
              required
            />
          </div>
        </div>
        <div className='mt-4'>
          <label className='block text-sm font-medium text-gray-700'>
            Loan Term (Years)
          </label>
          <input
            type='number'
            step='1'
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            className='border p-2 rounded w-full focus:outline-none focus:border-primary-500'
            required
          />
        </div>
        <button
          type='submit'
          className='bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600 mt-4 focus:outline-none'
        >
          Calculate
        </button>
      </form>
      {monthlyPayment !== null && (
        <p className='mt-4 text-gray-700'>Monthly Payment: {monthlyPayment}</p>
      )}
    </div>
  );
};

export default LoanCalculator;
