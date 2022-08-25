package com.projecttwo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projecttwo.Service.ReviewService;
import com.projecttwo.model.Review;

@RestController("reviewController")
@RequestMapping(path= "/review")
public class ReviewController {

	@Autowired
	private ReviewService reviewservice;
	
	@PostMapping("/new")
	public void save(@RequestBody Review review) {
		this.reviewservice.save(review);
	}
	
	@PostMapping("/remove")
	public void delete(@RequestBody Review review) {
		this.reviewservice.delete(review);
	}
	
	@GetMapping("/all")
	public List<Review> findAll(){
		return this.reviewservice.findAll();
	}
	
	@GetMapping("/{id}")
	public Review findById(@PathVariable int id){
		return this.reviewservice.findById(id);
	}
}
