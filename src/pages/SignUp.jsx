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

    async function handleSignup(){

        if(password !== confirmPassword){
            setMessage("Passwords do not match!Please try again.");
            return;
        }else{
            try{
                await registerWithEmail(email,password);
                setMessage("Registered Successful!");
                navigate("/");          //redirecting to login page 
            }catch(error){
                setMessage(error.message);
            }
        }

    }
    return(
       <div>
            <h2>Sign Up</h2>
            <form className="form-container">
            <input type="email" placeholder="Email"  ></input>
            </form>
       </div> 
    );
    
}

export default SignUp; // Default export