package com.employeemanagement.controller;

import com.employeemanagement.repository.EmployeeRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    private final EmployeeRepository repository;
    public HomeController(EmployeeRepository repository) {
        this.repository = repository;
    }
    @GetMapping("/employees")
    public String employees(Model model) {
        model.addAttribute("employees", repository.findAll());
        return "employees";
    }
}
