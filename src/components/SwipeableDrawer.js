import { Button, Offcanvas } from "react-bootstrap";
import { useState, ReactNode } from "react";

const SwipeableDrawer = ({
  children,
  title,
  open,
  onClose,
  onSave,
  ...props
}) => {
  const handleClose = () => {
    onClose();
  };

  const handleSave = () => {
    onSave();
    handleClose();
  };

  return (
    <>
      <Offcanvas show={open} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{children}</Offcanvas.Body>
        {onSave && (
          <div style={{ textAlign: "right", padding: "10px" }}>
            <Button variant="primary" onClick={handleSave}>
              Done
            </Button>
          </div>
        )}
      </Offcanvas>
    </>
  );
};

export default SwipeableDrawer;
