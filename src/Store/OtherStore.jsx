import Top from "../Top/Top"
import Bottom from '../BottomRooter/BottomRooter'
import './OtherStore.css'
import img from './Img/Blank.svg'
import IMGAE from './Img/MilkTea.svg'
import { useNavigate } from "react-router-dom"

export default function Store() {

    const Navigation = useNavigate()
    const ToMyStore = () => {
        Navigation('/MyStore')
    }

    return (
        <>
            <div className="Container">
                <div>
                    <Bottom />
                    <Top />
                    <div className="BySide">

                    </div>
                    <div className="otherCenter"></div>

                </div>
                <div className="WhereTheMilkTeaFrom">
                    <div className="MadeYourSelf" onClick={ToMyStore}><p>自己做</p></div>
                    <div className="otherOtherGive"><p>好友送</p></div>
                </div>
                <div className="pictureContainer">
                    <img src={IMGAE} />
                    <img src={img} />
                </div>
            </div>
        </>
    )
}