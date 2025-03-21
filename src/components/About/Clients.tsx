import axios from "axios"
import { Grid, Zap } from "lucide-react"
import { useEffect, useState } from "react"

import { SwiperSlide, Swiper } from "swiper/react"

interface Clients {
    id: number,
    category: string,
    company_name: string,
    domain: string,
    message: string,
    year: string
}
export default function Clients() {
    const [client, setClient] = useState<Clients[]>([])
    useEffect(() => {
        axios.get('http://104.248.242.53:8000/about/clients/')
            .then((res) => setClient(res.data.results))
            .catch((err) => console.log(err))
    }, [])
    return (
        <div className="max-w-[1200px] mx-auto ">
            <div>
                <h2></h2>
            </div>
            <Swiper

                slidesPerView={1}
                breakpoints={{ 1024: { slidesPerView: 2 } }}
            >

                <div className="text-white ">
                    {client.map((item) => (
                        <SwiperSlide>


                            <div className="bg-black  max-w-[550px] rounded-xl p-8 relative">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-2">
                                        <p className="text-[#999999] text-[16px]">Since {item.year}</p>
                                        <h3 className="text-white text-[32px] font-medium">{item.company_name}</h3>
                                    </div>
                                    <button className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white px-4 py-2 rounded-md flex items-center">
                                        <span className="mr-2 cursor-pointer">Visit Website</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                    <div className="flex items-center gap-2">
                                        <Grid className="h-5 w-5 text-zinc-400" />
                                        <p className="text-white">{item.domain}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Zap className="h-5 w-5 text-zinc-400" />
                                        <p className="text-white">{item.category}</p>
                                    </div>
                                </div>

                                <div className="mt-8 bg-zinc-900 max-w-[500px] p-6 rounded-lg">
                                    <p className="text-white text-xl  mb-4 flex items-center gap-2">
                                        What They Said <span className="text-xl">😊</span>
                                    </p>
                                    <p className="text-white text-2xl leading-relaxed">{item.message}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )

                    )}
                </div>


            </Swiper>


        </div >

    )
}
