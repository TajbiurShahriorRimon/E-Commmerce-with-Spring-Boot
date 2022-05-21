package com.ecommerce.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Map;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import com.ecommerce.dao.OrdersDao;
import com.ecommerce.dao.SalesDao;
import com.ecommerce.entity.Orders;
import com.ecommerce.entity.Sales;

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

    // @Override
    // public Map<Integer, java.util.List<Sales>> getPendingOrders(){
    //     var v = salesDao.findAll().stream().filter(x -> x.getOrder().getStatus() == "pending")
    //     .collect(Collectors.groupingBy(g -> g.getOrder().getId()));
    //     var x = "1";
    //     return v;
    // }

    @Override
    public ArrayList<Orders> getPendingOrders(){
        var v = (ArrayList<Orders>) ordersDao.findAll()
        .stream().filter(x -> x.getStatus().equals("pending")).collect(Collectors.toList());
        return v;
    }

    @Transactional
    @Override
    public boolean setDeliverdStatus(int id){
        Orders order = ordersDao.findById(id).get();
        order.setStatus("delivered");
        ordersDao.save(order);
        return true;
    }
    
}
