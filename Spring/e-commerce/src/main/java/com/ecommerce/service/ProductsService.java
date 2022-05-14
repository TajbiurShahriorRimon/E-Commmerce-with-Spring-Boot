package com.ecommerce.service;

import com.ecommerce.entity.Products;

public interface ProductsService {
	
	public Products getProduct(String productId);

	public Products addProducts(Products product);

}
