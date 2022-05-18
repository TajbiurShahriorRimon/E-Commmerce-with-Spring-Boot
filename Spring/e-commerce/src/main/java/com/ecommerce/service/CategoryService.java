package com.ecommerce.service;

import java.util.ArrayList;

import com.ecommerce.entity.Category;

public interface CategoryService {

	public Category addCategory(Category category);
	public ArrayList<Category> getAllCategory();

}
