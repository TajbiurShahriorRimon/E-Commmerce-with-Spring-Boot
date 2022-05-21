package com.ecommerce.service;

import com.ecommerce.dao.CustomerDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerDao customerDao;

    @Override
    public int getCustomerIdByEmail(String email) {
        var customer = customerDao.findAll().stream().filter(x -> x.getMail().getMail().equals(email.toString()))
        .findFirst().orElse(null);
        return customer.getId();
    }
    
}
