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

import com.projecttwo.Service.SuppliesService;
import com.projecttwo.model.Supplies;

@RestController("suppliesController")
@RequestMapping(path = "/supplies")
public class SuppliesController {

	@Autowired
	private SuppliesService suppliesservice;
	
	@PostMapping("/new")
	public void save(@RequestBody Supplies supplies) {
		this.suppliesservice.save(supplies);
	}
	
	@PostMapping("/remove")
	public void delete(@RequestBody Supplies supplies) {
		this.suppliesservice.delete(supplies);
	}
	
	@GetMapping("/all")
	public List<Supplies> findAll(){
		return this.suppliesservice.findAll();
	}
	
	@GetMapping("/id/{id}")
	public ResponseEntity<Supplies> findById(@PathVariable int id){
		return new ResponseEntity<Supplies>(this.suppliesservice.findById(id), HttpStatus.OK);
	}
	
	@GetMapping("/category/{category}")
	public List<Supplies> findByCategory(@PathVariable String category){
		return this.suppliesservice.findByCategory(category);
	}
}
