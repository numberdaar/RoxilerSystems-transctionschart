
import React, { useState, useEffect } from 'react';
import { transactions } from '../data/transactionsData';

const TransactionsTable = () => {
    const [selectedMonth, setSelectedMonth] = useState('March');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(2); 

    const filteredTransactions = transactions.filter(transaction =>
        transaction.month === selectedMonth && 
        (transaction.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
         transaction.price.toString().includes(searchTerm))
    );

    const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
    const paginatedTransactions = filteredTransactions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div>
            <div className="flex items-center mb-4">
                <select 
                    value={selectedMonth} 
                    onChange={e => setSelectedMonth(e.target.value)} 
                    className="p-2 border rounded"
                >
                    {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(month => (
                        <option key={month} value={month}>{month}</option>
                    ))}
                </select>
                <input 
                    type="text" 
                    placeholder="Search Transactions" 
                    value={searchTerm} 
                    onChange={e => setSearchTerm(e.target.value)} 
                    className="p-2 border rounded ml-4"
                />
            </div>

            <table className="min-w-full border">
                <thead>
                    <tr>
                        <th className="border p-2">Title</th>
                        <th className="border p-2">Description</th>
                        <th className="border p-2">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedTransactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td className="border p-2">{transaction.title}</td>
                            <td className="border p-2">{transaction.description}</td>
                            <td className="border p-2">${transaction.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-between mt-4">
                <button 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                    disabled={currentPage === 1}
                    className="p-2 bg-blue-500 text-white rounded"
                >
                    Previous
                </button>
                <button 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                    disabled={currentPage === totalPages}
                    className="p-2 bg-blue-500 text-white rounded"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default TransactionsTable;
