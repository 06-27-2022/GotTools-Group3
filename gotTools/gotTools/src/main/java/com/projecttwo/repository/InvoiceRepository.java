package com.projecttwo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projecttwo.model.Customer;
import com.projecttwo.model.Invoice;
import com.projecttwo.model.Supplier;

public interface InvoiceRepository extends JpaRepository<Invoice, Integer>{
	
	List<Invoice> findAll();
	Invoice findById(int id);
	List<Invoice> findByCustomer(Customer customer);
	List<Invoice> findBySupplies_Supplier(Supplier supplier);
	
	<S extends Invoice> S save(Invoice invoice);
	void delete(Invoice invoice);

}
