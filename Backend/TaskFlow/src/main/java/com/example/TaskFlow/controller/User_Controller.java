package com.example.TaskFlow.controller;

import com.example.TaskFlow.model.User;
import com.example.TaskFlow.service.User_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class User_Controller {

    @Autowired
    private User_Service srvs;

    @PostMapping("/login")
    public ResponseEntity<Map<String,Object>> Login(@RequestBody Map<String, String> body)
    {
        Map<String,Object> success= new HashMap<>();
        success = srvs.Login(body.get("email"),body.get("password"));
        return success != null?ResponseEntity.ok(success) : ResponseEntity.notFound().build();
    }

    @PostMapping("/signup")
    public ResponseEntity<String> Signup(@RequestBody User user)
    {
        return ResponseEntity.ok(srvs.SignUp(user));
    }
}
