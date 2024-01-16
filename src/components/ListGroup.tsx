import { useState } from "react";
function ListGroup() {
  let items = ["London", "New York", "Paris", "Berlin", "Tokyo"];
  let SelectecIndex = 0; //London is selected
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  arr[0]; //variable(selectedIndex)
  arr[1]; //updater function

  //better way below
  const message = items.length === 0 && <p>No items found</p>;
  //const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List </h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              SelectecIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              SelectecIndex === index;
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
