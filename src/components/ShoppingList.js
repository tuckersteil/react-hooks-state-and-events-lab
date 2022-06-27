import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCat] = useState([...items])

    function changeCat(event){
      let newCat = event.target.value
      console.log(newCat)
      //setCat(newCat)
      const finalCats = items.filter((cat) => cat.category === newCat)
      setCat(finalCats)
  }
    return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={changeCat} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
