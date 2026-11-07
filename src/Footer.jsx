import { useState } from 'react';

function Footer() {
  const [form, setForm] = useState({ nombre: '', correo: '', mensaje: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', form);
    alert('¡Mensaje enviado!');
    setForm({ nombre: '', correo: '', mensaje: '' });
  };

  return (
    <footer id="contacto" className="bg-dark text-white pt-5">
      <div className="container">
        <h3 className="text-center text-warning mb-4 d-flex justify-content-center align-items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
          </svg>
          Contáctame
        </h3>

        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" name="nombre" className="form-control" value={form.nombre} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Correo</label>
                <input type="email" name="correo" className="form-control" value={form.correo} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea name="mensaje" rows="3" className="form-control" value={form.mensaje} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-success w-100">Enviar mensaje</button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-danger text-center py-3 mt-5">
        <small>© 2026 Juan Pérez Gómez - Todos los derechos reservados</small>
      </div>
    </footer>
  );
}

export default Footer;