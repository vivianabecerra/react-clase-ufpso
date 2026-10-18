
import Header from "./Header";
import Perfil from "./Perfil";
import Tarjeta from "./Tarjeta";
import DatoCurioso from "./DatoCurioso";
import Footer from "./Footer";

function Playground() {
  return (
    <>
      <Header />
      <Perfil />

      <main className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Tarjeta />
          </div>
        </div>
      </main>

      <DatoCurioso />
      <Footer />
    </>
  );
}

export default Playground;
