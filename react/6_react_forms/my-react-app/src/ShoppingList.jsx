import { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingListForm from "./ShoppingListForm";

function ShoppingList() {
  const [items, setItems] = useState([
    { id: uuid(), product: "Bananas", quantity: 12 },
    { id: uuid(), product: "Apples", quantity: 6 },
  ]);

  const addItem = (item) => {
    setItems((currItems) => {
      return [...currItems, { ...item, id: uuid() }];
    });
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.product} - {item.quantity}
          </li>
        ))}
      </ul>
      <hr />
      <ShoppingListForm addItem={addItem} />
    </div>
  );
}

export default ShoppingList;
