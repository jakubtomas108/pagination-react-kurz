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
    16
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

    return (
        <div>
            <p>{transactionToDisplay.map(transaction => `${transaction},`)}</p>
            <button onClick={() => setPagination(0)}>1</button>
            <button onClick={() => setPagination(1)}>2</button>
            <button onClick={() => setPagination(2)}>3</button>
            <button onClick={() => setPagination(3)}>4</button>
        </div>
    );
};

export default App;
