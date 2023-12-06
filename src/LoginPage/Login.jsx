import React, { useState, useRef } from 'react';
// import './Login.css'
import { create } from 'zustand'
import { useNavigate } from 'react-router-dom'



export default function Login() {
    const [username, SetName] = useState("")
    const [password, SetPassword] = useState('')
    const checkboxRef = useRef(null)
    const navigate = useNavigate()

    const Navigation = () => {
        navigate('/Register')
    }


    const useUserStore = create((set) => ({
        user: null,
        setUser: (user) => set({ user }),
        clearUser: () => set({ user: null }),
    }))



    const PostUserInformation = async () => {
        if (!username || !password) {
            alert("还有信息没有填入")
            return
        }

        if (!checkboxRef.current.checked) {
            alert("您还没有勾选协议，请先勾选再登录")
            return
        }

        try {
            const response = await fetch('http://127.0.0.1:8080/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username,
                    password,
                })
            })

            const data = await response.json()

            if (response.ok) {
                useUserStore.setUser(data)
                localStorage.setItem('token', data.token)
                alert("登录成功")
                // navigate('/DrinkTea')

            } else {
                alert(`登录失败：${data.msg}`)
            }
        } catch (error) {
            alert(`请求出现错误：${error}`)
        }


    }


    return (
        <>
            <div className="Allof">
                {/* <img />等设计写好了登录页面再把src传上去 */}
                <div className="Login-Box">
                    <div className='UserInformation'>
                        <p className='word'>请输入您的姓名</p>
                        <input type="text" value={username} placeholder='姓名' onChange={(e) => { SetName(e.target.value) }} className='TEXT' />
                    </div>
                    <div className='UserInformation'>
                        <p className='word'>请输入您的密码</p>
                        <input type="password" value={password} placeholder='密码' onChange={(e) => { SetPassword(e.target.value) }} className='TEXT' />
                    </div>
                    <div className='LoginBtnBox'>
                        <button className='LoginBtn' onClick={PostUserInformation}>登录</button>
                    </div>
                    <div className='TheWayToRegister'>
                        <p>忘记密码</p>
                        <p onClick={Navigation}>快速注册</p>
                    </div>
                </div>
                <div className='underFoot'>
                    <input type='checkbox' ref={checkboxRef} />
                    <span>登录/注册表示同意《今天吃饱了?团队出品协议》</span>
                </div>

            </div>
        </>
    )
}