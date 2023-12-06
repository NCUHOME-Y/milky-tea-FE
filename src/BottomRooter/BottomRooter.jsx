import './BottomRooter.css'
import { useState, useRef } from 'react'


export default function InitPage() {
    let [makingBarColor,ChangeMakingBarColor] = useState('#A1A1A1')
    let [garbageColor,ChangeGarbageColor] = useState('#CCC')

    const ClickMakingBar = () => {
        ChangeMakingBarColor('#A1A1A1')
        ChangeGarbageColor('#CCC')
    }

    const ClickGarbage = () => {
        ChangeMakingBarColor('#CCC')
        ChangeGarbageColor('#A1A1A1')
    }


    return (
        <>
            <div className='bottom'>
                <svg xmlns="http://www.w3.org/2000/svg" width="82" height="81" viewBox="0 0 82 81" fill="none" className='makingBar' onClick={ClickMakingBar}>
                    <circle cx="41" cy="41" r="41" fill={makingBarColor} ></circle>
                    <text x="41" y="40" text-anchor="middle" dominant-baseline="middle" fill="black" className='Text'>制作台</text>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="82" height="80" viewBox="0 0 82 80" fill="none" className='garbage' onClick={ClickGarbage}>
                    <circle cx="41" cy="41" r="41" fill={garbageColor} />
                    <text x="41" y="40" text-anchor="middle" dominant-baseline="middle" fill="black" className='Text'>仓库</text>
                </svg>

            </div>

        </>
    )
}