package com.ecommerce.controller;

import java.sql.DriverManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.entity.User;
import com.ecommerce.service.UserService;

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
		public User addUser(@RequestBody User user) {
			return this.userservice.addUser(user);
		}
	}
