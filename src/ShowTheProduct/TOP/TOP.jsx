import './TOP.css'
import { useNavigate } from 'react-router-dom'


export default function Top() {
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <>
            <div className="top">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none" className='Arrow' onClick={handleGoBack}>
                    <path opacity="0.9" d="M7.34149 13.1958C7.83641 13.6014 8.63884 13.6014 9.13376 13.1958C9.62868 12.7903 9.62868 12.1328 9.13376 11.7272L4.20371 7.6875L22.8119 7.6875C23.4681 7.6875 24 7.26777 24 6.75C24 6.23223 23.4681 5.8125 22.8119 5.8125L4.20371 5.8125L9.13376 1.77276C9.62868 1.36722 9.62868 0.709702 9.13376 0.304159C8.63884 -0.101386 7.83641 -0.101386 7.34149 0.304159L0.371193 6.0157C-0.123731 6.42124 -0.123731 7.07876 0.371193 7.4843L7.34149 13.1958Z" fill="#FFF7ED" />
                </svg>
                <h1>制作完成啦</h1>

            </div>
        </>
    )



}