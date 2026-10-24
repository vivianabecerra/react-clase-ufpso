function Perfil() {
  return (
    <header>
      {/* Navegación */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#inicio">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
            </svg>
            Mi Hoja de Vida
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#inicio">Perfil</a></li>
              <li className="nav-item"><a className="nav-link" href="#titulos">Títulos</a></li>
              <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Perfil general */}
      <section id="inicio" className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
              <img
                src="https://picsum.photos/300/300"
                alt="Foto de perfil"
                className="img-fluid rounded-circle border border-5 border-primary shadow"
              />
            </div>
            <div className="col-12 col-md-8">
              <h1 className="display-5 text-primary">Juan Pérez Gómez</h1>
              <h4 className="text-secondary">Estudiante de Ingeniería de Sistemas</h4>
              <p className="lead">
                Apasionado por el desarrollo web, las bases de datos y el aprendizaje continuo.
                Busco aplicar mis conocimientos en proyectos reales con React y Bootstrap.
              </p>
              <span className="badge bg-primary me-2">React</span>
              <span className="badge bg-success me-2">JavaScript</span>
              <span className="badge bg-warning text-dark me-2">Bootstrap</span>
              <span className="badge bg-danger">Git</span>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Perfil;