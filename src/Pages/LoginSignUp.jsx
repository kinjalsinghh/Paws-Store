import './CSS/LoginSignup.css'
function LoginSignUp(){
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
        <input type="text" placeholder="Enter Name"/>
            <input type="text" placeholder="Enter e-mail"/>
            <input type="text" placeholder="Enter password"/>    
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have an account?<span>Login here</span></p>
           <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p>Accept all terms & policies.</p>
           </div>
            </div>
        </div>
    )
}
export default LoginSignUp