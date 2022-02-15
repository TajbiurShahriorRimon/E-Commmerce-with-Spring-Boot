package com.ecommerce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.dao.UserDao;
import com.ecommerce.entity.User;
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
	@Override
	public User getUser(String userId) {
		// TODO Auto-generated method stub
//		User user= new User();
//		user.name="Asif";
		return userDao.getById(userId);
	}

	@Override
	public User addUser(User user) {
		// TODO Auto-generated method stub
		user.setStatus();
		user.setType();
		userDao.save(user);
		return user;
	} 
	
	
}
