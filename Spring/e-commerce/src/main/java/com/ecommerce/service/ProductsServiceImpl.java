package com.ecommerce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import antlr.collections.List;

import java.io.IOException;
import java.util.ArrayList;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import com.ecommerce.dao.ProductsDao;
import com.ecommerce.dao.ReviewAndRatingDao;
import com.ecommerce.entity.Products;
import com.ecommerce.entity.ReviewAndRating;

@Service
public class ProductsServiceImpl implements  ProductsService{
	 
	@Autowired
	private ProductsDao productsDao;

	@Autowired
	private ReviewAndRatingDao reviewAndRatingDao;

	@Autowired
	private EntityManager entityManager;

	@Override
	public Products getProduct(int productId) {
		// TODO Auto-generated method stub
		return productsDao.getById(productId);
	}

	@Override
	public Products addProducts(Products product) {
		// TODO Auto-generated method stub
		product.setStatus("active");
		productsDao.save(product);
		return product;
	}

	@Override
	public Products getProductById(int id){
		return productsDao.findById(id).get();
	}

	@Override
	public ArrayList<Products> getAllProducts() {
		var products = (ArrayList<Products>) productsDao.findAll()
		.stream().filter(x -> x.getStatus().equals("active".toString())).collect(Collectors.toList());
		return products;
	}

	// @Override
    // public ArrayList<ReviewAndRating> getProductReivewAndRating(String id) {
    //     var reviewAndRating = (ArrayList<ReviewAndRating>) reviewAndRatingDao.findAll()
    //     .stream().filter(x -> x.getProduct().getProductId().equals(id)).collect(Collectors.toList());
    //     return reviewAndRating;
    // }
	public Products saveImage(MultipartFile file)  {
		// TODO Auto-generated method stub
		
		
		try {
			
			return productsDao.save(productsDao.findFirstByOrderByProductIdDesc().setThumbnail(file.getBytes()));
		}catch(Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	@Transactional
	@Override
	public ArrayList<Products> searchProducts(String value) {
		// var products = (ArrayList<Products>) productsDao.findAll().stream().filter(x -> x.getProductName().contains(value)
		//  && x.getStatus().equals("active")).collect(Collectors.toList());
		var products = (ArrayList<Products>) entityManager.createNativeQuery("SELECT * FROM productsdummy2 WHERE product_name LIKE '%"+value+"%'").getResultList();

		return products;
	}


}
