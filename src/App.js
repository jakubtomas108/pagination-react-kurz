import React, { useState, useEffect } from "react";

const transactionsList = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19
];

const App = () => {
    const [transactions] = useState(transactionsList);
    const [transactionToDisplay, setTransactionsToDisplay] = useState(
        transactions
    );

    useEffect(() => {
        setPagination(0);
    }, []);

    const setPagination = pageNumber => {
        setTransactionsToDisplay(
            transactions.slice(pageNumber * 4, pageNumber * 4 + 4)
        );
    };

    const getButtons = () => {
        return Array(Math.round(transactions.length / 4)).fill();
    };

    return (
        <div>
            <p>{transactionToDisplay.map(transaction => `${transaction},`)}</p>

            {getButtons().map((_, index) => (
                <button onClick={() => setPagination(index)} key={index}>
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default App;
