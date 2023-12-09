import Top from "../Top/Top";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomRooter from '../BottomRooter/BottomRooter'
import './Scale.css'


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

    const navigate = useNavigate()

    const NavigateToPage = () => {
        navigate('/ShowTheProduct')
    }

    return (
        <>
            <div className="All">
                <Top />
                <BottomRooter />

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
                </div>
                <div className="BottomLine">
                   <button className="BTN" onClick={NavigateToPage}>完成</button>
                </div>
            </div>
        </>
    )
}