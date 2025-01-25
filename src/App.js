import React from 'react';
import InventoryProvider from './context/InventaryContext';
import AddItem from './components/AddItem';
import ItemTable from './components/ItemTable';
//import FilterCategory from './components/FilterCategory';
//import SortItem from './components/SortItem';
import './App.css';

const App = () => {
  return (
    <InventoryProvider>
      <div className="app">
        <h1>Inventory Management System</h1>
        <AddItem />
        <ItemTable />
      
      </div>
    </InventoryProvider>
  );
};


export default App;


