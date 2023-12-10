import BadTop from "../BadTop/BadTop";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomBadRooter from '../BottomBadRooter/BottomBadRooter'
import './BadScale.css'


export default function Scale() {
    const [Scale, setScale] = useState(null)
    const HandleScale = (index) => {
        setScale(index)
    }
    const [Sweetness, setSweetness] = useState(null)
    const HandleSweetness = (index) => {
        setSweetness(index)
    }
    const [Temperature, setTemperature] = useState(null)
    const HandleTemperature = (index) => {
        setTemperature(index)
    }
    const [HowSpicy, setHowSpicy] = useState(null)
    const HandleHowSpicy = (index) => {
        setHowSpicy(index)
    }
    const [HowBitter, setHowBitter] = useState(null)
    const HandleHowBitter = (index) => {
        setHowBitter(index)
    }

    const navigate = useNavigate()

    const NavigateToPage = () => {
        navigate('/ShowTheBadProduct')
    }

    return (
        <>
            <div className="All">
                <BadTop />
                <BottomBadRooter />

                <div className="BigBox">
                    <div className="Scale">
                        <p className="ScaleWord">规格</p>
                        <div className="Choice">
                            {
                                ['小杯', '中杯', '大杯'].map((item, index) => (
                                    <button
                                        key={index}
                                        className={`LittleBtn1${Scale === index ? 'active' : ''}`}
                                        onClick={() => { HandleScale(index) }}
                                    >
                                        {item}
                                    </button>

                                ))
                            }
                        </div>

                    </div>
                    <div className="Sweetness">
                        <p className="ScaleWord">甜度</p>
                        <div className="Choice">
                            {
                                ['七分甜', '五分甜', '三分甜', '不额外加糖'].map((item, index) => (
                                    <button
                                        key={index}
                                        className={`LittleBtn2${Sweetness === index ? 'active' : ''}`}
                                        onClick={() => { HandleSweetness(index) }}
                                    >
                                        {item}
                                    </button>

                                ))
                            }
                        </div>
                    </div>
                    <div className="Temperature">
                        <p className="ScaleWord">温度</p>
                        <div className="Choice">
                            {
                                ['少冰', '正常冰', '多冰', '温', '热'].map((item, index) => (
                                    <button
                                        key={index}
                                        className={`LittleBtn3${Temperature === index ? 'active' : ''}`}
                                        onClick={() => { HandleTemperature(index) }}
                                    >
                                        {item}
                                    </button>

                                ))
                            }
                        </div>
                    </div>
                    <div className="HowSpicy">
                        <p className="ScaleWord">辣度</p>
                        <div className="Choice">
                            {
                                ['微辣', '辣', '变态辣'].map((item, index) => (
                                    <button
                                        key={index}
                                        className={`LittleBtn4${HowSpicy === index ? 'active' : ''}`}
                                        onClick={() => { HandleHowSpicy(index) }}
                                    >
                                        {item}
                                    </button>

                                ))
                            }
                        </div>
                    </div>
                    <div className="HowSpicy">
                        <p className="ScaleWord">苦度</p>
                        <div className="Choice">
                            {
                                ['微苦', '苦', '非常苦'].map((item, index) => (
                                    <button
                                        key={index}
                                        className={`LittleBtn5${HowBitter === index ? 'active' : ''}`}
                                        onClick={() => { HandleHowBitter(index) }}
                                    >
                                        {item}
                                    </button>

                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="BottomLine">
                   <button className="BTN" onClick={NavigateToPage}>完成</button>
                </div>
            </div>
        </>
    )
}