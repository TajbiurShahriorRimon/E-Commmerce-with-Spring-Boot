package com.ecommerce.dao;

import antlr.collections.List;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ecommerce.entity.Products;

public interface ProductsDao extends JpaRepository<Products, Integer> {
	
//	@Query("select t from Products t order by t.id desc LIMIT 1")
//	public Products findLastRow();
	
	public Products findFirstByOrderByProductIdDesc();

}