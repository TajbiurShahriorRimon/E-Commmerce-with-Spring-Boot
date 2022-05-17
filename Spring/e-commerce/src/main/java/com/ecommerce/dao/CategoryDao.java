package com.ecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.entity.Category;

public interface CategoryDao extends JpaRepository<Category, Integer>{

}
