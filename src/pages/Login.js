import { useState } from "react";
import { useNavigate } from "react-router-dom";
const uname = "test123";
const pword = "Test123!";

const Login = () =>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    
    const handleLogin = (e) =>{
        e.preventDefault();
        if(username === uname && password === pword){
            // o Userid and Password is match to the mock Userid/password pop up a Confirm message - "login is authenticated"
            alert("Login is Authenticated");
        } else{
            // o Userid and/or Password does not match to then mocked Userid/password an alert message "Invalid userid/password"
            alert("Invalid username/password")
        }
    }
    return(
        <div className="flex items-center justify-center h-screen">
        <form onSubmit={handleLogin} className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
            <h1 className="text-xl">Login Page</h1>
           <label className="block mb-2 text-sm font-bold text-gray-700">Username:
                <input 
                type="text" 
                onChange={(e)=> setUsername(e.target.value)} 
                value={username} 
                required 
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" 
                placeholder="test123"/>
           </label>
           <label className="block mb-2 text-sm font-bold text-gray-700">Password:
                <input 
                type="password" 
                onChange={(e) => setPassword(e.target.value)} 
                value={password} 
                required 
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder="Test123!"
                />
           </label>
           <div className="flex-row">
            <div>
                <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">Login</button>
            </div>
            <div className="pt-2">
                <button onClick={() => navigate("/forgotpassword")} className="px-4 py-2 font-bold text-white bg-blue-400 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">Forgot Password</button>
            </div>
           </div>
        </form>
        </div>
    )
}

export default Login;