import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddEmployee() {
  const [form, setForm] = useState({name:'', department:'', email:'', salary:0});
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value});
  }

  function submit(e) {
    e.preventDefault();
    axios.post('http://localhost:8080/api/employees', form, {headers: authHeader()})
      .then(()=> navigate('/'))
      .catch(err => console.error(err));
  }

  function authHeader(){
    const token = localStorage.getItem('token');
    return token ? { Authorization: 'Bearer ' + token } : {};
  }

  return (
    <div>
      <h3>Add Employee</h3>
      <form onSubmit={submit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="department" placeholder="Department" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="salary" placeholder="Salary" type="number" onChange={handleChange} required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default AddEmployee;
