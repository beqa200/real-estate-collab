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
        <div className="flex flex-col  items-center justify-center gap-4 lg:flex-row ">
            {team?.map((member) => (
                <div className="flex border border-gray-800 p-5 flex-col items-center gap-2" key={member.id}>
                    <img className="w-[250px]" src={member.image} alt="images of members" />
                    <h3 className="text-[20px] text-white font-bold">{member.name}</h3>
                    <p className="text-[#999999] text-[18px]">{member.position}</p>
                    <div className="relative flex items-center w-full bg-gray-900 rounded-full p-2">
                        <input
                            placeholder={member.hello}
                            type="text"
                            className="w-full text-2xl placeholder:text-[14px] placeholder-white h-[40px] bg-transparent outline-none text-white px-4"
                        />
                        <button className="absolute right-6 p-4 bg-purple-600  rounded-full">
                            <Send className="text-white w-7 h-7" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
