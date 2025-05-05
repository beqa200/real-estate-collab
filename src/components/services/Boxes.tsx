interface BoxesProps {
    text: string;
    icon: string;
    arrow: string;
}

export default function Boxes({ text, icon, arrow }: BoxesProps) {
    return (
        <div className="w-[280px] mt-25 p-6 bg-[#1A1A1A] h-[160px] rounded-3xl relative hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-4 right-4 text-gray-400">
                <img src={arrow} alt="arrow" className="w-8 mr-5 h-8" />
            </div>
            <div className="flex flex-col items-center justify-center h-full text-white">
                <div className=" flex items-center justify-center rounded-full text-white mb-2">
                    <img src={icon} alt="icon" className="w-20 h-20" />
                </div>
                <p className="text-md mt-3 font-medium text-center">{text}</p>
            </div>
        </div>
    );
}
