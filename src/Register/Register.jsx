import { useState, useRef } from 'react'


export default function Register() {
    const [username, SetName] = useState("")
    const [password, SetPassword] = useState("")
    const [re_password, SetReName] = useState("")
    const checkboxRef = useRef(null)


    const RegisterInformation = async () => {


        if (!username || !password || !re_password) {
            alert("还有信息没有填哦")
            return
        }

        if (!checkboxRef.current.checked) {
            alert("您还没有勾选协议，请先勾选再注册")
        }

        try {
            const response = await fetch('http://127.0.0.1:8080/signup', {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    password,
                    re_password,
                }),
                headers: { 'Content-Type': 'application/json' }
            })


            const data = response.json()
            if (response.ok) {

                localStorage.setItem('token', data.token)
                alert('注册成功')
            } else {
                alert(`注册失败：${data.msg}`)
            }
        } catch (error) {
            alert(`请求注册出现错误：${error}`)
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
                        <p className='word'>请设置您的密码</p>
                        <input type="password" value={password} placeholder='密码' onChange={(e) => { SetPassword(e.target.value) }} className='TEXT' />
                    </div>
                    <div className='UserInformation'>
                        <p className='word'>请确认您的密码</p>
                        <input type="password" value={re_password} placeholder='密码' onChange={(e) => { SetReName(e.target.value) }} className='TEXT' />
                    </div>
                    <div className='LoginBtnBox'>
                        <button className='LoginBtn' onClick={RegisterInformation}>注册</button>
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