import {Link} from "react-router-dom";
import {useRef} from "react";
import {auth} from "../../firebase";

const Signup = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message)
        })
    }

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message)
        })
    }

    return (
        <div className='signup'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" name='email' placeholder="Email or phone number"/>
                <input ref={passwordRef} type="password" name="password" placeholder="Password" autoComplete="on"/>
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className='signup_gray'>New to Netflix? </span>
                    <span className="signup_link" onClick={register}> Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}
export default Signup
