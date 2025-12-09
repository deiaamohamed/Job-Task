import Service from "./partials/Service";

function Services(){


    return(

        <div>
            <div className="">

                <h1 className="text-center font-bold text-3xl my-8
                    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                    bg-[200%_200%] bg-clip-text text-transparent
                    animate-gradientMove">
                        WHAT DRIVES US - VISION, MISSION & VALUES
                </h1>

            <section className="flex gap-10 justify-center flex-wrap">
                <Service image={"https://pixontechs.com/wp-content/uploads/2025/06/334567.jpg"} description={"LED & VIDEO WALL SOLUTIONS"} />
                <Service image={"https://pixontechs.com/wp-content/uploads/2025/07/7-6-600x281.webp"} description={"Media Façade"} />
                <Service image={"https://pixontechs.com/wp-content/uploads/2025/09/2admin-ajax.php_.jpeg"} description={"DIGITAL SIGNAGE & DOOH"} />
                <Service image={"https://pixontechs.com/wp-content/uploads/2025/09/a1dmin-ajax.php_.jpeg"} description={"Smart Cities"} />
                <Service image={"https://pixontechs.com/wp-content/uploads/2025/07/7-6-600x281.webp"} description={"Smart CitiesCorporate AV & Collaboration"} />
                <Service image={"https://pixontechs.com/wp-content/uploads/2025/09/a2dmin-ajax.php_.jpeg"} description={"Control Rooms & Technical Furniture"} />
            </section>
        </div>
        </div>
    )
}
export default Services