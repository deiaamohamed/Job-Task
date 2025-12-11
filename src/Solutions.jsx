import Solution_section from "./app/Solution_section"
import Bfooter from "./Bfooter"
import Service from "./partials/Service"
import Services from "./Services"

function Solutions(){


    return(
        <>
        <Solution_section/>
        <Services head="CORPORATE & COMMERCIAL SOLUTIONS" Component={function(){
        return(

            <section className="flex gap-10 justify-center flex-wrap">
                <Service image={"https://pixontechs.com/wp-content/uploads/2025/06/334567.jpg"} description={"LED & VIDEO WALL SOLUTIONS"} />
                <Service image={"https://pixontechs.com/wp-content/uploads/2025/07/7-6-600x281.webp"} description={"Media Façade"} />
                <Service image={"https://pixontechs.com/wp-content/uploads/2025/09/2admin-ajax.php_.jpeg"} description={"DIGITAL SIGNAGE & DOOH"} />
                <Service image={"https://pixontechs.com/wp-content/uploads/2025/09/a1dmin-ajax.php_.jpeg"} description={"Smart Cities"} />
                <Service image={"https://pixontechs.com/wp-content/uploads/2025/07/7-6-600x281.webp"} description={"Smart CitiesCorporate AV & Collaboration"} />
                <Service image={"https://pixontechs.com/wp-content/uploads/2025/09/a2dmin-ajax.php_.jpeg"} description={"Control Rooms & Technical Furniture"} />
            </section>
        )
      }}/>
       <Services head="ENTERTAINMENT SOLUTIONS" Component={function(){
        return(

            <section className="flex gap-10 justify-center flex-wrap">
                <Service image={"https://pixontechs.com/wp-content/uploads/2025/06/334567.jpg"} description={"LED & VIDEO WALL SOLUTIONS"} />
                <Service image={"https://pixontechs.com/wp-content/uploads/2025/07/7-6-600x281.webp"} description={"Media Façade"} />
                <Service image={"https://pixontechs.com/wp-content/uploads/2025/09/2admin-ajax.php_.jpeg"} description={"DIGITAL SIGNAGE & DOOH"} />
                <Service image={"https://pixontechs.com/wp-content/uploads/2025/09/a2dmin-ajax.php_.jpeg"} description={"Control Rooms & Technical Furniture"} />
            </section>
        )
      }}/> 
      <Services head="OUT OF THE BOX SOLUTIONS" Component={function(){
        return(

            <section className="flex gap-10 justify-center flex-wrap">
                <Service image={"https://pixontechs.com/wp-content/uploads/2025/09/ad3min-ajax.php_.webp"} description={"LED & VIDEO WALL SOLUTIONS"} />
                <Service image={"https://pixontechs.com/wp-content/uploads/2025/09/a21dmin-ajax.php_.jpeg"} description={"Media Façade"} />
                <Service image={"https://pixontechs.com/wp-content/uploads/2025/09/a12dmin-ajax.php_.webp"} description={"DIGITAL SIGNAGE & DOOH"} />
            </section>
        )
      }}/>
        </>
        
    )
}
export default Solutions