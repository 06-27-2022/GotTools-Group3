package com.projecttwo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projecttwo.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Integer>{

	List<Review> findAll();
	Review findById(int id);
	
	<S extends Review> S save(Review review);
	void delete(Review review);
}