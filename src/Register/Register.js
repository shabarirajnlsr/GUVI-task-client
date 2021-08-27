import React, { useState } from 'react';
import { postRegisterData } from '../service/user.service';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
import "./register.css"

const initialstate={
    username:'',
    email:'',
    password:'',
    confirmpassword:'',
}

function Register() {
    const [userData, setUserData] = useState(initialstate);

    let history = useHistory ();
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
        postRegisterData(userData)
        .then((res) => {
            history.push("/login")
            toast.success("saved successfully")
            setUserData({
                username:'',
                email:'',
                password:'',
                confirmpassword:'',
            })
        })
        .catch(err => {
            toast.error(err.response.data.message);
        })
        
    }
    

    return (
        <div>
            <div className="register-header">
                <div className="register-main-path">
                    <div className="register-title">
                        <h3>REGISTER</h3>
                    </div>
                    <div className=''>
                    <form className='inputmain'>
                        <div className="input-forms">
                            <input type="text" value={userData.username} placeholder="Username" name="username" onChange={handleChange} />
                        </div>
                        <br/>
                        <div className="input-forms">
                            <input type="email" value={userData.email} placeholder="Email" name="email" onChange={handleChange} />
                        </div>
                        <br/>
                        <div className="input-forms">
                            <input type="password" value={userData.password} placeholder="Password" name="password" onChange={handleChange} />
                        </div>
                        <br/>
                        <div className="input-forms">
                            <input type="password" value={userData.confirmpassword} placeholder="Confirm Password" name="confirmpassword" onChange={handleChange} />
                        </div>
                        <br/>
                        <button onClick={handleSubmit} type="submit">SignUp</button>
                        <br/>
                        <span>Already signup? <Link to="/login">Login</Link></span>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
