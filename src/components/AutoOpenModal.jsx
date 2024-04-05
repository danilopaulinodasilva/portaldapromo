import { useState } from "react";
import { Modal } from "react-bootstrap";

function AutoOpenModal() {
  const [show, setShow] = useState(true); // Inicia o estado como true

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
      <Modal.Body style={{ margin: "1rem" }}>
        <h3 className="form-label mb-4" style={{ marginTop: "-50px" }}>
          Cadastre-se e fique por dentro
          <br />
          de todas as promoções!
        </h3>

        <div
          id="mauticform_wrapper_guiadapromocapturadeemail"
          className="mauticform_wrapper"
        >
          <form
            autoComplete="false"
            role="form"
            method="post"
            action="https://neoleads.com.br/mautic/form/submit?formId=70"
            id="mauticform_guiadapromocapturadeemail"
            data-mautic-form="guiadapromocapturadeemail"
            encType="multipart/form-data"
          >
            <div
              className="mauticform-error"
              id="mauticform_guiadapromocapturadeemail_error"
            ></div>
            <div
              className="mauticform-message"
              id="mauticform_guiadapromocapturadeemail_message"
            ></div>
            <div className="mauticform-innerform">
              <div
                className="mauticform-page-wrapper mauticform-page-1"
                data-mautic-form-page="1"
              >
                <div
                  id="mauticform_guiadapromocapturadeemail_email"
                  data-validate="email"
                  data-validation-type="email"
                  className="mauticform-row mauticform-email mauticform-field-1 mauticform-required"
                >
                  <div className="input-group mb-3 mt-5">
                    <input
                      type="text"
                      id="mauticform_input_guiadapromocapturadeemail_email"
                      name="mauticform[email]"
                      className="form-control form-control-lg"
                      placeholder="Insira o seu melhor e-mail..."
                      aria-label="Insira o seu melhor e-mail..."
                      aria-describedby="button-addon2"
                    />

                    <span
                      className="mauticform-errormsg"
                      style={{ display: "none" }}
                    >
                      Isso é obrigatório.
                    </span>
                  </div>

                  <div
                    id="mauticform_guiadapromocapturadeemail_submit"
                    className="mauticform-row mauticform-button-wrapper mauticform-field-2"
                  >
                    <button
                      className="btn btn-primary btn-lg"
                      type="submit"
                      name="mauticform[submit]"
                      id="mauticform_input_guiadapromocapturadeemail_submit"
                    >
                      Cadastrar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <input
              type="hidden"
              name="mauticform[formId]"
              id="mauticform_guiadapromocapturadeemail_id"
              value="70"
            />
            <input
              type="hidden"
              name="mauticform[return]"
              id="mauticform_guiadapromocapturadeemail_return"
              value=""
            />
            <input
              type="hidden"
              name="mauticform[formName]"
              id="mauticform_guiadapromocapturadeemail_name"
              value="guiadapromocapturadeemail"
            />
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AutoOpenModal;
