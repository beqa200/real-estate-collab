import React from 'react'
import FirstOpportunityIcon from "../../images/home/opportunity-1.png";
import SecondOpportunityIcon from "../../images/home/opportunity-2.png";
import ThirdOpportunityIcon from "../../images/home/opportunity-3.png";
import Arrow from "../../images/home/arrow.png";
import UnlockProps from './UnlockProps';
export default function Unlock() {
    return (
        <div className='mt-10 '>
            <div className='flex flex-col gap-3'>
                <h2 className='text-white font-bold text-6xl'>Unlock Property Value</h2>
                <p className='text-[#999999] text-lg max-w-[800px]'>Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize <br /> the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your <br /> selling journey</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <UnlockProps text={'Discover the true worth of your property with our expert valuation services.'} icon={FirstOpportunityIcon} arrow={'Valuation Mastery'} />
                <UnlockProps text={'Selling a property requires more than just a listing; it demands a strategic marketing.'} icon={SecondOpportunityIcon} arrow={'Strategic Marketing'} />
                <UnlockProps text={'Negotiating the best deal is an art, and our negotiation experts are masters of it.'} icon={ThirdOpportunityIcon} arrow={'Negotiation Wizardry'} />
            </div>
        </div>
    )
}
