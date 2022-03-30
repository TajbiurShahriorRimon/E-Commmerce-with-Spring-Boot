package com.ecommerce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.dao.LoginDao;
import com.ecommerce.entity.Login;
@Service
public class LoginServiceImpl implements LoginService{

	@Autowired
	private LoginDao loginDao;
	
	@Override
	public Login addLogin(Login login) {
		
		loginDao.save(login);
		return null;
	}

}
