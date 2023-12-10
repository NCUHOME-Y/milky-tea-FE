import img from './SVG/BadTO.svg'
import { useState } from 'react'
import BadTop from './BadTopToFriends/BadTop.jsx'
import './badToFriend.css'
import BottomBadRooter from '../BottomBadRooter/BottomBadRooter.jsx'
import { Button, Flex } from 'antd';
import { useNavigate } from 'react-router-dom'

export default function ToFriend() {
    const Navigater = useNavigate()
    const ToGet = () => {
        Navigater('/GetStinkyTea')
    }
    return (

        <>
            <div className='AllbadToFriend'>
                <BadTop />
                <BottomBadRooter />
                <div className='InTheFirstLine'>
                    <div>
                        <img src={img} />
                    </div>
                    <div className='badInputName'>
                        <input type='text' placeholder='输入姓名' className='badinputname' />
                    </div>
                </div>
                <div className='badOutsideBox'>
                    <p className='badTheWordWannaSay'>想说的话：</p>
                    <div className='badInsideBox'>
                        <textarea className='badInsideTextarea'>

                        </textarea>

                    </div>
                </div>
                <div className='InTheBottom'>
                    <Button type="primary" className='badBottomButton' onClick={ToGet}>
                        完成
                    </Button>
                </div>
            </div>
        </>
    )
}