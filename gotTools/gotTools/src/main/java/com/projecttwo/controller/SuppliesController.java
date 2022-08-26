package com.projecttwo.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


import com.projecttwo.Service.SuppliesService;
import com.projecttwo.model.Supplies;
import com.projecttwo.repository.SuppliesRepository;

@RestController("suppliesController")
@RequestMapping(path = "/supplies")
public class SuppliesController {

	@Autowired
	private SuppliesService suppliesservice;
	@Autowired 
	private SuppliesRepository suppliesrepository;
	
	@PostMapping("/new")
	public void save(@RequestBody Supplies supplies) {
		this.suppliesservice.save(supplies);
	}
	
	@PostMapping(value="/picture", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public void uploadFile(@RequestParam int suppliesid, @RequestBody MultipartFile file) throws IOException{
		byte[] picture = file.getBytes();
		Supplies tempsupplies = suppliesrepository.findById(suppliesid);
		tempsupplies.setPicture(picture);
		suppliesservice.save(tempsupplies);
	}
	
	@GetMapping(value="/picture/{id}", produces = MediaType.IMAGE_JPEG_VALUE)
	public ResponseEntity<byte[]> getImage(@PathVariable int id){
		return new ResponseEntity<byte[]>(this.suppliesservice.findById(id).getPicture(), HttpStatus.OK); 
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
