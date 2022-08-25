package com.projecttwo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projecttwo.model.Supplies;

public interface SuppliesRepository extends JpaRepository<Supplies, Integer>{

	List<Supplies> findAll();
	Supplies findById(int id);
	List<Supplies> findByCategory(String category);
	
	<S extends Supplies> S save(Supplies supplies);
	void delete(Supplies supplies);
	
}
