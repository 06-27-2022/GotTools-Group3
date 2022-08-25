package com.projecttwo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projecttwo.model.Supplier;
import com.projecttwo.repository.SupplierRepository;

@Service("supplierSerivce")
public class SupplierService {

	@Autowired
	private SupplierRepository supplierrepository;
	
	public SupplierService() {
		
	}
	
	public List<Supplier> findAll(){
		return this.supplierrepository.findAll();
	}
	
	public Supplier findById(int id) {
		return this.supplierrepository.findById(id);
	}
	
	public void save(Supplier supplier) {
		this.supplierrepository.save(supplier);
	}
	
	public void delete(Supplier supplier) {
		this.supplierrepository.delete(supplier);
	}
	
	public Supplier findByUsername(String username) {
		return  this.supplierrepository.findByUsername(username);
	}
	

}
