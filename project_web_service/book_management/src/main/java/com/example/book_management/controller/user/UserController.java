package com.example.book_management.controller.user;

import com.example.book_management.dto.LoginDTO;
import com.example.book_management.model.user.User;
import com.example.book_management.response.LoginResponse;
import com.example.book_management.service.user.IRoleService;
import com.example.book_management.service.user.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {
    @Autowired
    private IUserService userService;
    @Autowired
    private IRoleService roleService;

    @GetMapping("")
    public ResponseEntity<?> getAllUser(){
        return new ResponseEntity<>(userService.findAll(), HttpStatus.OK);
    }
    @PostMapping(  "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO){
        LoginResponse loginMesage= userService.loginUser(loginDTO);
        System.out.println(loginMesage.toString());
        return ResponseEntity.ok(loginMesage);
    }
    @PostMapping("/save")
    public ResponseEntity<?> addUser(@RequestBody User user){
        userService.create(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
