package com.ecommerce.service;

import java.util.List;

import com.ecommerce.entity.Orders;

//import antlr.collections.List;

public interface OrdersService {
    public Orders addOrder(Orders orders);
    public List checkIfCustomerPurchasedProduct(int productId, int customerId);
}
