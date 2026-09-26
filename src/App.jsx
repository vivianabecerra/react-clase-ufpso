   
function Header() {
  return <h1>Tienda de Tecnología</h1>
}

function Producto() {
  return <p>Computador portátil - $2.000.000</p>
}

function Footer() {
  return <p>Contacto: tienda@gmail.com</p>
}
LUEGO SE PUEDE UNIR EN EL COMPONENTE PRINCIPAL

function App() {
  return (
    <>
      <Header />
      <Producto />
      <Footer />
    </>
  )
}
