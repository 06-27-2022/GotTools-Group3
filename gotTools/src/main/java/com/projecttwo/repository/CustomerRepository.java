package com.projecttwo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projecttwo.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer>{

	List<Customer> findAll();
	Customer findById(int id);
	Customer findByUsername(String username);
	
	<S extends Customer> S save(Customer customer);
	void delete(Customer customer);
}
