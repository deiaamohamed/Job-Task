

function Solution_section() {
    return (
        <div style={{ position: "relative", height: "400px", display: "block", overflow: "hidden" }}>
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0
                }}
            >
                <source src="" />
                Your browser does not support the video tag.
            </video>

            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))",
                zIndex: 1
            }} />

            <section style={{
                position: "relative",
                zIndex: 2,
                textAlign: "center",
                color: "white",
                padding: "100px",
                justifyContent: "center",
            }}>
                <h2 style={{
                    font: "36px lato,sans-serif",
                }}>Design the Future of Visual Communication.</h2>
                <p style={{
                    font: "15px lato,sans-serif",
                    padding: "20px",
                }}>Let’s bring your ideas to life—reach out today and discover what’s possible.</p>
                <p style={{
                    font: "15px lato,sans-serif",
                    padding: "20px",
                }}>Contact us now and start your journey with Screen Art.</p>
                <div style={{
                    border: "2px solid white",
                    borderRadius: "50px",
                    display: "inline-block",
                    padding: "10px 30px",
                    marginTop: "20px",
                    cursor: "pointer"
                }}>
                    <a href="#" style={{ textDecoration: "none", color: "white", fontFamily: "lato, sans-serif", fontSize: "16px", textTransform: "uppercase" }}>
                        Contact Us
                    </a>
                </div>
            </section>
        </div>
    )
}
export default Solution_section