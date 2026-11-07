import { useState } from "react";

function Footer() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const manejarCambio = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    setEnviado(true);
    setForm({ nombre: "", correo: "", mensaje: "" });
  };

  return (
    <footer id="footer" className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <h4>Contáctame</h4>
            {enviado && (
              <div className="alert alert-success">¡Mensaje enviado correctamente!</div>
            )}
            <form onSubmit={manejarEnvio}>
              <input
                className="form-control mb-2"
                name="nombre"
                placeholder="Tu nombre"
                value={form.nombre}
                onChange={manejarCambio}
                required
              />
              <input
                className="form-control mb-2"
                type="email"
                name="correo"
                placeholder="Tu correo"
                value={form.correo}
                onChange={manejarCambio}
                required
              />
              <textarea
                className="form-control mb-2"
                name="mensaje"
                rows="3"
                placeholder="Tu mensaje"
                value={form.mensaje}
                onChange={manejarCambio}
                required
              ></textarea>
              <button type="submit" className="btn btn-success">Enviar</button>
            </form>
          </div>
          <div className="col-12 col-md-6 text-md-end">
            <h5>Kheyla Viviana Becerra Sánchez</h5>
            <p className="text-white-50">Ingeniería de Sistemas · UFPSO · Ocaña, Norte de Santander</p>
            <a href="https://github.com/vivianabecerra" className="text-white fs-3 me-3">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://linkedin.com" className="text-white fs-3 me-3">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="mailto:becerrakheyla1807@gmail.com" className="text-white fs-3">
              <i className="bi bi-envelope"></i>
            </a>
          </div>
        </div>
        <hr className="border-secondary" />
        <p className="text-center mb-0 small">
          © 2026 Kheyla Viviana Becerra Sánchez. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;