import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import './InitPage.css'

export default function InitPage() {
    const navigation = useNavigate()
    const changePage = () => {
        navigation('/Login')
    }

    useEffect(() => {
        const interval = setInterval(changePage, 3000)
        return () => clearInterval(interval)
    }, [])


    return (
        <>
            <div className="all">
              
            </div>

        </>
    )
}