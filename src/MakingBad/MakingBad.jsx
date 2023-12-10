import React, { useState } from 'react';
import './MakingBad.css'
import BadTop from '../BadTop/BadTop';
import picture from './MakingBad/BadCup.svg'
import BottomBadRooter from '../BottomBadRooter/BottomBadRooter'
import TheKindOfBadTea from '../TheKindOfBadTea/TheKindOfBadTea';
import TheKindOfBadFood from '../TheKindOfBadFood/TheKindOfBadFood';
import { useNavigate } from 'react-router-dom';


export default function MakingGood() {
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate()

    const handleBoxClick = (index) => {
        setSelected(index)
        if (index === 0) {
            navigate('/BadScale')
        }
    }

    const renderBottomBar = () => {
        switch (selected) {
            case 2:
                return <TheKindOfBadTea />
            case 1:
                return <TheKindOfBadFood />
            default:
                return null;
        }
    }

    return (
        <div className='badBig'>

            <BadTop />
            <BottomBadRooter />
            <div className='badLadder'>
                {['规格', '小料', '茶料'].map((item, index) => (
                    <div
                        key={index}
                        className={`LittlebadBox ${selected === index ? 'active' : ''}`}
                        onClick={() => handleBoxClick(index)} >
                        {item}
                    </div>
                ))}
            </div>
            <div className={`BottomContainer ${selected !== null ? 'acive' : ''}`}>
                {renderBottomBar()}
            </div>
            <div className='Picture'>
                <img src={picture} />
            </div>


        </div>
    );
}