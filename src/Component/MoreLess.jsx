import React, { useState } from "react";
import { Button } from "react-bootstrap";
export const MoreLess = () => {
  const MAX_ITEMS = 2;
  const [isOpen, setIsOpen] = useState(false);
  const items = ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6"];
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const getRenderedItem = () => {
    if (isOpen) {
      return items;
    }
    return items.slice(0, MAX_ITEMS);
  };
  return (
    <div>
      {" "}
      {getRenderedItem().map((item, id) => (
        <div key={id}>{item}</div>
      ))}{" "}
      <Button onClick={toggle}>{isOpen ? "less" : "more"} </Button>
    </div>
  );
};
