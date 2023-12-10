import Top from '../Top/Top.jsx'
import BottomRooter from '../BottomRooter/BottomRooter.jsx'
import './MyFriend.css'
import img from './IMG/Profile.svg'
import Circle from './IMG/Circle.svg'



export default function MyFriend() {
    return (
        <>
            <div className='OneOf'>
                <Top />
                <BottomRooter />
                <div className='UpperLine'>
                    <div className='Profile'>
                        <img src={img} />
                        <div className='information'>
                            <p className='first'>用户名称</p>
                            <p className='second'>我的账号</p>
                        </div>
                    </div>
                </div>
                <div className='UnderLine'>
                    <div className='SecondLine'>
                        <div className='Profile'>
                            <img src={Circle} />
                        </div>
                        <div className='information'>
                            <p className='FirstName'>第一个用户名</p>
                            <p className='SecondWord'>送给你一杯奶茶，去看看吧</p>
                        </div>
                    </div>
                    <div className='ThirdLine'>
                        <div className='Profile'>
                            <img src={Circle} className='Round' />
                        </div>

                    </div>
                    <div className='FourthLine'>
                        <div className='Profile'>
                            <img src={Circle} className='Round' />
                        </div>

                    </div>
                    <div className='FifthLine'>
                        <div className='Profile'>
                            <img src={Circle} className='Round' />
                        </div>

                    </div>
                    <div className='SixthLine'>
                        <div className='Profile'>
                            <img src={Circle} className='Round' />
                        </div>

                    </div>
                    <div className='SeventhLine'>
                        <div className='Profile'>
                            <img src={Circle} className='Round' />
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}