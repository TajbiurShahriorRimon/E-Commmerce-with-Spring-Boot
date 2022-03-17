package com.ecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.entity.Vendor;

public interface VendorDao extends JpaRepository<Vendor, String>{

}
