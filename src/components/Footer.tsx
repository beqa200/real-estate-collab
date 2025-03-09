import { Facebook, Linkedin, Mail, Send, Twitter, Youtube } from 'lucide-react'
import logo from '../images/home/Logo.png'
export default function Footer() {
    return (
        <div>
            <div className='mt-20  pt-20 pb-20 flex flex-col lg:flex-row gap-20  bg-[#141414] '>
                <div className='flex flex-col items-start ml-5 lg:ml-20 gap-8'>
                    <img src={logo} alt="Logo of company" />
                    <form className="relative">
                        <div className="relative w-[350px]">
                            <input
                                className="w-full text-[16px] text-[#999999] py-5 pl-15 pr-10 border border-[#999999] rounded"
                                type="text"
                                placeholder="Enter Your Email"
                            />
                            <div className="absolute scale-75  left-3 top-1/2 -translate-y-1/2 text-[#999999]">
                                <Mail />
                            </div>
                            <div className="absolute scale-75 right-3 top-1/2 -translate-y-1/2 text-[#999999]">
                                <Send />
                            </div>
                        </div>
                    </form>


                </div>
                <div className='flex  mt-10 ml-5 gap-32 items-center'>
                    <div>
                        <h3 className='text-[#999999] mb-5 text-[18px]'>Home</h3>
                        <ul className='text-white flex flex-col items-start gap-5 text-[16px]'>
                            <li className='cursor-pointer'>Hero Section</li>
                            <li className='cursor-pointer'>Features</li>
                            <li className='cursor-pointer'>Properties</li>
                            <li className='cursor-pointer'>Testimonials</li>
                            <li className='cursor-pointer'>FAQ's</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[#999999] mb-5 text-[18px]'>About Us</h3>
                        <ul className='text-white flex flex-col items-start gap-5 text-[16px]'>
                            <li className='cursor-pointer'>Our Story</li>
                            <li className='cursor-pointer'> Our Works</li>
                            <li className='cursor-pointer'>How It Works</li>
                            <li className='cursor-pointer'>Our Team</li>
                            <li className='cursor-pointer'>Our Clients</li>
                        </ul>
                    </div>
                </div>
                <div className="flex  gap-[73px] ml-5 items-start ">
                    <div className="flex lg:flex-row gap-24 flex-col justify-between h-full">
                        <div>
                            <h3 className="text-[#999999] mt-10 mb-5 text-[18px]">Properties</h3>
                            <ul className='text-white flex flex-col items-start gap-5 text-[16px]'>
                                <li className='cursor-pointer' >Portfolio</li>
                                <li className='cursor-pointer'>Categories</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#999999] mt-10 mb-5 text-[18px]">Contact us</h3>
                            <ul className='text-white flex flex-col items-start gap-5 text-[16px]'>
                                <li className='cursor-pointer'>Contact Form</li>
                                <li className='cursor-pointer'>Our Offices</li>

                            </ul>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-[#999999] mt-10 mb-5 text-[18px]">Services</h3>
                        <ul className='text-white flex flex-col items-start gap-5 text-[16px]'>
                            <li className='cursor-pointer'>Valuation Mastery</li>
                            <li className='cursor-pointer'>Strategic Marketing</li>
                            <li className='cursor-pointer'>Negotiation Wizardry</li>
                            <li className='cursor-pointer'>Closing Success</li>
                            <li className='cursor-pointer'>Property Management</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className='bg-gray-500 flex w-full  justify-between px-10 lg:flex-row-reverse flex-col items-center '>
                <div className='flex items-center  justify-center gap-4 py-10'>
                    <div className='bg-[#141414] max-w-max px-4 rounded-full py-4 '>
                        <Facebook className='text-white cursor-pointer ' />
                    </div>
                    <div className='bg-[#141414] max-w-max px-4 rounded-full py-4 '>
                        <Linkedin className='text-white cursor-pointer ' />
                    </div>
                    <div className='bg-[#141414] max-w-max px-4 rounded-full py-4 '>
                        <Twitter className='text-white cursor-pointer ' />
                    </div>
                    <div className='bg-[#141414] max-w-max px-4 rounded-full py-4 '>
                        <Youtube className='text-white cursor-pointer ' />
                    </div>
                </div>
                <div className='text-white lg:transform lg:translate-y-6 flex  flex-col lg:flex-row gap-8 items-center pb-10'>
                    <h3 className='text-[18px]'>@2023 Estatein. All Rights Reserved.</h3>
                    <h4 className='text-[16px]'>Terms & Conditions</h4>
                </div>
            </div>
        </div>

    )
}
