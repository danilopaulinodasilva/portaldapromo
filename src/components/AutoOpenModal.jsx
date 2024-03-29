import { useState } from "react";
import { Modal } from "react-bootstrap";

function AutoOpenModal() {
  const [show, setShow] = useState(true); // Inicia o estado como true

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
      <Modal.Body style={{ margin: "1rem" }}>
        <form>
          <h3 className="form-label mb-4" style={{ marginTop: "-50px" }}>
            Cadastre-se e fique por dentro
            <br />
            de todas as promoções!
          </h3>

          <div className="input-group mb-3 mt-5">
            <input
              type="text"
              id="newsEmail"
              name="newsEmail"
              className="form-control form-control-lg"
              placeholder="Insira o seu melhor e-mail..."
              aria-label="Insira o seu melhor e-mail..."
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-primary btn-lg"
              type="submit"
              name="submitBtn"
              id="submitBtn"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default AutoOpenModal;
