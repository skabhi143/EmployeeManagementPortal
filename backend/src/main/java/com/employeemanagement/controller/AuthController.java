package com.employeemanagement.controller;

import com.employeemanagement.model.User;
import com.employeemanagement.repository.UserRepository;
import com.employeemanagement.security.JwtUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    public AuthController(UserRepository userRepository, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (userRepository.findByUsername(user.getUsername()) != null) {
            return ResponseEntity.badRequest().body("Username exists");
        }
        // In production, hash the password. Here we store plain for simplicity (not recommended).
        userRepository.save(user);
        return ResponseEntity.ok("Registered");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        User found = userRepository.findByUsername(user.getUsername());
        if (found == null || !found.getPassword().equals(user.getPassword())) {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
        String token = jwtUtil.generateToken(found.getUsername());
        return ResponseEntity.ok(java.util.Map.of("token", token, "role", found.getRole()));
    }
}
