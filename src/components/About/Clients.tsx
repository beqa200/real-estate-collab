import axios from "axios"
import { useEffect, useState } from "react"
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
            .then((res) => console.log(res.data.results))
            .catch((err) => console.log(err))
    }, [])
    return (
        <div className="text-white">
            {client.map((item) => (
                <div>
                    <p>{item.year}</p>
                    <p>{item.company_name}</p>
                    <p>{item.category}</p>
                    <p>{item.domain}</p>
                    <p>{item.message}</p>

                </div>

            ))}
        </div>
    )
}
