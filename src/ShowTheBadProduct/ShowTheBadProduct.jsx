import img from './image/BadProduct.svg'
import BadTOP from './BadTop/BadTop.jsx'
import BottomBadRooter from '../BottomBadRooter/BottomBadRooter.jsx'
import './ShowTheBadProduct.css'
import Plus from './SVG/BadPlus.svg'
import Delete from './SVG/BadDelete.svg'
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
        navigater('/badToFriend')
    }
    const DeleteNumber = () => {
        if (count <= 0) {
            return
        }
        setCount(count - 1)
    }

    const ToDie = () => {
        if(count <= 0){
            alert("数量不能小于1哦")
            return
        }
        navigater('/GetStinkyTea')
    }

    const PlusNumber = () => {
        setCount(count + 1)
    }
    return (
        <>
            <div className='badAllElement'>
                <BadTOP />
                <BottomBadRooter />
                <div className='img'>
                    <img src={img} />
                </div>
                <div className='Under'>
                    <div className='badInput'>
                        <input type='text' className='badtextword' placeholder='取个名字吧' />
                    </div>
                    <div className='badTextArea'>
                        <label className='badlabel'>备注：</label>
                        <textarea className='badtextarea'></textarea>
                    </div>
                    <div className='LastLine'>
                        <div className='Counter'>
                            <img src={Delete} onClick={DeleteNumber} />
                            <span>{count}</span>
                            <img src={Plus} onClick={PlusNumber} />
                        </div>
                        <div className='HowToDrink'>
                            <button className='badbtn' onClick={ToDie}>自己喝</button>
                            <button className='badbtn' onClick={ToYourFriend}>送朋友</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}