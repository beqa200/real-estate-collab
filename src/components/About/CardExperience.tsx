interface StepCardProps {
    stepNumber: number;
    title: string;
    description: string;
}
export default function CardExperience({ stepNumber, title, description }: StepCardProps) {
    return (
        <div className="flex flex-col   mx-auto max-w-[1200px] w-full  ">
            <h2 className="text-[20px] mb-5 text-white font-bold">step: 0{stepNumber} </h2>
            <div className="border p-10 flex h-[220px] max-w-[410px] flex-col gap-4 border-gray-700 rounded-2xl">
                <p className="text-[20px]  text-white font-bold">{title}</p>
                <p className="text-[#999999] text-[16px]">{description}</p>
            </div>

        </div>

    )
}
