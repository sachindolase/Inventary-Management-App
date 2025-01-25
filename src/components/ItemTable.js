import React, { useContext, useState } from 'react';
import { InventoryContext } from '../context/InventaryContext';
import EditItem from './EditItem';

const ItemTable = () => {
  const { items, setItems } = useContext(InventoryContext);
  const [editingItem, setEditingItem] = useState(null);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="item-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className={item.quantity < 10 ? 'low-stock' : ''}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => setEditingItem(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingItem && (
        <EditItem item={editingItem} onClose={() => setEditingItem(null)} />
      )}
    </div>
  );
};

export default ItemTable;

