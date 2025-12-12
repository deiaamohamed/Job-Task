import Aboutus from "./Aboutus";
import Vision from "./Vision";
import Services from "./Services";
import Footer from "./Footer";
import Service from "./partials/Service";
import Statistics from "./Statistics";
import Bfooter from "./Bfooter";
import Container from "./common/Container";
import Hero from "./Hero";
import Heading from "./partials/Heading";

function App() {
  return (
    <div>
      <Hero />

      <main className="text-white relative bg-center bg-no-repeat bg-fixed bg-cover bg-[url('./src/assets/city-lights-abstract-central-building-Large.jpeg')]">
        <div className="absolute inset-0 bg-black/80 pointer-events-none z-0"></div>
        <div className="relative z-10">
          <Aboutus
            Component={function () {
              return (
                <div className="order-2 basis-1/2">
                  <hr className="mt-4 text-gray-600" />
                  <div className="p-10">
                    <h1 className="text-4xl text-gray-300 font-bold uppercase my-3">
                      about us
                    </h1>

                    <p className="text-xl leading-7 tracking-wider text-gray-300 text-justify">
                      <span className="text-blue-500">Pixon Tech</span> is a
                      Saudi-based audiovisual integrator specializing in
                      next-generation display, lighting, and interactive
                      technologies. From iconic LED façades to
                      collaboration-ready boardrooms, we transform spaces into
                      dynamic experiences that inform, inspire, and engage. Our
                      multidisciplinary team blends engineering rigor with
                      creative flair to deliver turnkey solutions for clients of
                      every scale.
                    </p>

                    <div className="text-center md:flex items-center gap-16">
                      <button className="bg-blue-500 text-white text-md font-bold py-3 px-8 rounded-full my-7">
                        Learn more
                      </button>
                      <a
                        className="block text-gray-300 text-md italic"
                        href="http://pixontechs.com/our-solutions/"
                      >
                        - Our Solutions
                      </a>
                    </div>
                  </div>
                </div>
              );
            }}
          />
          <Container>
            <section className="text-center">
              <Heading
                title="EMPOWERING SPACES WITH INTELLIGENT DESIGN"
                size="p-2 md:p-0 text-3xl"
              />
              <h2 className="text-5xl font-bold text-gray-300 -mt-6 mb-6">
                Seamless Solutions for a Connected World
              </h2>
              <p className="p-2 md:p-0 line-clamp-3 md:line-clamp-none text-xl text-gray-400 mb-10">
                <span className="text-white font-bold">Pixon Tech</span>{" "}
                provides integrated, future-ready technologies that redefine how
                people interact with spaces. We combine innovation, design, and
                functionality to deliver impactful experiences across
                commercial, educational, and urban environments.
              </p>
            </section>
            {/* ./Separator Section */}
            <div className="p-4">
              <Vision />
            </div>

            {/* <Absraction/> */}

            <div className="p-4">
              <Services
                head="CORPORATE & COMMERCIAL SOLUTIONS"
                Component={function () {
                  return (
                    <section className="flex justify-center flex-wrap">
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
                    <section className="flex justify-center flex-wrap">
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
                    <section className="flex justify-center flex-wrap">
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
            </div>

            <Aboutus Component={Statistics} />
          </Container>
        </div>

        <Bfooter />
        <div className="h-20 bg-black/50"></div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
