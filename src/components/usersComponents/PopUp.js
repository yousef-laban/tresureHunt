import { useParams } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const PopUp = (props) => {
  let message = useParams().message;
  let history = useHistory();

  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    history.push("/");
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {message === "signin" ? (
          <Modal.Body>You Signed In !</Modal.Body>
        ) : (
          <Modal.Body>You Signed Up !</Modal.Body>
        )}

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PopUp;
