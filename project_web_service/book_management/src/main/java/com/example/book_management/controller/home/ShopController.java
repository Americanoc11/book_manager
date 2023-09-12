package com.example.book_management.controller.home;

import com.example.book_management.model.product.TypeProduct;
import com.example.book_management.service.product.IProductService;
import com.example.book_management.service.product.ITypeProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/shop")
public class ShopController {
    @Autowired
    private IProductService productService;

    @Autowired
    private ITypeProductService typeProductService;

    @GetMapping("/")
    public ResponseEntity<?> getTypeProduct(){
        return new ResponseEntity<>(typeProductService.findAll(), HttpStatus.OK);
    }
    @GetMapping("/product")
    public ResponseEntity<?> getProduct(){
        return  new ResponseEntity<>(productService.findAll(),HttpStatus.OK);
    }
   @PutMapping("/{id}")
   public ResponseEntity<?> getTypeId(@PathVariable("id")Integer id){
        return new ResponseEntity<>(typeProductService.findById(id),HttpStatus.OK);
   }
    @GetMapping("/product/type/{id}")
    public  ResponseEntity<?> getProductByCategory(@PathVariable Integer id  ){
        return new ResponseEntity<>(productService.findAllByTypeProduct(id),HttpStatus.OK);
    }
    @PutMapping("/detail/{id}")
    public ResponseEntity<?> getProductById(@PathVariable("id")Integer id){
        return new ResponseEntity<>(productService.findById(id),HttpStatus.OK);
    }
}
