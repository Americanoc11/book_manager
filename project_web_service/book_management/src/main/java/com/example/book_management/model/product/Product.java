package com.example.book_management.model.product;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_product")
    private Integer id;
    @Column(name = "author")
    private String author;
    @Column(name = "describe_book")
    private String describe;
    @Column(name = "img")
    private String img;
    @Column(name = "name_product")
    private String name;
    @Column(name = "nation_book")
    private String nation;
    @Column(name = "price_book")
    private String price;
    @Column(name = "publication_year")
    private String publication;
    @Column(name = "publishing_company")
    private String publishing;
    @Column(name = "quantity_books")
    private String quantity;
    @ManyToOne
    @JoinColumn(name = "id_type_product")
    private TypeProduct typeProduct;
    @Column(name = "is_delete")
    private boolean isFlagDelete;

    public Product() {
    }

    public Product(Integer id, String author, String describe, String img, String name, String nation, String price, String publication, String publishing, String quantity, TypeProduct typeProduct, boolean isFlagDelete) {
        this.id = id;
        this.author = author;
        this.describe = describe;
        this.img = img;
        this.name = name;
        this.nation = nation;
        this.price = price;
        this.publication = publication;
        this.publishing = publishing;
        this.quantity = quantity;
        this.typeProduct = typeProduct;
        this.isFlagDelete = isFlagDelete;
    }

    public boolean isFlagDelete() {
        return isFlagDelete;
    }

    public void setFlagDelete(boolean flagDelete) {
        isFlagDelete = flagDelete;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getDescribe() {
        return describe;
    }

    public void setDescribe(String describe) {
        this.describe = describe;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getPublication() {
        return publication;
    }

    public void setPublication(String publication) {
        this.publication = publication;
    }

    public String getPublishing() {
        return publishing;
    }

    public void setPublishing(String publishing) {
        this.publishing = publishing;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public TypeProduct getTypeProduct() {
        return typeProduct;
    }

    public void setTypeProduct(TypeProduct typeProduct) {
        this.typeProduct = typeProduct;
    }
//    CREATE TABLE `books_shop`.`products` (
//            `id_product` INT NOT NULL AUTO_INCREMENT,
//  `author` VARCHAR(255) NOT NULL,
//  `describe_book` LONGTEXT NULL,
//  `img` LONGTEXT NOT NULL,
//            `is_delete` BIT(1) NOT NULL,
//  `name_product` VARCHAR(255) NOT NULL,
//  `nation_book` VARCHAR(255) NOT NULL,
//  `price_book` DOUBLE NOT NULL,
//            `publication_year` VARCHAR(255) NOT NULL,
//  `publishing_company` VARCHAR(255) NOT NULL,
//  `quantity_books` INT NOT NULL,
//            `id_type_product` INT NULL,
//    PRIMARY KEY (`id_product`),
//    FOREIGN KEY (`id_type_product`)REFERENCES `books_shop`.`type_product` (`id_type_product`));

}
