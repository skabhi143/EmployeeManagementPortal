import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditEmployee() {
  const [form, setForm] = useState({name:'', department:'', email:'', salary:0});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(()=> {
    axios.get('http://localhost:8080/api/employees')
      .then(res => {
        const e = res.data.find(x => x.id === parseInt(id));
        if (e) setForm(e);
      });
  }, [id]);

  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value});
  }

  function submit(e) {
    e.preventDefault();
    axios.put('http://localhost:8080/api/employees/' + id, form, {headers: authHeader()})
      .then(()=> navigate('/'))
      .catch(err => console.error(err));
  }

  function authHeader(){
    const token = localStorage.getItem('token');
    return token ? { Authorization: 'Bearer ' + token } : {};
  }

  return (
    <div>
      <h3>Edit Employee</h3>
      <form onSubmit={submit}>
        <input name="name" value={form.name} onChange={handleChange} required />
        <input name="department" value={form.department} onChange={handleChange} required />
        <input name="email" value={form.email} onChange={handleChange} required />
        <input name="salary" value={form.salary} onChange={handleChange} required />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
export default EditEmployee;
