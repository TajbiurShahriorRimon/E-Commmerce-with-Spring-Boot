package com.ecommerce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.dao.CategoryDao;
import com.ecommerce.entity.Category;

@Service
public class CategoryServiceImpl implements CategoryService {
	
	@Autowired
	private CategoryDao categoryDao;

	@Override
	public Category getCategory(Integer categoryId) {
		// TODO Auto-generated method stub
		return categoryDao.getById(categoryId);
	}

	@Override
	public Category addCategory(Category category) {
		// TODO Auto-generated method stub
		categoryDao.save(category);
		return category;
	}

}
