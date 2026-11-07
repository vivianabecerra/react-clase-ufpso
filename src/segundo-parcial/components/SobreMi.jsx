function SobreMi() {
  return (
    <section id="sobre-mi" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Sobre mí</h2>
        <img
          src="https://picsum.photos/id/180/1200/250"
           alt="Banner"
            className="img-fluid rounded mb-4 w-100"
              />
         <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="p-3 border border-primary rounded h-100">
              <h5 className="text-primary"><i className="bi bi-person-fill me-2"></i>Descripción</h5>
              <p className="mb-0">
                Persona responsable y organizada. Estudio Ingeniería de Sistemas y he
                trabajado en almacén, atención al cliente y manejo de facturas e inventarios.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="p-3 border border-success rounded h-100">
              <h5 className="text-success"><i className="bi bi-bullseye me-2"></i>Objetivos laborales</h5>
              <ul className="mb-0">
                <li>Desempeñarme en el área de desarrollo de software</li>
                <li>Combinar mi formación contable con la tecnología</li>
                <li>Seguir creciendo profesionalmente</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="p-3 border border-warning rounded h-100">
              <h5 className="text-warning"><i className="bi bi-briefcase-fill me-2"></i>Experiencia</h5>
              <ul className="mb-0">
                <li><strong>ESPO S.A. E.S.P.</strong>: pasante SENA en almacén, manejo de Kardex e inventario (2023)</li>
                <li><strong>Transalber</strong>: secretaria, atención al cliente y registro de facturas (2016)</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="p-3 border border-danger rounded h-100">
              <h5 className="text-danger"><i className="bi bi-star-fill me-2"></i>Fortalezas e intereses</h5>
              <ul className="mb-0">
                <li>Responsabilidad y orden</li>
                <li>Atención al cliente</li>
                <li>Desarrollo web y tecnología</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;