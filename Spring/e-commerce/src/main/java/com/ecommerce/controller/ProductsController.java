package com.ecommerce.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.entity.Products;
import com.ecommerce.service.ProductsService;




@RestController
public class ProductsController {
	
	@Autowired
	private ProductsService productsService;
	
	@PostMapping(value="/addProducts",consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Products> addProducts(@Valid @RequestBody Products product) {
		product= this.productsService.addProducts(product);
		return new ResponseEntity<Products>(product, HttpStatus.CREATED);
	}

}
