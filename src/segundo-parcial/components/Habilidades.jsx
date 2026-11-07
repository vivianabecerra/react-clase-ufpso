const tecnicas = [
  { nombre: "React y Bootstrap", nivel: 65, color: "primary" },
  { nombre: "Kardex e inventarios", nivel: 85, color: "success" },
  { nombre: "Facturación y registro contable", nivel: 80, color: "warning" },
  { nombre: "Git y GitHub", nivel: 55, color: "danger" },
];

const blandas = [
  { nombre: "Servicio al cliente", color: "primary" },
  { nombre: "Responsabilidad", color: "success" },
  { nombre: "Organización", color: "warning" },
  { nombre: "Trabajo en equipo", color: "danger" },
];

function Habilidades() {
  return (
    <section id="habilidades" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Habilidades</h2>
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <h4 className="mb-3">Técnicas</h4>
            {tecnicas.map((h) => (
              <div className="mb-3" key={h.nombre}>
                <div className="d-flex justify-content-between">
                  <span>{h.nombre}</span>
                  <span>{h.nivel}%</span>
                </div>
                <div className="progress">
                  <div
                    className={`progress-bar bg-${h.color}`}
                    role="progressbar"
                    style={{ width: `${h.nivel}%` }}
                    aria-valuenow={h.nivel}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-12 col-md-6">
            <h4 className="mb-3">Blandas</h4>
            {blandas.map((h) => (
              <span key={h.nombre} className={`badge bg-${h.color} fs-6 me-2 mb-2 p-2`}>
                {h.nombre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;