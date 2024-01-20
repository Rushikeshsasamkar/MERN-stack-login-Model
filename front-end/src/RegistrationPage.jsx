import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const RegistrationPage = () => {
    const [registration, setRegistration] = useState({
        username: '',
        password: ''
    });
    const handleRegistration = (e) => {
        const { name, value } = e.target;
        setRegistration((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }
    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/register', registration);
            console.log(response.data);

        }
        catch (err) {
            console.error(err);
        }

        setRegistration({
            username: '',
            password: ''
        })
    }
    return (
        <div>
            <h1>Registration form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='username'
                    placeholder='username'
                    value={registration.username}
                    onChange={handleRegistration}
                    required
                />
                <input type="password" name='password'
                    placeholder='password'
                    value={registration.password}
                    onChange={handleRegistration}
                    required
                />
                <button type='submit'>Submit</button>
                <p>Already registered?
                    <Link to='/login'>
                        Login here
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default RegistrationPage