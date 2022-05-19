package com.ecommerce.controller;

import com.ecommerce.entity.Orders;
import com.ecommerce.service.OrdersService;
import com.mysql.cj.x.protobuf.MysqlxCrud.Order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrdersController {
    @Autowired
    private OrdersService ordersService;

    @PostMapping(value = "/order")
    public ResponseEntity<Integer> add(@RequestBody Orders orders){
        Orders order = ordersService.addOrder(orders);
        return new ResponseEntity<Integer>(order.getId(), HttpStatus.CREATED);
    }
}
