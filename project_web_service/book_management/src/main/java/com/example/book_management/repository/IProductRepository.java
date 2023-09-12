package com.example.book_management.repository;

import com.example.book_management.model.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findProductsByTypeProduct_Id(Integer id);
}
