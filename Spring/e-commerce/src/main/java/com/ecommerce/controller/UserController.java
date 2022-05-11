package com.ecommerce.controller;

//import java.sql.DriverManager;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.entity.User;
import com.ecommerce.entity.Vendor;
import com.ecommerce.service.UserService;
import com.ecommerce.service.VendorService;

@RestController
public class UserController {
	
	
		@Autowired
		private UserService userservice;
		
		
		@GetMapping("/userHome/{userId}")
		public User userHome(@PathVariable String userId) {
			return this.getUser(userId);
		}
		
		public User getUser(String userId) {
			return this.userservice.getUser(userId);
		}
		
		@PostMapping(value="/uReg",consumes=MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<User> addUser(@Valid @RequestBody User user) {
			user= this.userservice.addUser(user);
			/*if(user.getType().equals("vendor")) {
				user=this.vendorservice.addVendor((Vendor)user);
			}*/
			return new ResponseEntity<User>(user, HttpStatus.CREATED);
		}
		
	}
