import './TheKindOfFood.css'
import Top from '../Top/Top'
import PuddingImage from './FoodImage/Pudding.svg'
import PearlImage from './FoodImage/Pearl.svg'
import CoconutImage from './FoodImage/Coconut.svg'
import LemonImage from './FoodImage/Lemon.svg'
import TaroBalls from './FoodImage/TaroBalls.svg'
import SnowTopsImage from './FoodImage/SnowTops.svg'
import RedBeans from './FoodImage/RedBeans.svg'
import FairyGrass from './FoodImage/FairyGrass.svg'

export default function TheKindOfFood() {

    return (
        <>
            <Top />
            <div className='AllofElement'>
                <div className='Line'>
                    <div className='Pudding'>
                        <img src={PuddingImage} />
                        <p>布丁</p>
                    </div>
                    <div className='Pearl'>
                        <img src={PearlImage} />
                        <p>珍珠</p>

                    </div>
                    <div className='Coconut'>
                        <img src={CoconutImage} />
                        <p>椰果</p>
                    </div>
                    <div className='Lemon'>
                        <img src={LemonImage} />
                        <p>柠檬</p>
                    </div>
                </div>
                <div className='Line'>
                    <div className='TaroBalls'>
                        <img src={TaroBalls} />
                        <p>芋圆</p>
                    </div>
                    <div className='SnowTops'>
                        <img src={SnowTopsImage} />
                        <p>雪顶</p>
                    </div>
                    <div className='RedBeans'>
                        <img src={RedBeans} />
                        <p>红豆</p>

                    </div>
                    <div className='FairyGrass'>
                        <img src={FairyGrass} />
                        <p>仙草</p>

                    </div>


                </div>


            </div>
        </>
    )
}