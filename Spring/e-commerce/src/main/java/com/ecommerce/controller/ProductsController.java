package com.ecommerce.controller;

import java.util.ArrayList;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import antlr.collections.List;

import com.ecommerce.entity.Products;
import com.ecommerce.service.ProductRepo;
import com.ecommerce.service.ProductsService;




@RestController
public class ProductsController {
	
	@Autowired
	private ProductsService productsService;

	@Autowired
	private ProductRepo productRepo;
	
	@PostMapping(value="/addProducts",consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Products> addProducts(@Valid @RequestBody Products product) {
		product= this.productsService.addProducts(product);
		return new ResponseEntity<Products>(product, HttpStatus.CREATED);
	}

	@GetMapping("/products")
	public ResponseEntity<ArrayList<Products>> getAllProducts(){
		return ResponseEntity.ok(productRepo.getAllProducts()); 
	}

	@GetMapping("/product/{id}")
	public ResponseEntity<Products> getProduct(@PathVariable String id){
		return ResponseEntity.ok(productsService.getProductById(id));
	}

}
