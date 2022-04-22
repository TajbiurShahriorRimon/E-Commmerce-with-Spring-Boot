package com.ecommerce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ecommerce.dao.LoginDao;
import com.ecommerce.entity.Login;
@Service
public class LoginServiceImpl implements LoginService,UserDetailsService{

	@Autowired
	private LoginDao loginDao;
	
	@Override
	public Login addLogin(Login login) {
		
		loginDao.save(login);
		return null;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Login login=loginDao.getById(username);
		
		if(login==null)
			throw new UsernameNotFoundException("The mail you provided is invalid");
		return login;
	}

}
