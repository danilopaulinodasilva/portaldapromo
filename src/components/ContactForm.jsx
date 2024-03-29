import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    "your-name": "",
    "your-email": "",
    "your-subject": "", // Isso deve corresponder ao campo "Telefone"
    "your-message": "",
  });
  const [wasValidated, setWasValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setWasValidated(true);
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const formBody = new FormData();
      formBody.append("_wpcf7_unit_tag", "wpcf7-f69-p19-o1");
      for (const key in formData) {
        formBody.append(key, formData[key]);
      }

      try {
        const response = await fetch(
          "https://guiadaspromocoes.com.br/wp-json/contact-form-7/v1/contact-forms/69/feedback",
          {
            method: "POST",
            body: formBody,
          }
        );
        const data = await response.json();
        if (data.status === "mail_sent") {
          alert("Mensagem enviada com sucesso!");
          setFormData({
            "your-name": "",
            "your-email": "",
            "your-subject": "",
            "your-message": "",
          });
          setWasValidated(false);
        } else {
          alert("Falha ao enviar a mensagem.");
        }
      } catch (error) {
        console.error("Erro ao enviar a mensagem:", error);
      }
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="mb-5" style={{ fontWeight: "bold" }}>
            Entre em contato
          </h1>
          <form
            className={`needs-validation ${
              wasValidated ? "was-validated" : ""
            }`}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="mb-3">
              <label htmlFor="your-name" className="form-label">
                Nome
              </label>
              <input
                type="text"
                className="form-control"
                id="your-name"
                name="your-name"
                value={formData["your-name"]}
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">Por favor, insira um nome.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="your-email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="your-email"
                name="your-email"
                value={formData["your-email"]}
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">
                Por favor, insira um email válido.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="your-subject" className="form-label">
                Telefone
              </label>
              <input
                type="text"
                className="form-control"
                id="your-subject"
                name="your-subject"
                value={formData["your-subject"]}
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">
                Por favor, insira um telefone.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="your-message" className="form-label">
                Mensagem
              </label>
              <textarea
                className="form-control"
                id="your-message"
                name="your-message"
                value={formData["your-message"]}
                onChange={handleChange}
                required
              ></textarea>
              <div className="invalid-feedback">
                Por favor, insira uma mensagem.
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
