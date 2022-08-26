package com.projecttwo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projecttwo.Service.SupplierService;
import com.projecttwo.model.Supplier;

@RestController("supplierController")
@CrossOrigin ("http://localhost:3000")
@RequestMapping(path= "/supplier")
public class SupplierController {

	@Autowired
	private SupplierService supplierservice;
	
	@PostMapping("/new")
	public void save(@RequestBody Supplier supplier) {
		this.supplierservice.save(supplier);
	}
	
	@PostMapping("/remove")
	public void delete(@RequestBody Supplier supplier) {
		this.supplierservice.delete(supplier);
	}
	
	@GetMapping("/all")
	public List<Supplier> findAll(){
		return this.supplierservice.findAll();
	}
	
	@GetMapping("/id/{id}")
	public Supplier findById(@PathVariable int id){
		return this.supplierservice.findById(id);
	}
	
	@GetMapping("/user/{username}")
	public Supplier findByUsername(@PathVariable String username) {
		return this.supplierservice.findByUsername(username);
	}
}
