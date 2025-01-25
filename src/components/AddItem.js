import React, { useState, useContext } from 'react';
import { InventoryContext } from '../context/InventaryContext';

const AddItem = () => {
  const { items, setItems } = useContext(InventoryContext);
  const [newItem, setNewItem] = useState({ name: '', category: '', quantity: '' });

  const handleAdd = () => {
    setItems([...items, { ...newItem, id: Date.now(), quantity: Number(newItem.quantity) }]);
    setNewItem({ name: '', category: '', quantity: '' });
  };

  return (
    <div className="add-item">
      <input
        type="text"
        placeholder="Name"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Category"
        value={newItem.category}
        onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={newItem.quantity}
        onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
      />
      <button onClick={handleAdd}>Add Item</button>
    </div>
  );
};

export default AddItem;


