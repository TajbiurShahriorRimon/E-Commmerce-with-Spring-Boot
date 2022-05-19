package com.ecommerce.service;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.ecommerce.dao.OrdersDao;
import com.ecommerce.entity.Orders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrdersServiceImpl implements OrdersService {

    @Autowired
    private OrdersDao ordersDao;

    @Override
    public Orders addOrder(Orders orders) {
        //Formatting the date format
        Date date = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MMMM/yyyy");
        orders.setDate(simpleDateFormat.format(date));
        ordersDao.save(orders);
        return orders;
    }
    
}
