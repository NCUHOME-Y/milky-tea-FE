import React, { useState } from 'react';
import './MakingGood.css'
import Top from '../Top/Top';
import picture from './MakingGood/GoodCup.svg'
import BottomRooter from '../BottomRooter/BottomRooter'
import TheKindOfTea from '../TheKindOfTea/TheKindOfTea';
import TheKindOfFood from '../TheKindOfFood/TheKindOfFood';
import { useNavigate } from 'react-router-dom';


export default function MakingGood() {
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate()

    const handleBoxClick = (index) => {
        setSelected(index)
        if (index === 0) {
            navigate('/Scale')
        }
    }

    const renderBottomBar = () => {
        switch (selected) {
            case 2:
                return <TheKindOfTea />
            case 1:
                return <TheKindOfFood />
            default:
                return null;
        }
    }

    return (
        <div className='Big'>

            <Top />
            <BottomRooter />
            <div className='Ladder'>
                {['规格', '小料', '茶料'].map((item, index) => (
                    <div
                        key={index}
                        className={`LittleBox ${selected === index ? 'active' : ''}`}
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
