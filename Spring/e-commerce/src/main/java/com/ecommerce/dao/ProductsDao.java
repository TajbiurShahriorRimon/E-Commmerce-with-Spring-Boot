package com.ecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.entity.Products;

public interface ProductsDao extends JpaRepository<Products, String> {

}