package com.projecttwo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projecttwo.Service.InvoiceService;
//import com.projecttwo.Service.SuppliesService;
import com.projecttwo.model.Invoice;

@RestController("invoiceController")
@RequestMapping(path = "/invoice")
public class InvoiceController {

	@Autowired
	private InvoiceService invoiceservice;
//	private SuppliesService suppliesservice;
	
	@PostMapping("/new")
	public void save(@RequestBody Invoice invoice) {
		this.invoiceservice.save(invoice);
//		this.suppliesservice.update(invoice);
		
	}
	
	@PostMapping("/remove")
	public void delete(@RequestBody Invoice invoice) {
		this.invoiceservice.delete(invoice);
	}
	
	@GetMapping("/all")
	public List<Invoice> findAll(){
		return this.invoiceservice.findAll();
	}
	
	@GetMapping("/id/{id}")
	public Invoice findById(@PathVariable int id){
		return invoiceservice.findById(id);
	}
	
	@GetMapping("/name/{name}")
	public List<Invoice> findByName(@PathVariable String name) {
		return invoiceservice.findByName(name);

	}
}
