import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.scss';

const Login = () => {

    const [authUserName, setAuthUserName] = useState('')
    const [authUserPass, setAuthUserPass] = useState('')
    
    // Base Url
    const baseUrl = process.env.REACT_APP_BASE_URL;

    // authenticate && redirect
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/sfdc-registration" } }

    const HandleUserName = e => {
        setAuthUserName(e.target.value)
    }
    const HandleUserPass = e => {
        setAuthUserPass(e.target.value)
    }

    const HandleSubmit = e => {
        e.preventDefault()

        let headers = new Headers()
        let formData = new FormData()

        formData.append("username", authUserName)
        formData.append("password", authUserPass)

        let requestOptions = {
            method: "POST",
            body: formData,
            redirect: "follow",
            headers: headers,
        };

        fetch(`${baseUrl}/login`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    localStorage.setItem('name', JSON.stringify(data.data.name))
                    localStorage.setItem('token', JSON.stringify(data.data.token))
                    setAuthUserName('')
                    setAuthUserPass('')
                    history.replace(from)
                }
                if (data.success === false) {
                    alert('Something went wrong')
                    setAuthUserName('')
                    setAuthUserPass('')
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <section className='login-section'>
            <form onSubmit={HandleSubmit}>
                <div>
                    <div className='text-center'>
                        <h2>SFDC Login</h2>
                    </div>
                    <div className='mt-4'>
                        <input type='text' placeholder='username..' onChange={HandleUserName} required/>
                    </div>
                    <div className='mt-4'>
                        <input type='password' placeholder='password..' onChange={HandleUserPass} required/>
                    </div>
                    <div className='mt-4 text-center'>
                        <button type='submit'>submit</button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Login;