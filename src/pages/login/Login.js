import {useState} from "react";
import Signup from "../signup/Signup";

const Login = () => {
    const [sigIn, setSignIn] = useState(false)
    return (
        <div className='login'>
            <div className="login_background">
                <img className='login_logo'
                     src='https://upload.wikimedia.org/wikipedia/commons/archive/6/69/20220504140801%21Netflix_logo.svg'
                     alt=""/>
                <button onClick={() => setSignIn(true)} className="login_btn">
                    Sign In
                </button>
                <div className="login_gradient"></div>
            </div>
            <div className="login_body">
                {sigIn ? (<Signup/>) : (
                    <>
                        <h1>Unlimited films , TV programs and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className="login_input">
                            <form action="">
                                <input type="email" placeholder="Email Address"/>
                                <button onClick={() => setSignIn(true)} className='getStarted_btn'>
                                    GET STARTED
                                </button>
                            </form>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

export default Login