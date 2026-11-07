function Titulos() {
  return (
    <section id="titulos" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-4 d-flex justify-content-center align-items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
          </svg>
          Mis Títulos
        </h2>

        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-primary h-100">
              <div className="card-header bg-primary text-white">Bachiller</div>
              <div className="card-body">
                <h5 className="card-title">Bachiller Académico</h5>
                <p className="card-text">Colegio Nacional, 2019.</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-success h-100">
              <div className="card-header bg-success text-white">Técnico</div>
              <div className="card-body">
                <h5 className="card-title">Técnico en Programación</h5>
                <p className="card-text">SENA, 2021.</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-warning h-100">
              <div className="card-header bg-warning text-dark">En curso</div>
              <div className="card-body">
                <h5 className="card-title">Ingeniería de Sistemas</h5>
                <p className="card-text">Universidad, 2022 - actualidad.</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-danger h-100">
              <div className="card-header bg-danger text-white">Certificación</div>
              <div className="card-body">
                <h5 className="card-title">Curso de React</h5>
                <p className="card-text">Plataforma en línea, 2025.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="alert alert-success mt-4 mb-0" role="alert">
          Actualmente cursando semestres avanzados con buen promedio académico.
        </div>
      </div>
    </section>
  );
}

export default Titulos;
