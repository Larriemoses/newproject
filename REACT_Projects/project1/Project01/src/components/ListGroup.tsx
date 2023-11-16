// import { Fragment, useState } from "react";
import { useState } from "react";


function ListGroup() {
  let items = ["Laptop", "Disk", "Router", "Phone", "Modem"];
  const [selectedIndex, setSelectedIndex] = useState(-1);


  // Event handler
  
  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No Item found</p> : null} */}
      {items.length === 0 && <p>No Item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {setSelectedIndex(index), console.log(index, item);}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
