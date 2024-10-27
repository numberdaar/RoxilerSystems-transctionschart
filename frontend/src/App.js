import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionTable from './components/TransactionTable';
import TransactionStatistics from './components/TransactionStatistics.js';
import TransactionChart from './components/TransactionChart.js';

const App = () => {
  const [month, setMonth] = useState('03'); 
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  useEffect(() => {
    fetchTransactions();
  }, [month]);

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/transactions?month=${month}`);
      setTransactions(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Transaction Dashboard</h1>
      <select
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        className="my-4 p-2 border rounded"
      >
        {months.map((m) => (
          <option key={m} value={m.toString().padStart(2, '0')}>
            {new Date(0, m - 1).toLocaleString('default', { month: 'long' })}
          </option>
        ))}
      </select>

      <TransactionStatistics month={month} />
      <TransactionTable transactions={transactions} loading={loading} />
      <TransactionChart month={month} />
    </div>
  );
};

export default App;
