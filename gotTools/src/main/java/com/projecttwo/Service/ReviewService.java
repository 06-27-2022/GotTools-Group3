package com.projecttwo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projecttwo.model.Review;
import com.projecttwo.repository.ReviewRepository;

@Service("reviewService")
public class ReviewService {

	@Autowired
	private ReviewRepository reviewrepository;
	
	public ReviewService() {
		
	}
	
	public List<Review> findAll(){
		return this.reviewrepository.findAll();
	}
	
	public Review findById(int id) {
		return this.reviewrepository.findById(id);
	}
	
	public void save(Review review) {
		this.reviewrepository.save(review);
	}
	
	public void delete(Review review) {
		this.reviewrepository.delete(review);
	}
}
