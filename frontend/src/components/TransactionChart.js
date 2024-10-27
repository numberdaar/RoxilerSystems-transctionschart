
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { transactions } from '../data/transactionsData';

const TransactionsChart = ({ selectedMonth }) => {
    const filteredTransactions = transactions.filter(transaction => transaction.month === selectedMonth);

    const priceRanges = [
        { range: '0-50', count: filteredTransactions.filter(t => t.price <= 50).length },
        { range: '51-100', count: filteredTransactions.filter(t => t.price > 50 && t.price <= 100).length },
        { range: '101-150', count: filteredTransactions.filter(t => t.price > 100 && t.price <= 150).length },
        { range: '151-200', count: filteredTransactions.filter(t => t.price > 150 && t.price <= 200).length },
       
    ];

    const data = {
        labels: priceRanges.map(range => range.range),
        datasets: [{
            label: 'Number of Items',
            data: priceRanges.map(range => range.count),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
        }],
    };

    return (
        <div className="p-4">
            <Bar data={data} />
        </div>
    );
};

export default TransactionsChart;
