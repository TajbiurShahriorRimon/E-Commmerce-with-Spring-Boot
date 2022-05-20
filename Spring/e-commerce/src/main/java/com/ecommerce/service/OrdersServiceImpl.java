package com.ecommerce.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import com.ecommerce.dao.OrdersDao;
import com.ecommerce.dao.SalesDao;
import com.ecommerce.entity.Orders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import antlr.collections.List;

@Service
public class OrdersServiceImpl implements OrdersService {

    @Autowired
    private OrdersDao ordersDao;

    @Autowired
    private SalesDao salesDao;

    @Autowired
    private EntityManager entityManager;

    @Override
    public Orders addOrder(Orders orders) {
        //Formatting the date format
        Date date = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MMMM/yyyy");
        orders.setDate(simpleDateFormat.format(date));
        ordersDao.save(orders);
        return orders;
    }

    @Transactional
    @Override
    public java.util.List checkIfCustomerPurchasedProduct(int productId, int customerId){
        // var data = (ArrayList<Orders>) ordersDao.findAll().stream().filter(x -> x.getCustomer().getId() == customerId
        //  && x.getStatus() == "delivered").collect(Collectors.toList());
        // }
        var v = entityManager.createNativeQuery("SELECT orders.* FROM orders, sales WHERE orders.status = 'delivered' AND orders.customer_id = "+customerId + " AND orders.id = sales.order_id AND sales.product_product_id = "+productId)
        .getResultList();
        return v;
    }
    
}
