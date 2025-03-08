import logo from '../images/home/Logo.png'
export default function Header() {
    return (
        <div className='bg-[#1A1A1A]'>
            <div className='flex py-10 items-center justify-between mx-10'>
                <div >
                    <img className='w-[93px] cursor-pointer' src={logo} alt="Logo of the company" />
                </div>
                <div className='flex flex-col cursor-pointer items-end  gap-2'>
                    <div className='w-[21px] bg-white h-[2px]'></div>
                    <div className='w-[21px] bg-white h-[2px]'></div>
                    <div className='w-[15px] bg-white h-[2px]'></div>

                </div>
            </div>

        </div>
    )
}
