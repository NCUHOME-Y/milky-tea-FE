import BrownTeaImage from './TheKindOfBadTeaImage/BrownTea.svg'
import GreenTeaImage from './TheKindOfBadTeaImage/GreenTea.svg'
import OolongTeaImage from './TheKindOfBadTeaImage/OolongTea.svg'
import MagmaImage from './TheKindOfBadTeaImage/Magma.svg'
import BoomImage from './TheKindOfBadTeaImage/Boom.svg'
import FairyWater from './TheKindOfBadTeaImage/FairyWater.svg'
import './TheKindOfBadTea.css'

export default function TheKindOfBadTea() {
    return (
        <>
            <div className='AllofbadElement'>
                <div className='Line'>
                    <div className='BrownTea'>
                        <img src={BrownTeaImage} />
                        <p>红茶</p>
                    </div>
                    <div className='GreenTea'>
                        <img src={GreenTeaImage} />
                        <p>绿茶</p>

                    </div>
                    <div className='OolongTea'>
                        <img src={OolongTeaImage} />
                        <p>乌龙茶</p>
                    </div>
                </div>
                <div className='Line'>
                    <div className='Boom'>
                        <img src={BoomImage} />
                        <p>敌敌畏</p>
                    </div>
                    <div className='Magma'>
                        <img src={MagmaImage} />
                        <p>岩浆</p>
                    </div>
                    <div className='FairWater'>
                        <img src={FairyWater} />
                        <p>风油精</p>

                    </div>

                </div>


            </div>
        </>
    )
}