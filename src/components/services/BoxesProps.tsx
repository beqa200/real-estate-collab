import React from 'react'
import Boxes from './Boxes'
import FirstOpportunityIcon from "../../images/home/opportunity-1.png";
import SecondOpportunityIcon from "../../images/home/opportunity-2.png";
import ThirdOpportunityIcon from "../../images/home/opportunity-3.png";
import FourthOpportunityIcon from "../../images/home/opportunity-4.png"
import Arrow from "../../images/home/arrow.png";
export default function BoxesProps() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            <Boxes text={'Find Your Dream Home'} icon={FirstOpportunityIcon} arrow={Arrow} />
            <Boxes text={'Unlock Property Value'} icon={SecondOpportunityIcon} arrow={Arrow} />
            <Boxes text={'Effortless Property Management'} icon={ThirdOpportunityIcon} arrow={Arrow} />
            <Boxes text={'Smart Investments, Informed Decisions'} icon={FourthOpportunityIcon} arrow={Arrow} />
        </div>
    )
}
