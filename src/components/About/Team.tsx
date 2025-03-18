import axios from "axios"
import { Send } from "lucide-react"
import { useEffect, useState } from "react"
interface TeamMember {
    id: number,
    image: string,
    name: string,
    position: string,
    hello: string
}

export default function Team() {
    const [team, setTeam] = useState<TeamMember[]>()
    useEffect(() => {
        axios.get('http://104.248.242.53:8000/about/staff/')
            .then((res) => setTeam(res.data.results))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="max-w-[1200px] mx-auto flex  flex-col items-center mt-10">
            <div className="flex flex-col  gap-5">
                <h2 className="text-white text-[32px]">Meet the Estatein Team</h2>
                <p className="text-[16px] text-[#999999]">At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.</p>
            </div>
            <div className="flex flex-col lg:gap-9   items-center justify-center gap-4 lg:flex-row ">

                {team?.map((member) => (
                    <div className="flex border rounded-2xl border-gray-800 p-5 flex-col items-center gap-6" key={member.id}>
                        <img className="w-[250px] h-[200px]" src={member.image} alt="images of members" />
                        <h3 className="text-[18px] text-white font-bold">{member.name}</h3>
                        <p className="text-[#999999] text-[16px]">{member.position}</p>
                        <div className="relative flex items-center w-full bg-gray-900 rounded-full p-2">
                            <input
                                placeholder={member.hello}
                                type="text"
                                className="w-full text-2xl placeholder:text-[14px] placeholder-white h-[40px] bg-transparent outline-none text-white px-4"
                            />
                            <button className="absolute cursor-pointer right-6 p-4 bg-purple-600  rounded-full">
                                <Send className="text-white w-7 h-7" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}
