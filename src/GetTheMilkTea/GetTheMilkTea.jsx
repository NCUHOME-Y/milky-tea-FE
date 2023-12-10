import { captureScreen } from './TakeAPhoto.js'
import FinalTop from './FinalTop/FinalTop.jsx'
import WarmWord from './IMG/WarnWord.png'
import React, { useState } from 'react';
import { PoweroffOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
import './GetTheMilkTea.css'
import BottomRooter from '../BottomRooter/BottomRooter.jsx'
import { useNavigate } from 'react-router-dom';

export default function GetTheMilkTea() {
    const [loadings, setLoadings] = useState([]);
    const navigate = useNavigate()
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
            <div className='TheBigBox'>
                <FinalTop />
                <BottomRooter />
                <div className='ThreeElement'>
                    <div className='Message' >
                        <p className='messageWord'>收到奶茶力！！！</p>
                    </div>
                    <div className='GoodPicture'>
                        <img src={WarmWord} />

                    </div>
                    <div className='TakePicture'>

                        <Button className='PictureButton' type="primary" loading={loadings[0]} onClick={() => {enterLoading(0),captureScreen()}} >
                            拍照留念一下！
                        </Button>
                    </div>
                </div>

            </div>
        </>

    )
}