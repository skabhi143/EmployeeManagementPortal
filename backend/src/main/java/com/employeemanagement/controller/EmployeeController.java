package com.employeemanagement.controller;

import com.employeemanagement.model.Employee;
import com.employeemanagement.repository.EmployeeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    private final EmployeeRepository repository;

    public EmployeeController(EmployeeRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) {
        return repository.save(employee);
    }

    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        employee.setId(id);
        return repository.save(employee);
    }

    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
