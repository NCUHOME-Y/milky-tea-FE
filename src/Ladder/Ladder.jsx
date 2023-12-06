import React, { useState } from 'react';
import './Ladder.css';

export default function Ladder() {
    // 设置一个状态来追踪被选中的元素
    const [selected, setSelected] = useState(null);

    // 用来处理点击事件的函数
    const handleBoxClick = (index) => {
        setSelected(index); // 更新状态为当前点击的元素索引
    };

    return (
        <div className='Ladder'>
            {['茶料', '小料', '温度', '甜度'].map((item, index) => (
                <div
                    key={index}
                    className={`LittleBox ${selected === index ? 'active' : ''}`}
                    onClick={() => handleBoxClick(index)}
                >
                    {item}
                </div>
            ))}
        </div>
    );
}
