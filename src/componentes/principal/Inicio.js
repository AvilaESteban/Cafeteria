import React from "react";
import "./inicio.css";
import Banner from "../common/Banner";

const Inicio = () => {
  return (
    <>
      <Banner />

      <body className="body-in">
        <section class="hero-in">
          <div class="container-in flex-in">
            <div class="hero-title-in">
              <h1 className="h1-in p-3 ">
                Nuestro Cafe es <span>Unico</span>
              </h1>
            </div>
            <div class="hero-text-in p-5">
              <p>
                Desde 1933 tostamos nuestro propio café. Lo cuidamos desde la
                selección de sus granos, hasta la taza, conservando el amor y el
                respeto que tenemos por lo que hacemos, desde el primer día. Por
                eso nuestro café es ÚNICO.
              </p>
            </div>
          </div>
        </section>

        <section class="features-in p-3">
          <div class="container-in flex-in">
            <div class="features-col-in">
              <h2 className="h2-in my-2 p-3">Selecccionamos</h2>
              <p className="my-3">
                A través de nuestro proceso exclusivo de tostación, logramos
                resaltar las notas y características propias de los diferentes
                granos.{" "}
              </p>
            </div>
            <div class="features-col-in">
              <h2 className="h2-in my-2  p-3">Tostamos</h2>
              <p className="my-3">
                Un aroma pleno, con notas de chocolate, pan tostado, miel y
                caramelo y un sabor con cuerpo, con un toque de frescura, es lo
                que hace inconfundible a un Café nuestro{" "}
              </p>
            </div>
            <div class="features-col-in ">
              <h2 className="h2-in my-2 p-3">Envasamos</h2>
              <p className=" my-3">
                Los mejores granos de cafe que son distribuidos a lo largo y
                ancho de nuestro pais y el mundo{" "}
              </p>
            </div>
          </div>
        </section>
        <br></br>
        <section class="main-in">
          <div class="container-in flex-in ">
            <div class="primary-content-in ">
              <h2 className="my-2 p-3">Cuál es la misión de Café Break?</h2>
              <p className="h2-in ">
                Café Break es una empresa Argentina de café fundada por Atilano
                Break. ... La misión de la empresa es elaborar los mejores
                productos y así ofrecer un excelente servicio contando con un
                personal capacitado para brindar la principal atención a los
                clientes.
              </p>
              <img
                className="img-in"
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhZmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <p>
                ¿Dónde nació Café Break? La historia de Café Break empieza en
                1933 cuando Atiliano y Justina llegaron a Buenos Aires desde
                Asturias, al norte de España. Él empezó a trabajar en un
                tostadero hasta que compró su propio local en la calle
                Talcahuano
              </p>
            </div>
            <div class="sidebar-in -y-2">
              <div class="sidebar-col-in">
                <h2>Que el café?</h2>
                <p>
                  El café es la bebida que se obtiene a partir de los granos
                  tostados y molidos de los frutos de la planta del café
                  (cafeto).
                </p>
              </div>
              <div class="sidebar-col-in">
                <h2>Beneficios del cafe</h2>
                <p>
                  Ayuda a quemar grasas, Aporta nutrientes, Fuente de
                  antioxidantes, Disminuye la probabilidad de contraer
                  enfermedades, Protege el corazón.
                </p>
              </div>
              <div class="sidebar-col-in">
                <h2>Tipos de cafe</h2>
                <p>
                  Café espresso, Café americano, Café capuccino, Café latte,
                  Café moka, Café caramel macchiato.
                </p>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
};

export default Inicio;
