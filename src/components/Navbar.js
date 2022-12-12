import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    const [show, setShow] = useState(false)

    const navigate = useNavigate()

    const transitionNav = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNav)
        return () => {
            window.removeEventListener("scroll", transitionNav)
        }
    }, [])

    return (
        <div className={`nav ${show && "nav show"}`}>
            <div className="nav__container">
                <img className='nav__logo'
                     onClick={() => navigate("/")}
                     src="https://upload.wikimedia.org/wikipedia/commons/archive/6/69/20220504140801%21Netflix_logo.svg"
                     alt="netflix logo"/>
                <img className="nav__avatar"
                     onClick={() => navigate("/profile")}
                     src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                     alt="avatar"/>
            </div>
        </div>
    )
}

export default Navbar
