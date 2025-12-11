function HeroFeatures() {
    return (
        <section id="features" className="py-20 px-4" style={{ backgroundColor: '#0c0c0c' }}>
            <div className="max-w-[1400px] mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 
                        className="text-[40px] font-bold mb-4"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            background: 'linear-gradient(90deg, #1b57b3, #4a90d9)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        Why Choose Pixon Tech
                    </h2>
                    <p className="text-[#aaaaaa] text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        Leading the future of LED & AV solutions in Saudi Arabia with innovative technology and exceptional service
                    </p>
                </div>
                
                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard 
                        icon={<LedIcon />}
                        title="LED Solutions"
                        description="Cutting-edge LED display technology for indoor and outdoor applications, delivering stunning visuals and energy efficiency."
                    />
                    <FeatureCard 
                        icon={<AvIcon />}
                        title="AV Integration"
                        description="Complete audio-visual integration services for corporate, retail, and entertainment environments."
                    />
                    <FeatureCard 
                        icon={<SupportIcon />}
                        title="24/7 Support"
                        description="Round-the-clock technical support and maintenance services to ensure your systems run flawlessly."
                    />
                    <FeatureCard 
                        icon={<DesignIcon />}
                        title="Custom Design"
                        description="Tailored solutions designed specifically for your space and requirements by our expert team."
                    />
                    <FeatureCard 
                        icon={<InstallIcon />}
                        title="Professional Installation"
                        description="Expert installation services with meticulous attention to detail and minimal disruption."
                    />
                    <FeatureCard 
                        icon={<QualityIcon />}
                        title="Premium Quality"
                        description="Partnering with world-leading manufacturers to deliver only the highest quality products."
                    />
                </div>
            </div>
        </section>
    )
}

function FeatureCard({ icon, title, description }) {
    return (
        <div className="feature-card rounded-2xl p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(27, 87, 179, 0.2)' }}>
                <div className="text-[#1b57b3]">
                    {icon}
                </div>
            </div>
            <h3 className="text-white text-xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {title}
            </h3>
            <p className="text-[#aaaaaa] text-sm leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>
                {description}
            </p>
        </div>
    )
}

// Icons
function LedIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    )
}

function AvIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
    )
}

function SupportIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
    )
}

function DesignIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
    )
}

function InstallIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
    )
}

function QualityIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
    )
}

export default HeroFeatures

