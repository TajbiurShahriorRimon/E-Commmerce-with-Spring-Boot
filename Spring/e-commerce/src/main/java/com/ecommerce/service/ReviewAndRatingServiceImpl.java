package com.ecommerce.service;

import java.util.ArrayList;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import com.ecommerce.dao.ReviewAndRatingDao;
import com.ecommerce.entity.ReviewAndRating;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import antlr.collections.List;
import net.bytebuddy.asm.Advice.Return;

@Service
public class ReviewAndRatingServiceImpl implements ReviewAndRatingService {

    @Autowired
    private ReviewAndRatingDao reviewAndRatingDao;

	@Override
    // public List<ReviewAndRating> getProductReivewAndRating(String id) {
    //     var reviewAndRating = reviewAndRatingDao.findAll()
    //     .stream().filter(x -> x.getProduct().getProductId().equals(id)).collect(Collectors.toList());
    //     //.stream().filter(x -> x.getProduct().getProductId().equals(id)).collect(Collectors.toList());
    //     return reviewAndRating;
    // }
    public ArrayList<ReviewAndRating> getProductReivewAndRating(String id){
        var reviewAndRating = reviewAndRatingDao.findAll()
        .stream().filter(x -> x.getProduct().getProductId().equals(id)).collect(Collectors.toList());
        return (ArrayList<ReviewAndRating>) reviewAndRating;
    }
    
}
