import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { loginWithEmail } from "../firebase";

function Login(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();

    try {
      await loginWithEmail(email,password);
      navigate("/dashboard");
    } catch (error) {
      setMessage("Wrong Password.Please try again!");
    }
  }

  return(
    <div>
      <h1>Login</h1>
      <form className="form-container" onSubmit={handleLogin}>
        <label>Email</label> 
        <input  type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></input>
        <label>Password</label>
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} autoComplete="new-password" >
        </input>
        <button className="button-submit" type="submit">Login</button>
        <p>{message}</p>
      </form>
    </div>
  );
}

export default Login;