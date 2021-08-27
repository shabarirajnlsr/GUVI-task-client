import React, { useState } from 'react';
import { postLoginData } from '../service/user.service';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Login.css'

const initialstate={
    email:'',
    password:''
}

function Login() {
    const [userData, setUserData] = useState(initialstate);

    let history = useHistory();
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({
            ...userData,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        postLoginData(userData)
        .then((res) => {
            localStorage.setItem("auth", JSON.stringify(res.data));
            toast.success("Login successfully")
            setUserData({
                email:'',
                password:'',
            })
            history.push("/");
        })
        .catch((err) => {
            toast.error(err.response.data.message);
        })
    }

    return (
        <>
            <div className="register-header">
                <div className="register-main-path">
                    <div className="register-title">
                        <h3>LOGIN</h3>
                    </div>
                    <div className='wholecontainer'>
                    <form className='inputmain'>
                        <div className="input-forms">
                            <input type="email" value={userData.email} placeholder="Email" name="email" onChange={handleChange} />
                        </div>
                        <br/>
                        <div className="input-forms">
                            <input type="password" value={userData.password} placeholder="Password" name="password" onChange={handleChange} />
                        </div>
                        <br/>
                        <button onClick={handleSubmit} type="submit">&nbsp;&nbsp;Login&nbsp;&nbsp;</button>
                        <br/>
                        <br/>
                        <span>Didn't SignUp? <Link to="/register">Register</Link></span>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
