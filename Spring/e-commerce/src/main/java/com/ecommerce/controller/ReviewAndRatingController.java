package com.ecommerce.controller;

import com.ecommerce.entity.ReviewAndRating;
import com.ecommerce.service.ReviewAndRatingService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;

@RestController
public class ReviewAndRatingController {
    @Autowired
    private ReviewAndRatingService reviewAndRatingService;

    @GetMapping("/product/getReviewsAndRatings/{id}")
    public ResponseEntity<ArrayList<ReviewAndRating>> getReviewAndRating(@PathVariable String id){
        return ResponseEntity.ok(reviewAndRatingService.getProductReivewAndRating(id));
    }
	
}
