package com.ecommerce.service;

import com.ecommerce.entity.User;

public interface UserService {

	
	public User getUser(String userId );

	public User addUser(User user);

	public User getUserDataForSession(String email);
}
