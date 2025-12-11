function HeroStats() {
    return (
        <section className="py-20 px-4 relative overflow-hidden">
            {/* Background with gradient */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'linear-gradient(135deg, rgba(27, 87, 179, 0.1) 0%, rgba(12, 12, 12, 1) 100%)'
                }}
            ></div>
            
            {/* Pattern overlay */}
            <div 
                className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231b57b3' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            ></div>
            
            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <StatCard number="500+" label="Projects Completed" />
                    <StatCard number="150+" label="Happy Clients" />
                    <StatCard number="10+" label="Years Experience" />
                    <StatCard number="50+" label="Expert Team" />
                </div>
            </div>
        </section>
    )
}

function StatCard({ number, label }) {
    return (
        <div className="stat-card text-center py-10 px-6 rounded-2xl">
            <div 
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{
                    fontFamily: "'Poppins', sans-serif",
                    background: 'linear-gradient(90deg, #1b57b3, #4a90d9)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}
            >
                {number}
            </div>
            <div 
                className="text-[#aaaaaa] text-sm md:text-base"
                style={{ fontFamily: "'Roboto', sans-serif" }}
            >
                {label}
            </div>
        </div>
    )
}

export default HeroStats

