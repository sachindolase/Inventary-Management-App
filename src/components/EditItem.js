import React, { useState, useContext } from 'react';
import { InventoryContext } from '../context/InventaryContext';

const EditItem = ({ item, onClose }) => {
  const { items, setItems } = useContext(InventoryContext);
  const [editedItem, setEditedItem] = useState({ ...item });

  const handleSave = () => {
    const updatedItems = items.map((i) =>
      i.id === item.id ? { ...editedItem, quantity: Number(editedItem.quantity) } : i
    );
    setItems(updatedItems);
    onClose();
  };

  return (
    <div className="edit-item">
      <input
        type="text"
        value={editedItem.name}
        onChange={(e) => setEditedItem({ ...editedItem, name: e.target.value })}
      />
      <input
        type="text"
        value={editedItem.category}
        onChange={(e) => setEditedItem({ ...editedItem, category: e.target.value })}
      />
      <input
        type="number"
        value={editedItem.quantity}
        onChange={(e) => setEditedItem({ ...editedItem, quantity: e.target.value })}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditItem;

