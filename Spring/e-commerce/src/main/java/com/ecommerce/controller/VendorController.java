package com.ecommerce.controller;



import java.net.http.HttpRequest;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;

import com.ecommerce.entity.User;
import com.ecommerce.entity.Vendor;
import com.ecommerce.service.VendorService;

@RestController
public class VendorController {
	
	@Autowired
	private VendorService vendorService;
	
	
	
	@PostMapping(value="/uVendorReg",consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Vendor> addVendor( @RequestBody Vendor vendor) {
		
		System.out.println("Vendor");
		System.out.println(vendor);
		vendor=this.vendorService.addVendor(vendor);
		
		return new ResponseEntity<Vendor> (vendor,HttpStatus.CREATED);
	}
	
//	@PostMapping(value="/uVendorReg")
//	public String addVendor(String id){
//		
//		System.out.println("Vendor");
////		System.out.println(vendor);
////		vendor=this.vendorService.addVendor(vendor);
//		
//		return "id";
//	}

}
