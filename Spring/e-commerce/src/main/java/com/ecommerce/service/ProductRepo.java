package com.ecommerce.service;

import java.util.ArrayList;

import com.ecommerce.entity.Products;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import antlr.collections.List;

public interface ProductRepo extends CrudRepository<Products, String> {
    @Query("Select p from Products p where p.status = '1'")
	public ArrayList<Products> getAllProducts();
}
