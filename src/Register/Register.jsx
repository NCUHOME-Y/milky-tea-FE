import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'



export default function Register() {
    const [username, SetName] = useState("")
    const [password, SetPassword] = useState("")
    const [re_password, SetReName] = useState("")
    const navigate = useNavigate()
    const checkboxRef = useRef(null)
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }


    const RegisterInformation = async () => {

        const onChange = (e) => {
            console.log(`checked = ${e.target.checked}`);
        }

        if (!username || !password || !re_password) {
            alert("还有信息没有填哦")
            return
        }

        if (!checkboxRef.current.checked) {
            alert("您还没有勾选协议，请先勾选再注册")
        }


        try {
            const response = await axios.post('http://127.0.0.1:8080/signup', {
                username: username,
                password: password,
                re_password: re_password,
            })

            const data = response.data

            localStorage.setItem('token', data.token)

            if (response.status === 200) {
                alert("注册成功")

                navigate('/Login')

            } else {
                alert(`注册失败：${data.msg}`)
            }
        }

        catch (error) {
            alert(`请求注册出现错误：${error}`)
        }

    }



    return (

        <>
            <div className="Allof">
                <div className="Login-Box">
                    <div className='UserInformation'>
                        <input type="text" value={username} placeholder='请输入用户名' onChange={(e) => { SetName(e.target.value) }} className='TEXT' />
                    </div>
                    <div className='UserInformation'>
                        <input type="password" value={password} placeholder='请设置密码' onChange={(e) => { SetPassword(e.target.value) }} className='TEXT' />
                    </div>
                    <div className='UserInformation'>
                        <input type="password" value={re_password} placeholder='请确认密码' onChange={(e) => { SetReName(e.target.value) }} className='TEXT' />
                    </div>
                    <div className='LoginBtnBox'>
                        <button className='LoginBtn' onClick={RegisterInformation}>注册</button>
                    </div>
                </div>
                <p className='BackToLogin'>回到<Link to='/Login'>登录页面</Link></p>
                <div className='underFoot'>
                    <input type='checkbox' onChange={onChange} ref={checkboxRef} />
                    <span>登录/注册表示同意《今天吃饱了?团队出品协议》</span>
                </div>

            </div>
        </>
    )


}