"use client"

import React, { useState, useEffect } from 'react';
import styles from './TradeBook.module.css'; // Add your CSS here

type Trade = {
  product: string;
  price: string;
  volume: number;
  isBuy: boolean;
  time: string;
};

const tradableProducts = [
  { name: 'H100 GPU', minPrice: 100000, maxPrice: 102000 },
  { name: 'A100 GPU', minPrice: 1800, maxPrice: 1900 },
  { name: 'RTX3070 GPU', minPrice: 0.06, maxPrice: 0.08 },
];

const generateRandomTrade = (): Trade => {
  const product = tradableProducts[Math.floor(Math.random() * tradableProducts.length)];
  const price = (Math.random() * (product.maxPrice - product.minPrice) + product.minPrice).toFixed(2);
  const volume = Math.floor(Math.random() * 50000 + 100); // Random volume between 100 and 50000
  const isBuy = Math.random() > 0.5;
  return {
    product: product.name,
    price,
    volume,
    isBuy,
    time: new Date().toLocaleTimeString(),
  };
};

const TradeBook = () => {
  const [trades, setTrades] = useState<Trade[]>([]); // Correctly typed state

  useEffect(() => {
    const interval = setInterval(() => {
      const newTrade = generateRandomTrade();
      setTrades((prevTrades) => [newTrade, ...prevTrades.slice(0, 49)]); // Limit to 50 trades for performance
    }, 1000); // Generate a new trade every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.tradeBook}>
      <div className={styles.header}>
        <span>Product</span>
        <span>Price</span>
        <span>Volume</span>
        <span>Time</span>
        <span>Type</span>
      </div>
      <div className={styles.trades}>
        {trades.map((trade, index) => (
          <div key={index} className={`${styles.trade} ${trade.isBuy ? styles.buy : styles.sell}`}>
            <span>{trade.product}</span>
            <span>{trade.price}</span>
            <span>{trade.volume}</span>
            <span>{trade.time}</span>
            <span>{trade.isBuy ? 'Buy' : 'Sell'}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeBook;
