import { useState } from "react";
import validator from "validator";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () =>{
    const [newPassword, setNewPassword] = useState("");
    const navigate = useNavigate();


    const handleChange = (e) =>{
        e.preventDefault();
        if(validator.isStrongPassword(newPassword,{
            minLength: 8, minLowercase: 1, minUppercase: 1,
            minNumbers: 1, minSymbols: 1,
        })){
            navigate('/success');
        } else{
            alert("Password must be a minimum of 8 characters and contain lowercase/uppercase/number/ and symbol")
        }
    }

    return(
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleChange} className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
                <h1>Forgot Password</h1>
                <label className="block mb-2 text-sm font-bold text-gray-700">
                    Email:
                    <input type="email" required className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
                </label>
                <label className="block mb-2 text-sm font-bold text-gray-700">
                    New Password:
                    <input type="password" required onChange={(e) => {setNewPassword(e.target.value)}} value={newPassword} className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
                </label>
                <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">Change</button>
            </form>
        </div>
    )
}

export default ForgotPassword;