import img from './SVG/TO.svg'
import { useState } from 'react'
import ToptoFriend from './TOP/TopToFriend'
import './ToFriend.css'
import BottomRooter from '../BottomRooter/BottomRooter.jsx'
import { Button, Flex } from 'antd';

export default function ToFriend() {
    const [size, setSize] = useState('large')
    return (

        <>
            <div className='AllToFriend'>
                <ToptoFriend />
                <BottomRooter />
                <div className='InTheFirstLine'>
                    <div>
                        <img src={img} />
                    </div>
                    <div className='InputName'>
                        <input type='text' placeholder='输入姓名' className='inputname' />
                    </div>
                </div>
                <div className='OutsideBox'>
                    <p className='TheWordWannaSay'>想说的话：</p>
                    <div className='InsideBox'>
                        <textarea className='InsideTextarea'>

                        </textarea>

                    </div>
                </div>
                <div className='InTheBottom'>
                    <Button type="primary" className='BottomButton'>
                        完成
                    </Button>
                </div>
            </div>
        </>
    )
}