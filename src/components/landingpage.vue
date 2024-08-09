<template>
  <header>
    <nav>
      <div class="left-side">
        <a
          href="https://www.arconstrucciones.com/"
          style="display: flex; padding: 0px 20px 0 0; align-items: center"
        >
          <img
            src="../assets/images/isologo.png"
            alt="Texto alternativo"
            style="height: 30px !important"
          />
        </a>
        <v-btn variant="text" size="large" class="btn-nav"> Proyectos </v-btn>
        <v-btn variant="text" size="large" class="btn-nav">
          Próximos lanzamientos
        </v-btn>
      </div>
      <div class="right-side">
        <v-text-field
          density="compact"
          variant="solo"
          class="search"
          label="Busca proyectos"
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          single-line
          flat
          hide-details
        ></v-text-field>

        <v-btn variant="text" class="btn-nav" size="large"> Pagos </v-btn>
        <v-btn
          prepend-icon="mdi-account-outline"
          variant="tonal"
          color="#1f1f1f"
          style="text-transform: capitalize"
          size="large"
        >
          <template v-slot:prepend>
            <v-icon color="#1f1f1f"></v-icon>
          </template>
          Cuenta
        </v-btn>
      </div>
    </nav>
  </header>
  <main>
    <div class="main-info">
      <img
        src="../assets/images/product_logo.png"
        alt="Texto alternativo"
        class="logo-product"
        v-motion
        :initial="initial_to_left"
        :enter="enter(300)"
      />
      <h4 v-motion :initial="initial_to_left" :enter="enter(350)">Etapa 3</h4>
      <p v-motion :initial="initial_to_left" :enter="enter(400)">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque magni
        quae, nisi soluta magnam sed eligendi numquam dolores beatae veritatis!
      </p>
      <div class="price">
        <p>Desde</p>
        <h1>$170.0000.0000</h1>
      </div>
    </div>
    <figure>
      <img
        src="../assets/images/product_image.jpg"
        alt="Texto alternativo"
        v-motion
        :initial="initial_to_right"
        :enter="enter()"
      />
      <div
        class="bot-info"
        v-motion
        :initial="initial_to_right"
        :visible="visible()"
      >
        <ul>
          <li>Torres</li>
          <span class="divider"> </span>
          <li>Area</li>
          <span class="divider"> </span>
          <li>Unidades</li>
          <span class="divider"> </span>
          <li>Parkin</li>
        </ul>

        <div class="contact-btns">
          <v-btn
            prepend-icon="mdi-whatsapp"
            variant="text"
            color="green"
            style="
              text-transform: capitalize;
              border: 2px solid #dfdfdf;
              color: #1f1f1f !important;
            "
          >
            <template v-slot:prepend>
              <v-icon color="success"></v-icon>
            </template>
            Escribenos
          </v-btn>
          <v-btn
            prepend-icon="mdi-phone-outline"
            variant="text"
            color="blue"
            style="
              text-transform: capitalize;
              border: 2px solid #dfdfdf;
              color: #1f1f1f !important;
            "
          >
            <template v-slot:prepend>
              <v-icon color="blue"></v-icon>
            </template>
            Te llamamos
          </v-btn>
          <v-btn
            prepend-icon="mdi-file-chart"
            variant="text"
            color="green"
            style="
              text-transform: capitalize;
              border: 2px solid #dfdfdf;
              color: #1f1f1f !important;
            "
          >
            <template v-slot:prepend>
              <v-icon color="#DA0812"></v-icon>
            </template>
            Cotiza
          </v-btn>
        </div>
      </div>
    </figure>
  </main>

  <div class="separator">
    <span class="xd"></span>
  </div>

  <section class="apartament-section">
    <div class="plano-class">
      <div
        class="stage-slider"
        v-motion
        :initial="initial_to_left"
        :visible="visible(100)"
      >
        <v-slider
          :ticks="tickLabels"
          :max="2"
          step="1"
          show-ticks="always"
          tick-size="4"
        ></v-slider>
      </div>
      <div
        class="apartament-container"
        v-motion
        :initial="initial_to_right"
        :visible="visible(300)"
      >
        <div class="left">
          <img
            src="../assets/images/apartament_plan.jpg"
            alt="sapa"
            style="width: 80%; border-radius: 10px"
          />
          <img
            src="../assets/images/distribution_plan.jpg"
            alt="sapa"
            style="height: 100px"
          />
        </div>
        <div class="right">
          <p
            style="
              height: 50px;
              border-radius: 5px;
              border: 1px solid #d62730;
              margin: 20px 10px;
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
            "
          >
            APARTAMENTO 53.50 M² (MEDIANERO)
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            voluptate!
          </p>
          <div
            style="
              height: 350px;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              background-color: rgb(37, 37, 37);
              margin: 20px;
              border-radius: 10px;
              padding: 10px;
            "
          >
            <p>Desde</p>
            <h1 style="color: #d62730; font-size: 30px">$ 182.000.000</h1>
            <p style="margin-bottom: 30px">Precio estimado en pesos</p>
            <div style="display: flex; margin: 10px 0">
              <v-icon
                icon="mdi-ruler-square"
                size="small"
                style="margin-right: 5px"
              ></v-icon>
              <p style="font-weight: bold; margin-right: 10px">
                Área construida:
              </p>
              <p style="">53.5 mts2</p>
            </div>
            <div style="display: flex; margin: 10px 0">
              <v-icon
                icon="mdi-border-inside"
                size="small"
                style="margin-right: 5px"
              ></v-icon>

              <p style="font-weight: bold; margin-right: 10px">Área privada:</p>
              <p style="">53.5 mts2</p>
            </div>
            <div style="display: flex; margin: 10px 0">
              <v-icon
                icon="mdi-bed"
                size="small"
                style="margin-right: 5px"
              ></v-icon>

              <p style="font-weight: bold; margin-right: 10px">Habitaciones:</p>
              <p style="">53.5 mts2</p>
            </div>
            <div style="display: flex; margin: 10px 0">
              <v-icon
                icon="mdi-toilet"
                size="small"
                style="margin-right: 5px"
              ></v-icon>

              <p style="font-weight: bold; margin-right: 10px">Baños:</p>
              <p style="">53.5 mts2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="common-areas">
      <div
        v-motion
        :initial="initial_to_left"
        :visible="visible(100)"
        style="
          height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0 30px;
        "
      >
        <h1 style="margin-top: 30px">ÁREAS COMUNES</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet id sunt
          neque? Ipsa, nihil omnis sequi, iure nobis blanditiis quidem aliquam
          mollitia atque qui repellendus dicta exercitationem id quia quam?
        </p>
      </div>
      <div
        v-motion
        :initial="initial_to_right"
        :visible="visible(100)"
        class="filas"
      >
        <div class="casillas" style="width: 30%">
          <v-icon color="#c5221f" icon="mdi-table-tennis" size="large"></v-icon>
        </div>
        <div class="casillas" style="width: 20%">
          <v-icon color="#c5221f" icon="mdi-grill" size="large"></v-icon>
        </div>
        <div class="casillas" style="width: 10%">
          <v-icon
            color="#c5221f"
            icon="mdi-weight-lifter"
            size="large"
          ></v-icon>
        </div>
        <div class="casillas" style="width: 20%">
          <v-icon color="#c5221f" icon="mdi-gymnastics" size="large"></v-icon>
        </div>
      </div>

      <div
        v-motion
        :initial="initial_to_left"
        :visible="visible(200)"
        class="filas"
      >
        <div class="casillas" style="width: 10%">
          <v-icon color="#c5221f" icon="mdi-football" size="large"></v-icon>
        </div>
        <div class="casillas" style="width: 20%">
          <v-icon
            color="#c5221f"
            icon="mdi-pool-thermometer"
            size="large"
          ></v-icon>
        </div>
        <div class="casillas" style="width: 30%">
          <v-icon color="#c5221f" icon="mdi-tree" size="large"></v-icon>
        </div>
        <div class="casillas" style="width: 20%">
          <v-icon color="#c5221f" icon="mdi-paw" size="large"></v-icon>
        </div>
      </div>

      <div
        v-motion
        :initial="initial_to_right"
        :visible="visible(300)"
        class="filas"
      >
        <div class="casillas" style="width: 20%">
          <v-icon
            color="#c5221f"
            icon="mdi-human-male-child"
            size="large"
          ></v-icon>
        </div>
        <div class="casillas" style="width: 10%">
          <v-icon color="#c5221f" icon="mdi-handshake" size="large"></v-icon>
        </div>
        <div class="casillas" style="width: 20%">
          <v-icon color="#c5221f" icon="mdi-table-tennis" size="large"></v-icon>
        </div>
        <div class="casillas" style="width: 30%">
          <v-icon color="#c5221f" icon="mdi-table-tennis" size="large"></v-icon>
        </div>
      </div>
    </div>

    <!--



  </section>
  <section
    class="common-areas-sec"
    style="
      height: 100vh;
      width: 100%;
      background-color: #f7f7f7;
      color: white !important;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    "
  >
    <h1>ZONAS COMUNES</h1>
    <p>
      Vive rodeado de aproximadamente 40.000 metros de zonas verdes para ti y tu
      familia. Cómodos apartamentos con iluminación natural gracias a sus
      ventanales de piso a techo
    </p>
    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 500px;
        width: 60%;
      "
    >
      <div
        style="display: flex; justify-content: space-around; width: 100%"
        v-motion
        :initial="initial_to_left"
        :visible="visible(100)"
      >
        <div class="common-zones-box">
          <v-icon
            color="green"
            icon="mdi-pool-thermometer"
            size="small"
          ></v-icon>
          <p style="text-align: center">Piscina cubierta y climatizada</p>
        </div>
        <div class="common-zones-box">
          <v-icon color="green" icon="mdi-gamepad" size="small"></v-icon>
          <p style="text-align: center">Juegos infantiles al aire libre</p>
        </div>
        <div class="common-zones-box">
          <v-icon color="green" icon="mdi-teddy-bear" size="small"></v-icon>
          <p style="text-align: center">Salón de juegos infantiles</p>
        </div>
      </div>

      <div
        style="display: flex; justify-content: space-around; width: 100%"
        v-motion
        :initial="initial_to_right"
        :visible="visible(200)"
      >
        <div class="common-zones-box">
          <v-icon color="green" icon="mdi-table-tennis" size="small"></v-icon>
          <p style="text-align: center">Salón de juegos de mesa</p>
        </div>
        <div class="common-zones-box">
          <v-icon color="green" icon="mdi-grill" size="small"></v-icon>
          <p style="text-align: center">Zonas para BBQ</p>
        </div>
        <div class="common-zones-box">
          <v-icon color="green" icon="mdi-weight-lifter" size="small"></v-icon>
          <p style="text-align: center">Gimnasio dotado</p>
        </div>
      </div>

      <div
        style="display: flex; justify-content: space-around; width: 100%"
        v-motion
        :initial="initial_to_left"
        :visible="visible(300)"
      >
        <div class="common-zones-box">
          <v-icon color="green" icon="mdi-gymnastics" size="small"></v-icon>
          <p style="text-align: center">Gimnasio al aire libre</p>
        </div>
        <div class="common-zones-box">
          <v-icon color="green" icon="mdi-paw" size="small"></v-icon>
          <p style="text-align: center">Zona para mascotas</p>
        </div>
        <div class="common-zones-box">
          <v-icon color="green" icon="mdi-wifi" size="small"></v-icon>
          <p style="text-align: center">Salón de reuniones</p>
        </div>
      </div>
    </div>
      -->
  </section>
  <section class="get-intouch-section">
    <div class="container">
      <div class="form">
        <div class="title">
          <H1 v-motion :initial="initial_to_left" :visible="visible()"
            >Contactanos
          </H1>
        </div>
        <div class="zz">
          <p
            class="msm"
            v-motion
            :initial="initial_to_right"
            :visible="visible()"
          >
            ¿Te ha interesado nuestro proyecto?. Si lo desea, puede dejarnos sus
            datos de contacto para comunicarnos contigo.
          </p>

          <div class="inputs">
            <div class="name">
              <v-text-field label="Nombre" density="compact"></v-text-field>
              <v-text-field label="Apellido" density="compact"></v-text-field>
            </div>
            <v-text-field label="Correo" density="compact"></v-text-field>
            <v-text-field
              label="Número de teléfono"
              density="compact"
            ></v-text-field>
          </div>

          <div>
            <v-checkbox v-model="checkbox">
              <template v-slot:label>
                <div>
                  He leído y acepto la
                  <v-tooltip location="bottom">
                    <template v-slot:activator="{ props }">
                      <a
                        href="https://storeproyectoar.blob.core.windows.net/ar-multimedia-resources-container/CLAUSULA-DE-CONSENTIMIENTO.pdf"
                        target="_blank"
                        v-bind="props"
                        color="white"
                        @click.stop
                      >
                        cláusula de consentimiento web
                      </a>
                    </template>
                    Clasula de consentimiento web de AR Construcciones
                  </v-tooltip>
                </div>
              </template>
            </v-checkbox>
          </div>

          <div>
            <v-checkbox v-model="captcha">
              <template v-slot:label>
                <div>Captcha</div>
              </template>
            </v-checkbox>
          </div>
          <div
            class="send-div"
            v-motion
            :initial="initial_to_top"
            :visible="visible_to_y()"
          >
            <v-btn
              append-icon="mdi-send"
              variant="outlined"
              color="#DA0812"
              style="text-transform: capitalize"
            >
              <template v-slot:append>
                <v-icon color="#DA0812"></v-icon>
              </template>
              Enviar
            </v-btn>
          </div>
        </div>
      </div>
      <v-container
        fluid
        fill-height
        v-motion
        :initial="initial_to_right"
        :visible="visible()"
      >
        <v-layout align-center justify-center style="height: 100%">
          <div class="video-container">
            <div class="video-overlays">
              <div class="top"></div>
              <div class="bottom"></div>
            </div>

            <video
              autoplay
              muted
              loop
              id="video-background"
              style="width: auto; height: 100%; object-fit: cover"
            >
              <source
                src="../assets/vid/background-video.mp4 "
                type="video/mp4"
              />
              Tu navegador no admite la reproducción de video.
            </video>
            <div class="contenido">
              <h1>VISITA NUESTRO PROYECTO MODELO</h1>
              <p>
                3123236786 - 3138473684 <br />
                place Calle 8 con transversal 22 (Esquina) Zipaquirá -
                Cundinamarca <br /> Horarios de atención: Lunes a domingo de
                9:00 am a 5:00 pm
              </p>
            </div>
          </div>
        </v-layout>
      </v-container>
    </div>
  </section>

  <footer>
    <div class="info">
      <div>
        <img src="../assets/images/logo.png" alt="sapa" style="height: 100px" />
      </div>
      <ul class="columns-container">
        <li class="column">
          <div class="title">Servicios</div>
          <ul>
            <li>ofrece lotes</li>
            <li>Calculadora financiera</li>
          </ul>
        </li>
        <li class="column">
          <div class="title">Legal</div>
          <ul>
            <li>Políticas y condiciones PSE</li>
            <li>Términos y condiciones</li>
            <li>Denuncias</li>
          </ul>
        </li>
        <li class="column">
          <div class="title">AR Construcciones</div>
          <ul>
            <li>Quiénes somos</li>
            <li>Trabaja con nostroos</li>
            <li>Sé nuestro proveedor</li>
          </ul>
        </li>

        <li class="column">
          <div class="title">Atención a clientes</div>
          <ul>
            <li>Preguntas frecuentes</li>
            <li>Contactanos</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="company-info">
      <div>2024 AR CONSTRUCCIONES S.A.S.</div>
      <div class="icons">
        <v-icon color="#1f1f1f" icon="mdi-twitter"></v-icon>
        <v-icon color="#1f1f1f" icon="mdi-facebook"></v-icon>
        <v-icon color="#1f1f1f" icon="mdi-youtube"></v-icon>
        <v-icon color="#1f1f1f" icon="mdi-linkedin"></v-icon>
        <v-icon color="#1f1f1f" icon="mdi-github"></v-icon>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from "vue";
import { useMotion } from "@vueuse/motion";

const tickLabels = {
  0: "Etapa 1",
  1: "Etapa 2",
  2: "Etapa 3",
}; // Replace with your desired labels

const search = null;

// Definir la configuración de animación
const initial_to_right = {
  x: 100,
  opacity: 0,
};

const initial_to_left = {
  x: -100,
  opacity: 0,
};

const initial_to_top = {
  y: 100,
  opacity: 0,
};

function visible_to_y(delay = 100) {
  return {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25,
      mass: 0.5,
      delay: delay,
    },
  };
}

function visible(delay = 100) {
  return {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25,
      mass: 0.5,
      delay: delay,
    },
  };
}

function enter(delay = 0) {
  return {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25,
      mass: 0.5,
      delay: delay,
    },
  };
}
</script>
