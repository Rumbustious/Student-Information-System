
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const administrator = () => {
    // Function logic for administrator authentication
    if (username === "control" && password==="control123") {
      navigate('/ControlAdmin');
    } else {
      alert("Your password or username is incorrect");
    }
  };

  return (
    <div className="login-container">
      <div className="container1">
        <form onSubmit={(e) => { e.preventDefault(); administrator(); }}>
          <h1><b>Login</b></h1>
          <div className="input_group">
            <input type="text" id="UN" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required /><br /><br />
            <input type="password" id="PW" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />
          </div>
          <div className="forget">
            <label><input type="checkbox" id="remember"/>Remember me</label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

