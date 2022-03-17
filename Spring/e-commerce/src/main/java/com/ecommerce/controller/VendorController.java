package com.ecommerce.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.entity.Vendor;
import com.ecommerce.service.VendorService;

@RestController
public class VendorController {
	
	@Autowired
	private VendorService vendorService;
	
	@PostMapping(value="/uVendorReg")
	public ResponseEntity<Vendor> addVendor(@Valid @RequestBody Vendor vendor){
		
		vendor=this.vendorService.addVendor(vendor);
		return new ResponseEntity<Vendor>(vendor, HttpStatus.CREATED);
	}

}
