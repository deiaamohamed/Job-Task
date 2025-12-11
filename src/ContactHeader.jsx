import { useState } from 'react'

function ContactHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [offcanvasOpen, setOffcanvasOpen] = useState(false)

    return (
        <>
            {/* Header 2 - Main Navigation */}
            <header className="header_2 relative z-50" style={{ marginBottom: '-245px' }}>
                <div className="w-[90%] max-w-[1400px] mx-auto border-b border-white/10">
                    <div className="flex items-center justify-between">
                        {/* Logo - Left */}
                        <div className="py-10">
                            <a href="/">
                                <img 
                                    src="https://pixontechs.com/wp-content/uploads/2025/07/PIXON-TECH-LOGO.png" 
                                    alt="Pixon Tech" 
                                    className="h-[80px] w-[170px] object-contain"
                                />
                            </a>
                        </div>

                        {/* Center - Navigation & Buttons */}
                        <div className="hidden lg:flex items-center gap-8">
                            <nav className="flex items-center">
                                <ul className="flex items-center" style={{ marginTop: '52px', marginBottom: '-1px' }}>
                                    <NavItem href="/" label="Home" />
                                    <NavItem href="/about" label="About us" />
                                    <NavItem href="/solutions" label="Our Solutions" />
                                    <NavItem href="/profile" label="Company Profile" />
                                    <NavItem href="/contact" label="Contact us" active={true} />
                                </ul>
                            </nav>
                            
                            {/* LED Configurator Button */}
                            <a 
                                href="https://www.unilumin.com/UniDesigner/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[15px] font-bold text-white py-[5px] px-[30px] rounded-full transition-all duration-300 hover:-mt-[2px] hover:shadow-lg"
                                style={{ backgroundColor: 'rgba(3,61,124,0.64)' }}
                            >
                                LED Configurator
                            </a>
                        </div>

                        {/* Right - CTA & Social */}
                        <div className="hidden lg:flex items-center gap-6">
                            <a 
                                href="/contact"
                                className="text-[15px] font-bold text-white py-[5px] px-[30px] rounded-full transition-all duration-300 hover:-mt-[2px] hover:shadow-lg"
                                style={{ backgroundColor: 'rgba(3,61,124,0.64)' }}
                            >
                                Get a Free Consultation
                            </a>
                            
                            {/* Social Icons */}
                            <div className="flex items-center gap-2" style={{ marginTop: '-20px', marginBottom: '30px' }}>
                                <SocialLink href="#" icon="twitter" />
                                <SocialLink href="#" icon="linkedin" />
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button 
                            className="lg:hidden text-white p-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <MenuIcon />
                        </button>
                    </div>
                </div>
            </header>

            {/* Header 4 - Secondary Navigation (Sticky) */}
            <header className="header_4 hidden lg:block sticky top-0 z-40 border-b border-white/10" style={{ backgroundColor: '#3f3f3f' }}>
                <div className="w-[90%] max-w-[1400px] mx-auto">
                    <div className="flex items-center justify-between">
                        {/* Left - Empty */}
                        <div></div>

                        {/* Center - Logo */}
                        <div className="py-[30px]">
                            <a href="/">
                                <img 
                                    src="https://pixontechs.com/wp-content/uploads/2025/07/PIXON-TECH-LOGO.png" 
                                    alt="Pixon Tech" 
                                    className="h-[57px] w-[120px] object-contain"
                                />
                            </a>
                        </div>

                        {/* Right - Hamburger Menu */}
                        <div className="py-[22px]">
                            <button 
                                onClick={() => setOffcanvasOpen(!offcanvasOpen)}
                                className="w-10 h-10 rounded-full flex items-center justify-center text-[#3f3f3f] transition-colors"
                                style={{ backgroundColor: '#1b57b3' }}
                            >
                                <HamburgerIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Offcanvas Menu */}
            {offcanvasOpen && (
                <>
                    <div 
                        className="fixed inset-0 bg-black/50 z-50"
                        onClick={() => setOffcanvasOpen(false)}
                    ></div>
                    <div className="fixed top-0 right-0 h-full w-[300px] z-50 p-8"
                        style={{ 
                            background: 'linear-gradient(180deg, #3f3f3f, #1e1e1e)',
                        }}
                    >
                        <button 
                            onClick={() => setOffcanvasOpen(false)}
                            className="absolute top-4 right-4 text-white"
                        >
                            <CloseIcon />
                        </button>
                        <nav className="mt-12">
                            <ul className="space-y-0">
                                <OffcanvasNavItem href="/" label="Home" />
                                <OffcanvasNavItem href="/about" label="About us" />
                                <OffcanvasNavItem href="/solutions" label="Our Solutions" />
                                <OffcanvasNavItem href="/profile" label="Company Profile" />
                                <OffcanvasNavItem href="/contact" label="Contact us" active={true} />
                            </ul>
                        </nav>
                        
                        {/* Social Icons */}
                        <div className="mt-8 flex gap-2">
                            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-[#1b57b3] transition-colors hover:text-white hover:bg-[#1b57b3]" style={{ backgroundColor: 'rgba(27,87,179,0.06)' }}>
                                <TwitterIconSmall />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-[#1b57b3] transition-colors hover:text-white hover:bg-[#1b57b3]" style={{ backgroundColor: 'rgba(27,87,179,0.06)' }}>
                                <LinkedinIconSmall />
                            </a>
                        </div>
                        <p className="text-[12px] text-[#b5b5b5] tracking-[2px] mt-6">© Copyright 2025</p>
                    </div>
                </>
            )}

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-black/95 z-50 overflow-y-auto">
                    <div className="p-6">
                        <button 
                            onClick={() => setMobileMenuOpen(false)}
                            className="absolute top-4 right-4 text-white"
                        >
                            <CloseIcon />
                        </button>
                        <nav className="mt-12">
                            <ul className="space-y-4">
                                <MobileNavItem href="/" label="Home" />
                                <MobileNavItem href="/about" label="About us" />
                                <MobileNavItem href="/solutions" label="Our Solutions" />
                                <MobileNavItem href="/profile" label="Company Profile" />
                                <MobileNavItem href="/contact" label="Contact us" active={true} />
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </>
    )
}

// Navigation Item Component
function NavItem({ href, label, active }) {
    return (
        <li className="relative">
            <a 
                href={href}
                className={`block text-[16px] font-normal px-[15px] pb-[49px] mb-[-1px] transition-colors relative
                    ${active ? 'text-[#254cb0]' : 'text-white/60 hover:text-[#254cb0]'}
                `}
                style={{
                    borderBottom: active ? '1px solid #2946bc' : '1px solid transparent'
                }}
            >
                {label}
            </a>
        </li>
    )
}

// Offcanvas Navigation Item
function OffcanvasNavItem({ href, label, active }) {
    return (
        <li>
            <a 
                href={href}
                className={`block text-[16px] py-[14px] px-[18px] border-r border-black/20 transition-colors
                    ${active ? 'text-[#1b57b3] bg-[#1b57b3] text-[#3f3f3f]' : 'text-white/70 hover:text-[#1b57b3] hover:bg-[#1b57b3] hover:text-[#3f3f3f]'}
                `}
            >
                {label}
            </a>
        </li>
    )
}

// Mobile Navigation Item
function MobileNavItem({ href, label, active }) {
    return (
        <li>
            <a 
                href={href}
                className={`block text-xl py-3 transition-colors ${active ? 'text-[#1b57b3]' : 'text-white hover:text-[#1b57b3]'}`}
            >
                {label}
            </a>
        </li>
    )
}

// Social Link Component
function SocialLink({ href, icon }) {
    return (
        <a 
            href={href}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors hover:bg-[#1b57b3]"
            style={{ backgroundColor: 'rgba(222,192,156,0.06)' }}
        >
            {icon === 'twitter' && <TwitterIconSmall />}
            {icon === 'linkedin' && <LinkedinIconSmall />}
        </a>
    )
}

// Icons
function MenuIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    )
}

function HamburgerIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    )
}

function CloseIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
}

function TwitterIconSmall() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
    )
}

function LinkedinIconSmall() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
    )
}

export default ContactHeader
