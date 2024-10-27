
import React from 'react';
import { transactions } from '../data/transactionsData';

const TransactionsStatistics = ({ selectedMonth }) => {
    const filteredTransactions = transactions.filter(transaction => transaction.month === selectedMonth);
    
    const totalSales = filteredTransactions.reduce((acc, transaction) => acc + transaction.price, 0);
    const totalSoldItems = filteredTransactions.length;
    const totalNotSoldItems = 0;

    return (
        <div className="flex justify-around p-4 bg-gray-200 rounded">
            <div>Total Amount of Sale: ${totalSales}</div>
            <div>Total Sold Items: {totalSoldItems}</div>
            <div>Total Not Sold Items: {totalNotSoldItems}</div>
        </div>
    );
};

export default TransactionsStatistics;
