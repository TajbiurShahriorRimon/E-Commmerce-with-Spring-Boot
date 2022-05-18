package com.ecommerce.service;

import java.util.ArrayList;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.dao.CategoryDao;
import com.ecommerce.entity.Category;

@Service
public class CategoryServiceImpl implements CategoryService {
	
	@Autowired
	private CategoryDao categoryDao;


	@Override
	public Category addCategory(Category category) {
		// TODO Auto-generated method stub
		categoryDao.save(category);
		return category;
	}
	
	@Override
	public ArrayList<Category> getAllCategory() {
		var category = (ArrayList<Category>) categoryDao.findAll()
		.stream().filter(x -> x.getStatus().equals("active".toString())).collect(Collectors.toList());
		return category;
	}

}
