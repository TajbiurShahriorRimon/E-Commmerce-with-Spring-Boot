package com.ecommerce.service;

import java.util.ArrayList;

import com.ecommerce.entity.Products;

public interface ProductsService {
	
	public Products getProduct(String productId);

	public Products addProducts(Products product);

	public Products getProductById(String id);
}
