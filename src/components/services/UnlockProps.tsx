interface BoxesProps {
    text: string;
    icon: string;
    arrow: string;
}

export default function UnlockProps({ text, icon, arrow }: BoxesProps) {
    return (
        <div className="w-[380px] mt-25 p-6 border border-[#262626] h-[160px] rounded-3xl">
            <div className="flex justify-center mt-5 items-center gap-5 text-white">
                <div className="w-20 h-20">
                    <img src={icon} alt="icon" className="w-full h-full" />
                </div>
                <div className="text-white text-2xl">
                    {arrow}
                </div>
            </div>

            <div className="mt-4 text-center">
                <p className="text-lg text-[#999999] max-w-[200px] mx-auto">{text}</p>
            </div>
        </div>


    );
}
