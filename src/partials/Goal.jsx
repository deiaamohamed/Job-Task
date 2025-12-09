function Goal(props) {
    const { title, description, image } = props;

    
    return (
        <div className="basis-1/3 bg-black rounded-2xl pb-8 border-b-2 border-b-white transition-all hover:-translate-y-5 hover:border-b-blue-400">
            <img className="w-full rounded-3xl" src={image} />
            <div className="px-4">
                <h4 className="text-2xl font-bold -translate-y-5">{title}</h4>
                <p className="text-gray-400 text-justify text-md">{description}</p>
            </div>
        </div>
    )
}

export default Goal;