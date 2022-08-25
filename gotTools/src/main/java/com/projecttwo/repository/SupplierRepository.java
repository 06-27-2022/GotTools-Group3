package com.projecttwo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projecttwo.model.Supplier;

public interface SupplierRepository extends JpaRepository<Supplier, Integer>{

	List<Supplier> findAll();
	Supplier findById(int id);
	Supplier findByUsername(String username);
	
	<S extends Supplier> S save(Supplier supplier);
	void delete(Supplier supplier);
}
