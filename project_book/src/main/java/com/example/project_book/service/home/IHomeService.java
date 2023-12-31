package com.example.project_book.service.home;

import com.example.project_book.model.Product;
import com.example.project_book.projections.ProductProjection;
import org.springframework.security.core.parameters.P;

import java.util.List;

public interface IHomeService {
    List<Product> getlistBook ();

    Product getBookById(int id);

    List<Product> getBooksByType(int idType);

    void update (Product product);

    ProductProjection getProductBestSellByName();

    Product findBynameProductIs(String name);

    List<Product> searchProduct(String name);
}
