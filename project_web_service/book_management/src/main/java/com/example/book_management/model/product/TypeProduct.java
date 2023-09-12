package com.example.book_management.model.product;

import javax.persistence.*;

@Entity
@Table(name = "type_product")
public class TypeProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_type_product")
    private Integer id;
    @Column(name = "name_type_product")
    private String name;

    public TypeProduct() {
    }

    public TypeProduct(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
