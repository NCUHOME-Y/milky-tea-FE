import { captureScreen } from './TakeAPhoto.js'
import FinalBadTop from './FinalBadTop/FinalBadTop.jsx'
import BadEnding from './IMG/BadEnding.png'
import React, { useState } from 'react';
import { Button, Flex } from 'antd';
import './GetStinkyTea.css'
import BottomBadRooter from '../BottomBadRooter/BottomBadRooter.jsx'


export default function GetTheMilkTea() {
    const [loadings, setLoadings] = useState([]);
    // const navigate = useNavigate()
    // const BackToLogin = () => {
    //     setInterval(() => {
    //         navigate('/Login')
    //     },3000 )
    // }
    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 3000);
    };
    return (
        <>
            <div className='badTheBigBox'>
                <FinalBadTop />
                <BottomBadRooter />
                <div className='ThreeElement'>
                    <div className='badMessage' >
                        <p className='messageWord'>收到奶茶力！！！</p>
                    </div>
                    <div className='GoodPicture'>
                        <img src={BadEnding} />

                    </div>
                    <div className='TakePicture'>

                        <Button className='badPictureButton' type="primary" loading={loadings[0]} onClick={() => {enterLoading(0),captureScreen()}} >
                            拍照留念一下！
                        </Button>
                    </div>
                </div>

            </div>
        </>

    )
}