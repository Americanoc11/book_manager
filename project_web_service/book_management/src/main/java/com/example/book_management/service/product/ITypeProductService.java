package com.example.book_management.service.product;

import com.example.book_management.model.product.TypeProduct;

import java.util.List;

public interface ITypeProductService {
    List<TypeProduct> findAll();

    TypeProduct findById(Integer id);
}
