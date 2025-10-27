import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeList from './components/EmployeeList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-4">
        <h1>Employee Management Portal</h1>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
