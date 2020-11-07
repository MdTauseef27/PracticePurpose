import React from "react";
export const Model = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Button variant="primary" onClick={handleShow}>
        Launch Form modal
      </Button>
    </div>
  );
};
