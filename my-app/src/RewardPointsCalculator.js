import React, { useEffect, useState } from 'react';

function RewardPointsCalculator() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous API call to fetch transaction data
    const fetchTransactionData = () => {
      setTimeout(() => {
        const mockData = [
          { customerId: 1, amount: 120, date: '2023-10-01' },
          { customerId: 2, amount: 75, date: '2023-10-01' },
          { customerId: 1, amount: 90, date: '2023-11-01' },
          { customerId: 3, amount: 60, date: '2023-11-01' },
          { customerId: 2, amount: 150, date: '2023-12-01' },
          { customerId: 1, amount: 45, date: '2023-12-01' },
          { customerId: 3, amount: 80, date: '2023-12-01' },
          { customerId: 4, amount: 200, date: '2023-10-01' },
          { customerId: 4, amount: 50, date: '2023-11-01' },
          { customerId: 4, amount: 120, date: '2023-12-01' },
        ];

        setTransactions(mockData);
        setLoading(false);
      }, 1000); // Simulated delay of 1 second
    };

    fetchTransactionData();
  }, []);

  return (
    <div>
      <h1>Reward Points Calculator</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* Render your data here */}
          <ul>
            {transactions.map((transaction, index) => (
              <li key={index}>
                Customer ID: {transaction.customerId}, Amount: ${transaction.amount}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default RewardPointsCalculator;
