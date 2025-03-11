
import iconContainer from '../../images/home/Icon Container.png'

export default function OurValues() {
    return (
        <div>
            <div className='px-5 max-w-[1200px] items-center justify-between mx-auto lg:flex'>
                <div className='max-w-[500px] flex flex-col items-start gap-4 lg:ml-15  '>
                    <h2 className='text-[#FFFFFF] text-[34px] font-bold'>Our Values</h2>
                    <p className='text-[#999999]  text-[16px]'>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
                </div>
                <div className='border max-w-[699px] px-10 py-10 flex flex-col items-start gap-10 border-[#999999]'>
                    <div className='lg:flex gap-3'>
                        <div className='border-b border-b-[#999999]'>
                            <div className='flex gap-2 items-center'>
                                <img src={iconContainer} alt="" />
                                <span className='text-white text-[22px] front-bold'>Trust</span>
                            </div>
                            <div>
                                <p className='text-[#999999] pb-5 text-[16px]'>Trust is the cornerstone of every successful real estate transaction.</p>
                            </div>

                        </div>
                        <div className='border-b border-b-[#999999]'>
                            <div className='flex gap-2 items-center'>
                                <img src={iconContainer} alt="" />
                                <span className='text-white text-[22px] front-bold'>Trust</span>
                            </div>
                            <div>
                                <p className='text-[#999999] pb-5 text-[16px]'>Trust is the cornerstone of every successful real estate transaction.</p>
                            </div>

                        </div>
                    </div>
                    <div className='lg:flex gap-3'>
                        <div className='border-b border-b-[#999999]'>
                            <div className='flex gap-2 items-center'>
                                <img src={iconContainer} alt="" />
                                <span className='text-white text-[22px] front-bold'>Trust</span>
                            </div>
                            <div>
                                <p className='text-[#999999] pb-5 text-[16px]'>Trust is the cornerstone of every successful real estate transaction.</p>
                            </div>

                        </div>
                        <div className='border-b  border-b-[#999999]'>
                            <div className='flex gap-2 items-center'>
                                <img src={iconContainer} alt="" />
                                <span className='text-white text-[22px] front-bold'>Trust</span>
                            </div>
                            <div>
                                <p className='text-[#999999] pb-5 text-[16px]'>Trust is the cornerstone of every successful real estate transaction.</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
