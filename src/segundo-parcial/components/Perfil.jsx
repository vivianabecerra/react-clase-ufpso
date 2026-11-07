function Perfil() {
  return (
    <section id="perfil" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="/foto.jpg"
              alt="Foto de perfil"
              className="rounded-circle border border-5 border-primary shadow"
               style={{ width: "220px", height: "220px", objectFit: "cover", objectPosition: "center 20%" }}
             />
          </div>
          <div className="col-12 col-md-8">
            <h1 className="display-5 fw-bold">Kheyla Viviana Becerra Sánchez</h1>
            <h2 className="h4 text-primary">Estudiante de Ingeniería de Sistemas</h2>
            <p className="text-muted mb-1">
              <i className="bi bi-briefcase me-2"></i>
               Tecnóloga en Gestión Contable e Información Financiera (SENA)
            </p>
            <p className="text-muted mb-1">
              <i className="bi bi-geo-alt-fill text-danger me-2"></i>Ocaña, Norte de Santander
            </p>
            <p className="text-muted">
              <i className="bi bi-envelope-fill text-warning me-2"></i>becerrakheyla1807@gmail.com
            </p>
            <p className="lead">
              Estudiante de Ingeniería de Sistemas en la Universidad Francisco de Paula
              Santander Ocaña, con experiencia en almacén, inventarios y servicio al cliente.
              Me interesa el desarrollo web y aprender nuevas tecnologías.
            </p>
            <a href="#footer" className="btn btn-success me-2">
              <i className="bi bi-send me-1"></i>Contáctame 
            </a>
            <a href="#formacion" className="btn btn-outline-primary">Ver formación</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perfil;<img
  src="/foto.jpg"
  alt="Foto de perfil"
  className="rounded-circle border border-5 border-primary shadow"
  style={{ width: "220px", height: "220px", objectFit: "cover", objectPosition: "center 20%" }}
/>

