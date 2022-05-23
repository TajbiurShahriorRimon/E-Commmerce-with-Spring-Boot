package com.ecommerce.service;

import java.util.List;

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
		//return userDao.getById(userId);
		return userDao.findById(userId).get();
	}

	@Override
	public User addUser(User user) {
		// TODO Auto-generated method stub
		user.setStatus();
		//user.setType();
		userDao.save(user);
		return user;
	} 
	
	@Override
	public User getUserDataForSession(String email){
		var user = userDao.findById(email).get();
		return user;
	}

	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return userDao.findAll();
	}
	
}
