import React, { useState, useRef } from 'react';
import './Login.css'
import { create } from 'zustand'
import { useNavigate } from 'react-router-dom'

const SetUserState = create(set => ({
    ifLogined: false,
    setLogin: (state) => set({ ifLogined: state }),
}))

export default function Login() {
    const [username, SetName] = useState("")
    const [password, SetPassword] = useState('')
    const checkboxRef = useRef(null)
    const navigate = useNavigate()
    const setLogin = SetUserState(state => state.setLogin)

    const Navigation = () => {
        navigate('/Register')
    }

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
            const token = localStorage.getItem('token')

            const response = await axios.post('http://127.0.0.1:8080/signup', {
                username: username,
                password: password,
            }, {
                headers: {
                    "Authorization": token,
                }
            })

            const data = response.data

            localStorage.setItem('token', data.token)

            if (response.status === 200) {
                alert("登录成功")
                setLogin(true)
                alert(`用户的登录状态为${SetUserState.getState().ifLogined}`)
                // navigate('/DrinkTea')

            } else {
                setLogin(false)
                alert(`用户的登录状态为${SetUserState.getState().ifLogined}`)
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