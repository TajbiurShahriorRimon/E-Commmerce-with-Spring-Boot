package com.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.service.LoginService;

@RestController
public class LoginController {
	
	@Autowired
	private LoginService loginService;

}
