function HeroFooter() {
    return (
        <>
            {/* Main Footer */}
            <footer className="footer-section py-16 px-4">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Logo & About Column */}
                        <div className="lg:col-span-1">
                            <a href="/" className="inline-flex items-center gap-2 mb-6">
                                <img 
                                    src="https://pixontechs.com/wp-content/uploads/2025/05/IMG-20250506-WA0008-removebg-preview-1.png" 
                                    alt="Pixon Tech" 
                                    className="h-[50px] object-contain"
                                />
                                <span 
                                    className="text-white font-bold text-lg tracking-wide"
                                    style={{ fontFamily: "'Poppins', sans-serif" }}
                                >
                                    PIXON<br/>TECH
                                </span>
                            </a>
                            <p className="text-[#aaaaaa] text-sm leading-relaxed mb-6" style={{ fontFamily: "'Roboto', sans-serif" }}>
                                Leading provider of LED & AV solutions in Saudi Arabia. We deliver innovative technology solutions for businesses and organizations.
                            </p>
                            {/* Social Icons */}
                            <div className="flex gap-2">
                                <SocialIcon href="https://x.com/PixonTech" icon="twitter" />
                                <SocialIcon href="https://www.linkedin.com/company/pixon-tech/" icon="linkedin" />
                                <SocialIcon href="#" icon="facebook" />
                                <SocialIcon href="#" icon="instagram" />
                            </div>
                        </div>
                        
                        {/* Quick Links Column */}
                        <div className="lg:col-span-1">
                            <h4 
                                className="text-white text-lg font-bold mb-6 pb-3 border-b border-white/10"
                                style={{ fontFamily: "'Poppins', sans-serif" }}
                            >
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                <FooterLink href="/" label="Home" />
                                <FooterLink href="/about" label="About Us" />
                                <FooterLink href="/solutions" label="Our Solutions" />
                                <FooterLink href="/profile" label="Company Profile" />
                                <FooterLink href="/contact.html" label="Contact Us" />
                            </ul>
                        </div>
                        
                        {/* Services Column */}
                        <div className="lg:col-span-1">
                            <h4 
                                className="text-white text-lg font-bold mb-6 pb-3 border-b border-white/10"
                                style={{ fontFamily: "'Poppins', sans-serif" }}
                            >
                                Our Services
                            </h4>
                            <ul className="space-y-3">
                                <FooterLink href="#" label="LED Displays" />
                                <FooterLink href="#" label="AV Integration" />
                                <FooterLink href="#" label="Digital Signage" />
                                <FooterLink href="#" label="Control Systems" />
                                <FooterLink href="#" label="Support & Maintenance" />
                            </ul>
                        </div>
                        
                        {/* Contact Info Column */}
                        <div className="lg:col-span-1">
                            <h4 
                                className="text-white text-lg font-bold mb-6 pb-3 border-b border-white/10"
                                style={{ fontFamily: "'Poppins', sans-serif" }}
                            >
                                Contact Info
                            </h4>
                            <ul className="space-y-4">
                                <ContactItem 
                                    icon={<PhoneIcon />}
                                    text="+966 58 372 0000"
                                    href="tel:+966583720000"
                                />
                                <ContactItem 
                                    icon={<EmailIcon />}
                                    text="info@pixontechs.com"
                                    href="mailto:info@pixontechs.com"
                                />
                                <ContactItem 
                                    icon={<LocationIcon />}
                                    text="Riyadh, Saudi Arabia"
                                />
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            
            {/* Bottom Footer */}
            <div className="footer-bottom py-6 px-4">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#aaaaaa] text-sm" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        © 2025 Pixon Tech. All Rights Reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-[#aaaaaa] text-sm hover:text-[#1b57b3] transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-[#aaaaaa] text-sm hover:text-[#1b57b3] transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Back to Top Button */}
            <BackToTop />
        </>
    )
}

function FooterLink({ href, label }) {
    return (
        <li>
            <a 
                href={href}
                className="text-[#aaaaaa] hover:text-[#1b57b3] transition-colors text-sm flex items-center gap-2"
                style={{ fontFamily: "'Roboto', sans-serif" }}
            >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                {label}
            </a>
        </li>
    )
}

function ContactItem({ icon, text, href }) {
    const content = (
        <span className="flex items-start gap-3">
            <span className="text-[#1b57b3] mt-1">{icon}</span>
            <span className="text-[#aaaaaa] text-sm" style={{ fontFamily: "'Roboto', sans-serif" }}>{text}</span>
        </span>
    )
    
    if (href) {
        return (
            <li>
                <a href={href} className="hover:opacity-80 transition-opacity">
                    {content}
                </a>
            </li>
        )
    }
    
    return <li>{content}</li>
}

function SocialIcon({ href, icon }) {
    return (
        <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon w-10 h-10 flex items-center justify-center text-[#1b57b3]"
        >
            {icon === 'twitter' && <TwitterIcon />}
            {icon === 'linkedin' && <LinkedinIcon />}
            {icon === 'facebook' && <FacebookIcon />}
            {icon === 'instagram' && <InstagramIcon />}
        </a>
    )
}

function BackToTop() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    
    return (
        <button 
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-[#3f3f3f] hover:text-[#1b57b3] hover:bg-[#3f3f3f] transition-all z-50"
            style={{ backgroundColor: '#1b57b3' }}
            aria-label="Back to top"
        >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </button>
    )
}

// Icons
function PhoneIcon() {
    return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
    )
}

function EmailIcon() {
    return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
    )
}

function LocationIcon() {
    return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
    )
}

function TwitterIcon() {
    return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
    )
}

function LinkedinIcon() {
    return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
    )
}

function FacebookIcon() {
    return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
    )
}

function InstagramIcon() {
    return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
    )
}

export default HeroFooter

