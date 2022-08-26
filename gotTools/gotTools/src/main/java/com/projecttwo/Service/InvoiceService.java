package com.projecttwo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projecttwo.model.Customer;
import com.projecttwo.model.Invoice;
import com.projecttwo.model.Supplier;
import com.projecttwo.repository.InvoiceRepository;

@Service("invoiceService")
public class InvoiceService {

	@Autowired
	private InvoiceRepository invoiceRepository;
	
	public InvoiceService() {
		
	}
	
	public List<Invoice> findAll(){
		return this.invoiceRepository.findAll();
	}
	
	public Invoice findById(int id) {
		return this.invoiceRepository.findById(id);
	}
	
	public void save(Invoice invoice) {
		this.invoiceRepository.save(invoice);
	}
	
	public void delete(Invoice invoice) {
		this.invoiceRepository.delete(invoice);
	}
	
	public List<Invoice> findByName(String name){
		Customer customer = new CustomerService().findByUsername(name);
		Supplier supplier = new SupplierService().findByUsername(name);
		if (customer != null) return this.invoiceRepository.findByCustomer(customer);
		else if (supplier != null) return this.invoiceRepository.findBySupplies_Supplier(supplier);
		else return null;
	}
	
}
