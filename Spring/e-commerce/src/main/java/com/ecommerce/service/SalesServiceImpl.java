package com.ecommerce.service;

import java.util.ArrayList;

import com.ecommerce.dao.SalesDao;
import com.ecommerce.entity.Sales;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SalesServiceImpl implements SalesService {
    @Autowired
    private SalesDao salesDao;

    @Override
    public void addSales(ArrayList<Sales> sales) {
        for (Sales item : sales) {
            salesDao.save(item);
        }

        var c = "sa";
    }
    
}
