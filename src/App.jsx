import Header from "./Header";
import Aboutus from "./Aboutus";
import Vision from "./Vision";
import Absraction from "./Abstraction";
import Services from "./Services";
import Footer from "./Footer";
import Service from "./partials/Service";
import Statistics from "./Statistics";
import Bfooter from "./Bfooter";
import Container from "./common/Container";

function App() {
  return (
    <>
      <Container className="relative h-screen">
        <Header />
        <section className="absolute top-0 left-0 w-screen h-screen -z-10">
          <video src="./src/assets/bg-hd2.mp4" autoPlay loop muted></video>
          <button className="text-white text-2xl font-semibold blur-2xl">
            Shaping the future of visual Communication
          </button>
          <section className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></section>
        </section>
      </Container>

      <main className="text-white relative">
        <Container>
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
          <Bfooter />
          <Footer />
        </Container>
      </main>
    </>
  );
}

export default App;
