package com.example.book_management.controller.product;

import com.example.book_management.service.product.IProductService;
import com.example.book_management.service.product.ITypeProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private IProductService productService;
    @Autowired
    private ITypeProductService typeProductService;

    @GetMapping("")
    public ResponseEntity<?> getAllProduct(){
        return new ResponseEntity<>(productService.findAll(), HttpStatus.OK);
    }
}
