package com.projecttwo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projecttwo.model.Customer;
import com.projecttwo.repository.CustomerRepository;

@Service("customerService")
public class CustomerService {

	@Autowired
	private CustomerRepository customerrepository;
	
	public CustomerService() {
		
	}
	
	public List<Customer> findAll(){
		return this.customerrepository.findAll();
	}
	
	public Customer findById(int id) {
		return this.customerrepository.findById(id);
	}
	
	public void save(Customer customer) {
		this.customerrepository.save(customer);
	}
	
	public void delete(Customer customer) {
		this.customerrepository.delete(customer);
	}
	
	public Customer findByUsername(String username) {
		return this.customerrepository.findByUsername(username);
	}
}
