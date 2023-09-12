package com.example.book_management.controller.user;

import com.example.book_management.service.user.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/roles")
public class RoleController {
    @Autowired
    private IRoleService roleService;
    @GetMapping("")
    public ResponseEntity<?> getAllRole(){
        return new ResponseEntity<>(roleService.findAll(), HttpStatus.OK);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> getRoleById(@PathVariable("id")Integer id){
        return new ResponseEntity<>(roleService.findById(id),HttpStatus.OK);
    }
}
