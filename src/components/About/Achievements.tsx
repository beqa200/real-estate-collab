import axios from "axios";
import { useEffect, useState } from "react";
interface Achievement {
  id: string;
  title: string;
  description: string;
}
export default function Achievements() {
  const [info, setInfo] = useState<Achievement[] | null>(null);
  useEffect(() => {
    const getInfo = () => {
      axios
        .get("http://104.248.242.53:8000/about/achievements/")
        .then((res) => {
          console.log(res);
          setInfo(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getInfo();
  }, []);

  return (
    <div className="flex flex-col px-5 gap-16 w-full max-w-[1200px] mx-auto  items-start  text-white">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-[32px]">Our Achievements</h1>
        <p className="text-[#999999] text-[16px]">
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary.
        </p>
      </div>
      <div className="text-white ">
        {info ? (
          <ul className="flex flex-col lg:flex-row items-center   gap-6 ">
            {info.map((achievement) => (
              <li
                className="border border-gray-700 rounded-2xl p-10 flex flex-col gap-5  "
                key={achievement.id}
              >
                <h2 className="text-[20px] font-bold">{achievement.title}</h2>
                <p className="text-[#999999] text-[16px]  ">
                  {achievement.description}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
