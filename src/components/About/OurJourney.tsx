import aboutImage from '../../images/home/about.png'

export default function OurJourney() {
    return (
        <div>
            <div className=' lg:flex items-center max-w-[1200px] mx-auto lg:flex-row-reverse  '>
                <div className='mx-6'>
                    <img src={aboutImage} alt="" />
                </div>
                <div className='flex flex-col items-center'>
                    <div className='flex lg:ml-20 flex-col mx-6 items-start'>
                        <h1 className='text-[white] text-[28px] font-bold'>Our Journey</h1>
                        <p className='text-[#999999] max-w-[600px] text-[16px]'>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>
                    </div>
                    <section className="flex flex-wrap gap-[1.2rem] mt-[4rem]">
                        <div className="flex w-full gap-[1.2rem]">
                            <div className="result-container">
                                <p className="people-amount">200+</p>
                                <span className="result">Happy Customers</span>
                            </div>
                            <div className="result-container">
                                <p className="people-amount">10+</p>
                                <span className="result">Properties For Clients</span>
                            </div>
                        </div>
                        <div className="result-container">
                            <p className="people-amount">16+</p>
                            <span className="result">Years of Experience</span>
                        </div>
                    </section>
                </div>

            </div>
        </div>
    )
}
