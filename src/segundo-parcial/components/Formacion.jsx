const estudios = [
  {
    titulo: "Ingeniería de Sistemas (en curso)",
    institucion: "Universidad Francisco de Paula Santander Ocaña",
    anio: "2021 - Actualidad",
    color: "primary",
    icono: "bi-mortarboard-fill",
  },
  {
    titulo: "Gestión Contable e Información Financiera",
    institucion: "SENA, Ocaña",
    anio: "Certificado",
    color: "success",
    icono: "bi-calculator-fill",
  },
  {
    titulo: "Bachiller Académico",
    institucion: "Corporación de Educación Técnica del Oriente (Corporiente), Aguachica",
    anio: "2003 - 2008",
    color: "danger",
    icono: "bi-book-fill",
  },
];

const cursos = [
  { nombre: "Servicio al Cliente", detalle: "SENA · 48 horas · 2023" },
  { nombre: "Atención y Servicio al Ciudadano", detalle: "SENA · 48 horas · 2023" },
  { nombre: "Facilitar el servicio al cliente interno y externo", detalle: "SENA · 40 horas · 2020" },
  { nombre: "Fundamentación en gestión ambiental NTC ISO 14001", detalle: "SENA · 40 horas · 2016" },
];

function Formacion() {
  return (
    <section id="formacion" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Formación académica</h2>
        <div className="row g-4 mb-5">
          {estudios.map((e) => (
            <div className="col-12 col-md-4" key={e.titulo}>
              <div className={`card h-100 border-${e.color} shadow-sm`}>
                <div className={`card-header bg-${e.color} text-white`}>
                  <i className={`bi ${e.icono} me-2`}></i>{e.anio}
                </div>
                <div className="card-body">
                  <h5 className="card-title">{e.titulo}</h5>
                  <p className="card-text text-muted">{e.institucion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-center mb-3">Cursos y certificaciones</h3>
        <div className="row g-3">
          {cursos.map((c) => (
            <div className="col-12 col-md-6" key={c.nombre}>
              <div className="card border-warning h-100">
                <div className="card-body">
                  <h6 className="card-title mb-1">
                    <i className="bi bi-award-fill text-warning me-2"></i>{c.nombre}
                  </h6>
                  <small className="text-muted">{c.detalle}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Formacion;