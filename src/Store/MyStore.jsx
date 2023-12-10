import Top from "../Top/Top"
import Bottom from '../BottomRooter/BottomRooter'
import './MyStore.css'
import img from './Img/Blank.svg'
import IMGAE from './Img/MilkTea.svg'
import { useNavigate } from "react-router-dom"

export default function Store() {
    const FindHistory = useNavigate()
    const ToOtherStore = () => {
        FindHistory('/OtherStore')
    }
     return (
        <>
            <div className="Container">
                <div>
                    <Bottom />
                    <Top />
                    <div className="BySide">

                    </div>
                    <div className="Center"></div>

                </div>
                <div className="WhereTheMilkTeaFrom">
                    <div className="MadeYourSelf"><p>自己做</p></div>
                    <div className="OtherGive" onClick={ToOtherStore}><p>好友送</p></div>
                </div>
                <div className="pictureContainer">
                    <img src={IMGAE} />
                    <img src={img} />
                </div>
            </div>
        </>
    )
}