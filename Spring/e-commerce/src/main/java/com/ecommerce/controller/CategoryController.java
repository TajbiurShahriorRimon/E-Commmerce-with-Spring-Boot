package com.ecommerce.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.entity.Category;
import com.ecommerce.service.CategoryService;

@RestController
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	@PostMapping(value="/addCategory",consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Category> addProducts(@Valid @RequestBody Category category) {
		category= this.categoryService.addCategory(category);
		return new ResponseEntity<Category>(category, HttpStatus.CREATED);
	}

}
