import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <nav className="menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Equipo</a>
            </li>
            <li>
              <a href="/">Servicios</a>
            </li>
            <li>
              <a href="/">Contacto</a>
            </li>
          </ul>
        </nav>
        <img src="/public/violeta.png" className="imgVioleta" alt="" />
        <img src="/public/brillos.png" className="imgBrillos" alt="" />
        <div className="titulo">
          <h1>
            Hablemos sobre Género <br /> y Tecnología
          </h1>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row ">
            <div className="col-1">
              <img
                src="/public/im-2.jpg"
                alt="imagen ilustrativa brecha de género"
                className="imagenColumna"
              />
            </div>
            <div className="col-2">
              <h3>
                Información sobre la realidad de la brecha de género en IT
              </h3>
              <p>
                En esta charla presentamos Información sobre la realidad, cuál
                es la presencia femenina en el rubro IT, en qué áreas técnicas
                nos desempeñamos, presentamos la brecha de género visible no
                solo en el mercado local sino internacional. Luego, pasamos a
                hablar de sesgos y el impacto que tienen en la Tecnología que
                construimos, que por supuesto afecta a la sociedad toda.
              </p>
            </div>
          </div>
          <div className="row ">
            <div className="col-1">
              <h3>Accionables</h3>
              <p>
                Finalmente, dejamos una serie de propuestas, porque entendemos
                que solamente señalar un problema no construye y estamos para
                construir en comunidad, le llamamos <br /> «Guía de consejos»,
                revelamos qué podemos hacer para trabajar sobre estos sesgos y
                construir tecnología que nos incluya a todas y todos.
              </p>
            </div>
            <div className="col-2">
              <img
                src="/public/img-1.png"
                alt="imagen ilustrativade accionables"
                className="imagenColumna"
              />
            </div>
          </div>
        </div>
        <div className="inscription">
          <h4>Inscribite a las charlas</h4>
          <small>
            Las charlas no tienen costos pero si cupos limitados.Inscribite a la
            proxima a través del siguiente link
          </small>
          <button>Quiero inscribirme</button>
        </div>
      </div>
      <div className="footer">
        <small>
          © Mujeres IT copyrigth 2022. Todos los derechos reservados
        </small>
      </div>
    </>
  );
}

export default App;
