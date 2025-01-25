import React, { useContext } from 'react';
import InventoryContext from '../context/InventaryContext';

function SortItem() {
  const { inventory } = useContext(InventoryContext);

  const sortedItems = [...inventory].sort((a, b) => a.quantity - b.quantity);

  
  return (
    <div>
      <h3>Sorted Items by Quantity</h3>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Category</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item) => (
            <tr key={item.id} style={{ color: item.quantity < 10 ? 'red' : 'black' }}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SortItem;


