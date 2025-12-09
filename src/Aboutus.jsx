function Aboutus(){
    return(
        <div className="md:flex">
            <div className="p-6 order-2 basis-1/2">
                <hr className="text-gray-800" />
                <h1 className="text-3xl font-bold uppercase my-3">about us</h1>
                <p className="leading-7 text-gray-400 text-justify"><span className="text-blue-700">Pixon Tech</span> is a Saudi-based audiovisual integrator specializing in next-generation display, lighting, and interactive technologies. From iconic LED façades to collaboration-ready boardrooms, we transform spaces into dynamic experiences that inform, inspire, and engage. Our multidisciplinary team blends engineering rigor with creative flair to deliver turnkey solutions for clients of every scale.</p>
            
                <div className="flex items-center gap-16">
                    <button className="bg-blue-400 text-white py-2 px-3 rounded-full text-sm my-7">Learn more</button>
                    <a className="text-gray-600 text-xs italic"  href="http://pixontechs.com/our-solutions/">- Our Solutions</a>
                </div>
            </div>

            <div className="p-6 order-1 basis-1/2">
                <video className="w-full h-full" controls autoPlay>
                    <source src="http://pixontechs.com/wp-content/uploads/2025/06/about-us.mp4" media="video/mp4" />
                </video>
            </div>
        </div>

    )
}
export default Aboutus