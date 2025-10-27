import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login(){
  const [form, setForm] = useState({username:'', password:''});
  const navigate = useNavigate();

  function submit(e){
    e.preventDefault();
    axios.post('http://localhost:8080/api/auth/login', form)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('role', res.data.role);
        navigate('/');
      })
      .catch(err => alert('Login failed'));
  }

  function handle(e){ setForm({...form, [e.target.name]: e.target.value}); }

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={submit}>
        <input name="username" placeholder="Username" onChange={handle} required/>
        <input name="password" placeholder="Password" type="password" onChange={handle} required/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;
