package com.example.book_management.repository;

import com.example.book_management.model.product.TypeProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITypeProductRepository extends JpaRepository<TypeProduct, Integer> {
}
