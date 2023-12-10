import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Top from '../Top/Top'
import BottomRooter from '../BottomRooter/BottomRooter'
import './YourChoice.css'
import { Modal, Button } from 'antd';
import img from '../image/美味奶茶.svg'
import stinkyImg from '../image/恶心奶茶.svg'


export default function YourChoice() {
    const changePage = useNavigate()
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [Otherloading, setOtherLoading] = useState(false);
    const [Otheropen, setOtherOpen] = useState(false);

    const showOtherModal = () => {
        setOtherOpen(true);
    };

    const handleOtherOk = () => {
        setOtherLoading(true);
        setTimeout(() => {
            setOtherLoading(false);
            changePage('/MakingGood')
        }, 3000);
    };


    const handleOtherCancel = () => {
        setOtherOpen(false);
    };

    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            changePage('/MakingBad')
        }, 3000);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <>

            <Modal
                open={open}
                title="关于？？奶茶"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        等等，我还没准备好
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                        我准备好辣！！！
                    </Button>,
                ]}
            >
                <p>你是否想过奶茶的小料不一定要是珍珠或布丁？</p>
                <p>你是否想过奶茶的茶底不一定要是我们常见的饮品？</p>
                <p>如何想的话，那出发吧！！！</p>
            </Modal>

            <Modal
                open={Otheropen}
                title="关于美味奶茶"
                onOk={handleOtherOk}
                onCancel={handleOtherCancel}
                footer={[
                    <Button key="back" onClick={handleOtherCancel}>
                        等等，我还没准备好
                    </Button>,
                    <Button key="submit" type="primary" loading={Otherloading} onClick={handleOtherOk}>
                        我准备好辣！！！
                    </Button>,
                ]}
            >
                <p>你可以去做心中自定义的美味奶茶</p>
                <p>所以...</p>
                <p>出发去做美味奶茶吧！！！</p>

            </Modal>




            <BottomRooter />
            <Top />
            <div className='Allof'>
                <div className='Main'>
                    <div className='Content' id='Content1' >
                        <img src={img} onClick={() => { changePage('/MakingGood') }} />
                        <Button type="primary" onClick={showOtherModal} >
                            美味奶茶
                        </Button>
                    </div>
                    <h1 className='Content' >or</h1>
                    <div className='Content' id='Content1'>
                        <img src={stinkyImg} onClick={() => { changePage('/MakingBad') }} />
                        <Button type="primary" onClick={showModal}>
                            ? ? 奶茶
                        </Button>
                    </div>
                </div>
            </div>

        </>
    )
}