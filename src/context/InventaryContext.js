import React, { createContext, useState } from 'react';

export const InventoryContext = createContext();

const InventoryProvider = ({ children }) => {
  const [items, setItems] = useState([
    { id: 1, name: 'Lion', category: 'Animals', quantity: 10 },
    { id: 2, name: 'Tiger', category: 'Animals', quantity: 8 },
    { id: 3, name: 'Orange', category: 'Fruits', quantity: 20 },
    { id: 4, name: 'Apple', category: 'Fruits', quantity: 7},
  ]);

  return (
    <InventoryContext.Provider value={{ items, setItems }}>
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;


