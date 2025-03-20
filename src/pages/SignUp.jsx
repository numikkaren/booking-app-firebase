import { useState } from "react";   
import { registerWithEmail } from "../firebase";
import { useNavigate } from "react-router-dom";

function SignUp(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    // for navigation after sign up 
    const navigate = useNavigate();

    async function handleSignup(event){

        event.preventDefault();

        if(password !== confirmPassword){
            setMessage("Passwords do not match!Please try again.");
            return;
        }else{
            try{
                await registerWithEmail(email,password);
                setMessage("Registered Successful!");
                navigate("/login");                             //redirecting to login page 
            }catch(error){
                setMessage(error.message);
            }
        }

    }
    return(
       <div className="signup-container">
            <h1>Sign Up</h1>
            <form className="form-container" onSubmit={handleSignup}>
                <label>Email</label>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} ></input>
                <label>Password</label>
                <input type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={ e => setPassword(e.target.value)}
                    autoComplete="new-password" >
                </input>
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={ e => setConfirmPassword(e.target.value)}></input>
                <button className="button-submit" type="submit">Sign Up</button>
                <p>{message}</p>
            </form>
       </div> 
    );
    
}

export default SignUp; // Default export