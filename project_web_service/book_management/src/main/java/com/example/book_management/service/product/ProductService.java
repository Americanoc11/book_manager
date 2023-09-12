package com.example.book_management.service.product;

import com.example.book_management.model.product.Product;
import com.example.book_management.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;

    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Product create(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product findById(Integer id) {
        return productRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid Id: " + id));
    }

    @Override
    public void delete(Integer id) {
        if (this.exitsById(id)) {
            Product product = this.findById(id);
            productRepository.delete(product);
        } else {
            throw new IllegalArgumentException("Invalid Product");
        }
    }

    @Override
    public void update(Product product) {
        if (this.exitsById(product.getId())) {
        productRepository.save(product);
        }else {
            throw new IllegalArgumentException("Invalid Product");
        }
    }

    @Override
    public boolean exitsById(Integer id) {
        return productRepository.existsById(id);
    }

    @Override
    public List<Product> findAllByTypeProduct(Integer id) {
        return productRepository.findProductsByTypeProduct_Id(id);
    }
}
