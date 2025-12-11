import { useEffect, useState, useRef } from 'react'

function HeroSection() {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const [videoLoaded, setVideoLoaded] = useState(false)
    const videoRef = useRef(null)

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY })
        }

        const handleMouseEnter = () => setIsHovering(true)
        const handleMouseLeave = () => setIsHovering(false)

        document.addEventListener('mousemove', handleMouseMove)
        
        // Add hover listeners to all interactive elements
        const addHoverListeners = () => {
            const interactiveElements = document.querySelectorAll('a, button, [role="button"], .hero-text-box')
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter)
                el.addEventListener('mouseleave', handleMouseLeave)
            })
        }
        
        // Run initially and after a short delay to catch dynamically added elements
        addHoverListeners()
        const timeout = setTimeout(addHoverListeners, 1000)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            clearTimeout(timeout)
            const interactiveElements = document.querySelectorAll('a, button, [role="button"], .hero-text-box')
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter)
                el.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    // Try to play video when component mounts
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Autoplay was prevented
            })
        }
    }, [])

    return (
        <>
            {/* Custom Cursor */}
            <div 
                className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
                style={{
                    left: cursorPos.x,
                    top: cursorPos.y,
                }}
            />
            
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Animated Background Fallback */}
                <div className="animated-bg-fallback"></div>
                
                {/* Video Background */}
                <div className="hero-video-wrapper">
                    <video 
                        ref={videoRef}
                        className="hero-video"
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        onCanPlay={() => setVideoLoaded(true)}
                        style={{ opacity: videoLoaded ? 1 : 0 }}
                    >
                        {/* Local video file */}
                        <source src="/hero-video.webm" type="video/webm" />
                        <source src="/hero-video.mp4" type="video/mp4" />
                    </video>
                </div>
                
                {/* Dark Overlay */}
                <div className="hero-overlay"></div>
                
                {/* Content - Centered */}
                <div className="relative z-10 text-center px-4 w-full flex flex-col items-center justify-center">
                    {/* Subtitle with border - matching exact style from original */}
                    <div className="inline-block hero-text-box">
                        <span 
                            className="hero-subtitle-text"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: '17px',
                                fontWeight: 600,
                                letterSpacing: '5px',
                                lineHeight: '70px',
                                border: '2px solid rgba(255,255,255,0.25)',
                                padding: '0 50px',
                                display: 'block',
                                color: 'rgba(255,255,255,0.7)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Shaping the Future of Visual Communication
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection

