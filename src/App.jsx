import Header from "./Header";
import Aboutus from "./Aboutus";
import Vision from "./Vision";
import Services from "./Services";
import Footer from "./Footer";
import Service from "./partials/Service";
import Statistics from "./Statistics";
import Bfooter from "./Bfooter";
import Container from "./common/Container";
import Hero from "./Hero";

function App() {
  return (
    <div>
      <Hero />

      <main className="text-white relative bg-center bg-no-repeat bg-fixed bg-cover bg-[url('./src/assets/city-lights-abstract-central-building-Large.jpeg')]">
        <div className="absolute inset-0 bg-black/80 pointer-events-none z-0"></div>
        <Container className="relative z-10">
          <Aboutus
            Component={function () {
              return (
                <div className="p-6 order-2 basis-1/2">
                  <hr className="text-gray-800" />
                  <h1 className="text-3xl font-bold uppercase my-3">
                    about us
                  </h1>
                  <p className="leading-7 text-gray-400 text-justify">
                    <span className="text-blue-700">Pixon Tech</span> is a
                    Saudi-based audiovisual integrator specializing in
                    next-generation display, lighting, and interactive
                    technologies. From iconic LED façades to collaboration-ready
                    boardrooms, we transform spaces into dynamic experiences
                    that inform, inspire, and engage. Our multidisciplinary team
                    blends engineering rigor with creative flair to deliver
                    turnkey solutions for clients of every scale.
                  </p>

                  <div className="flex items-center gap-16">
                    <button className="bg-blue-400 text-white py-2 px-3 rounded-full text-sm my-7">
                      Learn more
                    </button>
                    <a
                      className="text-gray-600 text-xs italic"
                      href="http://pixontechs.com/our-solutions/"
                    >
                      - Our Solutions
                    </a>
                  </div>
                </div>
              );
            }}
          />
          <Vision />
          {/* <Absraction/> */}
          <Services
            head="CORPORATE & COMMERCIAL SOLUTIONS"
            Component={function () {
              return (
                <section className="flex gap-10 justify-center flex-wrap">
                  <Service
                    image={
                      "https://pixontechs.com/wp-content/uploads/2025/06/334567.jpg"
                    }
                    description={"LED & VIDEO WALL SOLUTIONS"}
                  />
                  <Service
                    image={
                      "https://pixontechs.com/wp-content/uploads/2025/07/7-6-600x281.webp"
                    }
                    description={"Media Façade"}
                  />
                  <Service
                    image={
                      "https://pixontechs.com/wp-content/uploads/2025/09/2admin-ajax.php_.jpeg"
                    }
                    description={"DIGITAL SIGNAGE & DOOH"}
                  />
                  <Service
                    image={
                      "https://pixontechs.com/wp-content/uploads/2025/09/a1dmin-ajax.php_.jpeg"
                    }
                    description={"Smart Cities"}
                  />
                  <Service
                    image={
                      "https://pixontechs.com/wp-content/uploads/2025/07/7-6-600x281.webp"
                    }
                    description={"Smart CitiesCorporate AV & Collaboration"}
                  />
                  <Service
                    image={
                      "https://pixontechs.com/wp-content/uploads/2025/09/a2dmin-ajax.php_.jpeg"
                    }
                    description={"Control Rooms & Technical Furniture"}
                  />
                </section>
              );
            }}
          />
          <Services
            head="ENTERTAINMENT SOLUTIONS"
            Component={function () {
              return (
                <section className="flex gap-10 justify-center flex-wrap">
                  <Service
                    image={
                      "https://pixontechs.com/wp-content/uploads/2025/06/334567.jpg"
                    }
                    description={"LED & VIDEO WALL SOLUTIONS"}
                  />
                  <Service
                    image={
                      "https://pixontechs.com/wp-content/uploads/2025/07/7-6-600x281.webp"
                    }
                    description={"Media Façade"}
                  />
                  <Service
                    image={
                      "https://pixontechs.com/wp-content/uploads/2025/09/2admin-ajax.php_.jpeg"
                    }
                    description={"DIGITAL SIGNAGE & DOOH"}
                  />
                  <Service
                    image={
                      "https://pixontechs.com/wp-content/uploads/2025/09/a2dmin-ajax.php_.jpeg"
                    }
                    description={"Control Rooms & Technical Furniture"}
                  />
                </section>
              );
            }}
          />
          <Services
            head="OUT OF THE BOX SOLUTIONS"
            Component={function () {
              return (
                <section className="flex gap-10 justify-center flex-wrap">
                  <Service
                    image={
                      "https://pixontechs.com/wp-content/uploads/2025/09/ad3min-ajax.php_.webp"
                    }
                    description={"LED & VIDEO WALL SOLUTIONS"}
                  />
                  <Service
                    image={
                      "https://pixontechs.com/wp-content/uploads/2025/09/a21dmin-ajax.php_.jpeg"
                    }
                    description={"Media Façade"}
                  />
                  <Service
                    image={
                      "https://pixontechs.com/wp-content/uploads/2025/09/a12dmin-ajax.php_.webp"
                    }
                    description={"DIGITAL SIGNAGE & DOOH"}
                  />
                </section>
              );
            }}
          />

          <Aboutus Component={Statistics} />
        </Container>
        <Bfooter />
        <div className="h-20 bg-black/50"></div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
