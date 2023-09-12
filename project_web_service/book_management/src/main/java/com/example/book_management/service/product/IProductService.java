package com.example.book_management.service.product;

import com.example.book_management.model.product.Product;

import java.util.List;

public interface IProductService {
    List<Product> findAll();
    Product create(Product product);
    Product findById(Integer id);
    void delete(Integer id);
    void update(Product product);
    boolean exitsById(Integer id);

    List<Product> findAllByTypeProduct(Integer id);
}
