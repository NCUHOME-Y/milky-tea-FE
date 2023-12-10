import RedBeans from './TheKindOfBadFoodImage/RedBeans.svg'
import TaroBalls from './TheKindOfBadFoodImage/TaroBalls.svg'
import FairyGrass from './TheKindOfBadFoodImage/FairyGrass.svg'
import Pearl from './TheKindOfBadFoodImage/Pearl.svg'
import FishBone from './TheKindOfBadFoodImage/FishBone.svg'
import Octopus from './TheKindOfBadFoodImage/Octopus.svg'
import StinkySocks from './TheKindOfBadFoodImage/StinkySocks.svg'
import Pepper from './TheKindOfBadFoodImage/Pepper.svg'
import './TheKindOfBadFood.css'

export default function TheKindOfBadFood() {
    return (
        <>
            <div className='AllofbadElement'>
                <div className='Line'>
                    <div className='FishBone'>
                        <img src={FishBone} />
                        <p>鱼骨头</p>
                    </div>
                    <div className='Octopus'>
                        <img src={Octopus} />
                        <p>触手</p>

                    </div>
                    <div className='StinkySocks'>
                        <img src={StinkySocks} />
                        <p>臭袜子</p>
                    </div>
                    <div className='Pepper'>
                        <img src={Pepper} />
                        <p>辣椒</p>
                    </div>
                </div>
                <div className='Line'>
                    <div className='TaroBalls'>
                        <img src={TaroBalls} />
                        <p>芋圆</p>
                    </div>
                    <div className='FairyGrass'>
                        <img src={FairyGrass} />
                        <p>仙草</p>
                    </div>
                    <div className='Pearl'>
                        <img src={Pearl} />
                        <p>珍珠</p>

                    </div>
                    <div className='RedBeans'>
                        <img src={RedBeans} />
                        <p>红豆</p>

                    </div>


                </div>


            </div>
        </>
    )
}