package com.ecommerce.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.entity.Login;
import com.ecommerce.service.LoginService;

@RestController
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	
	@PostMapping(value="/uLoginReg")
	public ResponseEntity<Login> addLogin(@Valid @RequestBody Login login ){
		login =this.loginService.addLogin(login);
		return new ResponseEntity<Login>(login, HttpStatus.CREATED);
	}
	

}
