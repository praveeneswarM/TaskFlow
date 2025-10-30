package com.example.TaskFlow.service;


import com.example.TaskFlow.model.User;
import com.example.TaskFlow.repo.User_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class User_Service {

    @Autowired
    private User_Repo rpo;

    @Autowired
    private PasswordEncoder psd;

    public String SignUp(User user){
        if(rpo.existsByEmail(user.getEmail()))
        {
            return "Already Exist";
        }
        user.setPassword(psd.encode(user.getPassword()));
        rpo.save(user);
        return "SignUp Successful";
    }

    public Map<String,Object> Login(String email,String password){
        Map<String,Object> res=new HashMap<>();
        User user = rpo.findByEmail(email).orElseThrow(()->new RuntimeException("User Not Found"));
         if(psd.matches(password, user.getPassword())){
             res.put("userId",user.getId());
             res.put("userName",user.getName());
             res.put("userEmail",user.getEmail());
             return res;
        }
        return null;
    }
}
