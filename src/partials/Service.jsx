function Service({ image, description }) {
    return (
        <div className="w-[380px] h-[300px] rounded-3xl pb-10 overflow-hidden">
            <div className="w-full h-full">
                <img className="w-full h-full rounded-3xl" src={image} alt="" />
            </div>

            <div className="px-4">
                <p className="text-center text-white text-md my-4 font-bold">{description}</p>
            </div>
        </div>
    )
}

export default Service;