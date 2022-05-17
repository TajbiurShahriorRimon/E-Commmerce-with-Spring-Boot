package com.ecommerce.service;

import com.ecommerce.entity.Category;

public interface CategoryService {
	
	public Category getCategory(Integer categoryId);

	public Category addCategory(Category category);

}
