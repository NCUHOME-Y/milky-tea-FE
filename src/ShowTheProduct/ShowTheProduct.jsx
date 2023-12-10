import img from './image/Product.svg'
import TOP from './TOP/TOP.jsx'
import BottomRooter from '../BottomRooter/BottomRooter.jsx'
import './ShowTheProduct.css'
import Plus from './SVG/Plus.svg'
import Delete from './SVG/Delete.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function ShowTheProduct() {
    const [count, setCount] = useState(0)
    const navigater = useNavigate()
    const ToYourFriend=() => {
        if(count <= 0){
            alert("数量不能小于1哦")
            return
        }
        navigater('/ToFriend')
    }
    const ToDrink = () => {
        if(count <= 0){
            alert("数量不能小于1哦")
            return
        }
        navigater("/GetTheMilkTea")
    }
    const DeleteNumber = () => {
        if (count <= 0) {
            return
        }
        setCount(count - 1)
    }

    const PlusNumber = () => {
        setCount(count + 1)
    }
    return (
        <>
            <div className='AllElement'>
                <TOP />
                <BottomRooter />
                <div className='img'>
                    <img src={img} />
                </div>
                <div className='Under'>
                    <div className='Input'>
                        <input type='text' className='textword' placeholder='取个名字吧' />
                    </div>
                    <div className='TextArea'>
                        <label className='label'>备注：</label>
                        <textarea className='textarea'></textarea>
                    </div>
                    <div className='LastLine'>
                        <div className='Counter'>
                            <img src={Delete} onClick={DeleteNumber} />
                            <span>{count}</span>
                            <img src={Plus} onClick={PlusNumber} />
                        </div>
                        <div className='HowToDrink'>
                            <button className='btn'onClick={ToDrink}>自己喝</button>
                            <button className='btn' onClick={ToYourFriend}>送朋友</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}