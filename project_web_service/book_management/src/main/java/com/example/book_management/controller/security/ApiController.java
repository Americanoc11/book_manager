package com.example.book_management.controller.security;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin
public class ApiController {
    @GetMapping("")
    public ResponseEntity<Object> getHome(){
        HttpHeaders headers= new HttpHeaders();
        headers.add("Location","/public/home/");
        return new ResponseEntity<>(headers, HttpStatus.FOUND);
    }
}
