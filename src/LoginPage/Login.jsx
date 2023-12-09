import React, { useState, useRef } from 'react';
import './Login.css'
import { create } from 'zustand'
import { useNavigate } from 'react-router-dom'
import { Checkbox } from 'antd'

const SetUserState = create(set => ({
    ifLogined: false,
    setLogin: (state) => set({ ifLogined: state }),
}))

export default function Login() {
    const [username, SetName] = useState("")
    const [password, SetPassword] = useState('')
    const [ifClicked,setIfClicked] = useState('')
    const checkboxRef = useRef(null)
    const navigate = useNavigate()
    const setLogin = SetUserState(state => state.setLogin)
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }

    const ToRegister = () => {
        navigate('/Register')
    }

    const ToYourChoice = () => {
        navigate('/YourChoice')
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

            const response = await axios.post('http://127.0.0.1:8080/login', {
                username: username,
                password: password,
            })

            const data = response.data


            if (response.status === 200) {
                alert("登录成功")
                setLogin(true)
                localStorage.setItem('token', data.token)
                alert(`用户的登录状态为${SetUserState.getState().ifLogined}`)
                navigate('/YourChoice')

            } else {
                setLogin(false)
                alert(`用户的登录状态为${SetUserState.getState().ifLogined}`)
                alert(`登录失败：${data.msg}`)
            }
        } catch (error) {
            alert(`请求出现错误：${error}`)
        }

    }

    const CustomerLogin = () => {
        if(!checkboxRef.current.checked){
            alert("您还没有勾选协议，请先勾选再登录")
            return
        }

        ToYourChoice()
    }

    const FastWayToRegister =() => {
        if(!checkboxRef.current.checked){
            alert("您还没有勾选协议，请先勾选再登录")
            return
        }

        ToRegister()
    }



    return (
        <>
            <div className="Allof">

                <div className="Login-Box">

                    <div className='UserInformation'>
                        <input type="text" value={username} placeholder='姓名' onChange={(e) => { SetName(e.target.value) }} className='TEXT' />
                    </div>
                    <div className='UserInformation'>
                        <input type="password" value={password} placeholder='密码' onChange={(e) => { SetPassword(e.target.value) }} className='TEXT' />
                    </div>
                    <div className='LoginBtnBox'>
                        <button className='LoginBtn' onClick={PostUserInformation}>登录</button>
                    </div>
                </div>
                <div className='TheWayToRegister'>
                    <p onClick={CustomerLogin}>游客登录</p>
                    <p onClick={FastWayToRegister}>快速注册</p>
                </div>
                <div className='underFoot'>
                    <input type='checkbox' onChange={onChange} ref={checkboxRef} />
                    <span className='word'>登录/注册表示同意《今天吃饱了?团队出品协议》</span>
                </div>

            </div>
        </>
    )
}