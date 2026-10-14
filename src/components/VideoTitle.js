const VideoTitle = ({title, overview}) => {
    return (
        <div className="w-full aspect-video pt-[20%] px-2 md:px-12 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-lg md:text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4 hidden md:inline-block">{overview}</p>
            <div>
                <button className="bg-white text-black p-1 md:p-4 px-2 md:px-12 text-sm md:text-xl rounded-lg hover:bg-opacity-80">Play</button>
                <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hidden md:inline-block">More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;