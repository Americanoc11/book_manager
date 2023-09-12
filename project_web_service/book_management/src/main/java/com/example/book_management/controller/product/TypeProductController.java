package com.example.book_management.controller.product;

import com.example.book_management.service.product.ITypeProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/typeProducts")
public class TypeProductController {
    @Autowired
    private ITypeProductService typeProductService;

    @GetMapping("")
    public ResponseEntity<?> getAllType() {
        return new ResponseEntity<>(typeProductService.findAll(), HttpStatus.OK);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> getTypeById(@PathVariable("id")Integer id){
        return new ResponseEntity<>(typeProductService.findById(id),HttpStatus.OK);
    }
}
