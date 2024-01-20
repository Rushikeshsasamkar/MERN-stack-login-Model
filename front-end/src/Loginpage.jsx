import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'


const Loginpage = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/login', loginData);
            const { success, message } = response.data;
            if (success) {
                console.log("Login sucessfully");
            }
            else {
                console.log(message);
            }
        }
        catch (err) {
            console.log(err);
        }

        setLoginData({
            username: '',
            password: ''
        });
    }

    const handleLoginChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setLoginData(prevData => ({
            ...prevData,
            [name]: value
        }))


    }
    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>

                <input type="text"
                    name='username'
                    placeholder='Username'
                    value={loginData.username}
                    required
                    onChange={handleLoginChange}
                />
                <br />
                <input type="password"
                    name='password'
                    placeholder='Password'
                    required
                    onChange={handleLoginChange}
                    value={loginData.password}
                />
                <br />
                <br />
                <button type="submit">Submit</button>
                <p><Link to='/registration'>Not registered?</Link></p>
            </form>
        </div>
    )
}

export default Loginpage