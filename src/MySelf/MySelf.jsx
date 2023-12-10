import img from './img/Profile.svg'
import './MySelf.css'
import BadTop from '../Top/Top.jsx'
import BottomBadRooter from '../BottomRooter/BottomRooter.jsx'

export default function MySelf() {
    return (

        <>
            <div className='One'>
                <BottomBadRooter />
                <BadTop />
                <div className='Every'>
                    <div className='Profile'>

                        <img src={img} />

                        <div className='information'>
                            <p className='first'>用户名称</p>
                            <p className='second'>我的账号</p>
                        </div>
                    </div>
                    <div className='Box'><p>我制作的</p></div>
                    <div className='Box'><p>我收到的</p></div>
                    <div className='Box'><p>添加好友</p></div>
                    <div className='Box'><p>隐私设置</p></div>
                </div>
            </div>

        </>
    )
}