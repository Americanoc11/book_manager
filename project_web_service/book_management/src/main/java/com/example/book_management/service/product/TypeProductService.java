package com.example.book_management.service.product;

import com.example.book_management.model.product.TypeProduct;
import com.example.book_management.repository.ITypeProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeProductService implements ITypeProductService {
    @Autowired
    private ITypeProductRepository typeProductRepository;

    @Override
    public List<TypeProduct> findAll() {
        return typeProductRepository.findAll();
    }

    @Override
    public TypeProduct findById(Integer id) {
        return this.typeProductRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid id" + id));
    }
}
