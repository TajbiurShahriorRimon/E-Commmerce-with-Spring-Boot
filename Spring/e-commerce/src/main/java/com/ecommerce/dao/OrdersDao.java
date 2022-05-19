package com.ecommerce.dao;

import com.ecommerce.entity.Orders;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrdersDao extends JpaRepository<Orders, Integer> {
    
}
