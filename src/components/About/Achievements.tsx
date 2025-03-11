import axios from 'axios'
import { useEffect, useState } from 'react'
interface Achievement {
    id: string,
    title: string,
    description: string
}
export default function Achievements() {
    const [info, setInfo] = useState<Achievement[] | null>(null)
    useEffect(() => {
        const getInfo = () => {
            axios.get('http://104.248.242.53:8000/about/achievements/')
                .then((res) => {
                    console.log(res)
                    setInfo(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        getInfo()
    }, [])

    return (
        <div>
            <div>
                <h1>Our Achievements</h1>
                <p>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
            </div>
            <div className='text-white'>
                {info ? (
                    <ul>
                        {info.map((achievement) => (
                            <li key={achievement.id}>
                                <h2>{achievement.title}</h2>
                                <p>{achievement.description}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}
