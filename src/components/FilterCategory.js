import React, { useContext, useState } from 'react';
import InventoryContext from '../context/InventaryContext';

function FilterCategory() {
  const { inventory } = useContext(InventoryContext);
  const [category, setCategory] = useState('');

  const filteredItems = category
    ? inventory.filter((item) => item.category === category)
    : inventory;

  return (
    <div>
      <label htmlFor="category">Filter by Category: </label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Category</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
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

export default FilterCategory;



