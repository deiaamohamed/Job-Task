function ContactUs() {
    return (
        <div className="text-white">
            {/* Hero Section with Video Background */}
            <section className="relative h-[600px] overflow-hidden">
                {/* Video Background */}
                <video 
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                >
                    <source src="https://pixontechs.com/wp-content/uploads/2025/06/GettyImages-1169142900.mp4" type="video/mp4" />
                </video>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
                {/* Title */}
                <div className="absolute inset-0 flex items-end justify-center pb-20">
                    <h1 
                        className="text-[66px] font-bold text-white tracking-wide"
                        style={{ 
                            fontFamily: 'Poppins, sans-serif',
                            textShadow: '7px 7px 10px rgba(0,0,0,0.75)'
                        }}
                    >
                        CONTACT US
                    </h1>
                </div>
            </section>

            {/* Spacer */}
            <div className="h-[50px]"></div>

            {/* Contact Info Cards */}
            <section className="w-[90%] max-w-[1400px] mx-auto">
                <div className="flex flex-wrap justify-center gap-8">
                    <ServiceBox 
                        icon="czico-123-call"
                        title="Phone"
                        info="+966 58 372 0000"
                        link="tel:+966583720000"
                    />
                    <ServiceBox 
                        icon="czico-010-support"
                        title="Support Email"
                        info="info@pixontechs.com"
                        link="mailto:info@pixontechs.com"
                    />
                    <ServiceBox 
                        icon="czico-082-maps-and-flags"
                        title="Office Address"
                        info="Riyadh, Saudi Arabia"
                        link="https://maps.google.com/"
                    />
                </div>
            </section>

            {/* Divider Line */}
            <div className="w-[90%] max-w-[1400px] mx-auto my-12">
                <hr className="border-gray-700/50" />
            </div>

            {/* Main Contact Section */}
            <section className="w-[90%] max-w-[1400px] mx-auto">
                <div className="flex flex-wrap lg:flex-nowrap gap-12">
                    {/* Left Side - Info */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-6">
                            <h2 className="text-[40px] font-normal mb-2" style={{ color: '#1b57b3' }}>
                                Feel free to Contact Us
                            </h2>
                            <p className="text-[26px] font-light" style={{ color: '#666666' }}>
                                Keep in touch with us anytime
                            </p>
                        </div>

                        <p className="text-[20px] leading-relaxed mb-8" style={{ color: '#aaaaaa' }}>
                            Whether you're planning a new project or need expert support, our team is here to help.
                            We work closely with clients across industries to deliver seamless, integrated solutions.
                            Get in touch — we'll respond promptly and professionally.
                        </p>

                        {/* Spacer */}
                        <div className="h-[30px]"></div>

                        {/* Contact List */}
                        <ul className="space-y-4">
                            <li>
                                <a 
                                    href="https://wa.link/xf1t02" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-[18px] text-[#3F3F3F] font-medium hover:text-[#1b57b3] transition-colors group"
                                >
                                    <span className="w-10 h-10 rounded-full bg-[#1b57b3] flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <WhatsAppIcon />
                                    </span>
                                    <span>+966 58 372 7000</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-[18px] text-[#3F3F3F] font-medium">
                                <span className="w-10 h-10 rounded-full bg-[#1b57b3] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                                    <TwitterIcon />
                                </span>
                                <span>Twitter</span>
                            </li>
                            <li className="flex items-center gap-3 text-[18px] text-[#3F3F3F] font-medium">
                                <span className="w-10 h-10 rounded-full bg-[#1b57b3] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                                    <LinkedinIcon />
                                </span>
                                <span>Linkedin</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="w-full lg:w-1/2">
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* Spacer */}
            <div className="h-[80px]"></div>

            {/* Google Map - Full Width */}
            <section className="w-full">
                <iframe 
                    src="https://maps.google.com/maps?q=riyadh%20saudi%20arabia&t=m&z=14&output=embed&iwloc=near"
                    title="riyadh saudi arabia"
                    aria-label="riyadh saudi arabia"
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }}
                    allowFullScreen="" 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

            {/* Spacer */}
            <div className="h-[50px]"></div>
        </div>
    )
}

// Service Box Component (matching original)
function ServiceBox({ icon, title, info, link }) {
    return (
        <a 
            href={link}
            target={link.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 min-w-[300px] hover:opacity-80 transition-opacity"
        >
            <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full border-2 border-[#1b57b3] flex items-center justify-center text-[#1b57b3] group-hover:bg-[#1b57b3] group-hover:text-white transition-all duration-300">
                    {icon === 'czico-123-call' && <PhoneIcon />}
                    {icon === 'czico-010-support' && <EmailIcon />}
                    {icon === 'czico-082-maps-and-flags' && <LocationIcon />}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
                <p className="text-[18px]" style={{ color: '#aaaaaa' }}>{info}</p>
            </div>
        </a>
    )
}

// Contact Form Component (matching original)
function ContactForm() {
    return (
        <form className="space-y-5">
            {/* Name */}
            <div>
                <input 
                    type="text" 
                    name="your-name"
                    placeholder="Your Name (*)"
                    required
                    className="w-full bg-transparent border border-gray-600 rounded-[25px] px-5 py-4 text-white text-[#232323]
                        placeholder-gray-400 focus:border-[#1b57b3] focus:outline-none transition-colors"
                    style={{ color: '#232323' }}
                />
            </div>

            {/* Email */}
            <div>
                <input 
                    type="email" 
                    name="your-email"
                    placeholder="Your Email (*)"
                    required
                    className="w-full bg-transparent border border-gray-600 rounded-[25px] px-5 py-4 text-white
                        placeholder-gray-400 focus:border-[#1b57b3] focus:outline-none transition-colors"
                />
            </div>

            {/* Subject */}
            <div>
                <input 
                    type="text" 
                    name="your-subject"
                    placeholder="Subject"
                    className="w-full bg-transparent border border-gray-600 rounded-[25px] px-5 py-4 text-white
                        placeholder-gray-400 focus:border-[#1b57b3] focus:outline-none transition-colors"
                />
            </div>

            {/* Dropdown */}
            <div>
                <select 
                    name="menu-178"
                    className="w-full bg-transparent border border-gray-600 rounded-[25px] px-5 py-4 text-white
                        focus:border-[#1b57b3] focus:outline-none transition-colors cursor-pointer appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5em' }}
                >
                    <option value="Enquire a Quote" className="bg-[#3f3f3f] text-white">Enquire a Quote</option>
                    <option value="General Enquiry" className="bg-[#3f3f3f] text-white">General Enquiry</option>
                    <option value="Support Department" className="bg-[#3f3f3f] text-white">Support Department</option>
                    <option value="Others" className="bg-[#3f3f3f] text-white">Others</option>
                </select>
            </div>

            {/* Message */}
            <div>
                <textarea 
                    name="your-message"
                    placeholder="Your Message"
                    rows="6"
                    className="w-full bg-transparent border border-gray-600 rounded-[25px] px-5 py-4 text-white
                        placeholder-gray-400 focus:border-[#1b57b3] focus:outline-none transition-colors resize-none"
                ></textarea>
            </div>

            {/* Submit Button */}
            <div>
                <button 
                    type="submit"
                    className="bg-[#1b57b3] hover:bg-[#3f3f3f] text-[#3f3f3f] hover:text-white font-bold py-[13px] px-[26px] rounded-full 
                        transition-all duration-300 hover:shadow-lg"
                >
                    Send Message
                </button>
            </div>
        </form>
    )
}

// SVG Icons
function PhoneIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
    )
}

function EmailIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
    )
}

function LocationIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
    )
}

function WhatsAppIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
    )
}

function TwitterIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="white" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
    )
}

function LinkedinIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="white" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
    )
}

export default ContactUs
