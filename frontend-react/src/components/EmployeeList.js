import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchList();
  }, []);

  function fetchList(){
    axios.get('http://localhost:8080/api/employees')
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }

  function deleteEmp(id){
    const token = localStorage.getItem('token');
    axios.delete('http://localhost:8080/api/employees/' + id, {headers: token ? { Authorization: 'Bearer ' + token } : {}})
      .then(()=> fetchList())
      .catch(err => console.error(err));
  }

  return (
    <div>
      <h3>Employee List</h3>
      <Link to="/add">Add Employee</Link>
      <table className="table table-striped">
        <thead><tr><th>ID</th><th>Name</th><th>Dept</th><th>Email</th><th>Salary</th><th>Actions</th></tr></thead>
        <tbody>
          {employees.map(e => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.department}</td>
              <td>{e.email}</td>
              <td>{e.salary}</td>
              <td>
                <Link to={'/edit/' + e.id}>Edit</Link> | 
                <button onClick={()=>deleteEmp(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
