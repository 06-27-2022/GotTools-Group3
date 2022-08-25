package com.projecttwo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projecttwo.Service.CustomerService;
import com.projecttwo.model.Customer;

@RestController("customerController")
@RequestMapping(path = "/customer")
public class CustomerController {
	
	@Autowired
	private CustomerService customerservice;

	@PostMapping("/new")
	public void save(@RequestBody Customer customer) {
		this.customerservice.save(customer);
	}
	
	@PostMapping("/remove")
	public void delete(@RequestBody Customer customer) {
		this.customerservice.delete(customer);
	}
	
	@GetMapping("/all")
	public List<Customer> findAll(){
		return this.customerservice.findAll();
	}
	
	@GetMapping("/id/{id}")
	public ResponseEntity<Customer> findById(@PathVariable int id){
		return new ResponseEntity<Customer>(this.customerservice.findById(id), HttpStatus.OK);
	}
	
	@GetMapping("/user/{username}")
	public ResponseEntity<Customer> findByUsername(@PathVariable String username){
		return new ResponseEntity<Customer>(this.customerservice.findByUsername(username), HttpStatus.OK);
	}
}
