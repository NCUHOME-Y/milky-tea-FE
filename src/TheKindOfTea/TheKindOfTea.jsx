// import Ladder from '../Ladder/Ladder.jsx'
import React,{useRef} from 'react'
// import Top from '../Top/Top.jsx'
import BrownTeaImage from './TeaImage/BrownTea.svg'
import GreenTeaImage from './TeaImage/GreenTea.svg'
import OolongTeaImage from './TeaImage/OolongTea.svg'
import WaterMelonJuiceImage from './TeaImage/WaterMelonJuice.svg'
import LemonJuiceImage from './TeaImage/LemonJuice.svg'
import AppleJuiceImage from './TeaImage/AppleJuice.svg'
import './TheKindOfTea.css'

export default function TheKindOfTea() {

 

    const ChangeColor = () => {
        ClickRef.current.style.fill = '#B28970'
    }

    return (
        <>
            <div className='AllofElement'>
                <div className='Line'>
                    <div className='BrownTea'>
                        <img src={BrownTeaImage} />
                        <p>红茶</p>
                    </div>
                    <div className='GreenTea'>
                        <img src={GreenTeaImage}  />
                        <p>绿茶</p>

                    </div>
                    <div className='OolongTea'>
                        <img src={OolongTeaImage} />
                        <p>乌龙茶</p>
                    </div>
                </div>
                <div className='Line'>
                    <div className='WaterMelonJuice'>
                        <img src={WaterMelonJuiceImage}/>
                        <p>西瓜汁</p>
                    </div>
                    <div className='LemonJuice'>
                        <img src={LemonJuiceImage} />
                        <p>柠檬汁</p>
                    </div>
                    <div className='AppleJuice'>
                        <img src={AppleJuiceImage} />
                        <p>苹果汁</p>

                    </div>

                </div>


            </div>
        </>
    )
}