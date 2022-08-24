package com.projecttwo.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.projecttwo.Service.CustomerService;
import com.projecttwo.Service.SupplierService;
import com.projecttwo.model.Customer;
import com.projecttwo.model.Supplier;
import com.projecttwo.model.User;

@RestController("loginAuth")
@RequestMapping(path = "/user")
public class UserController {

	private static HttpSession session;
	
	@Autowired
	public static User user = new User("","","");
	
	@Autowired
	CustomerService customerservice;
	SupplierService supplierservice;
	
	@PostMapping("/login")
	public ResponseEntity<User> login(HttpServletRequest request, @RequestParam String username, @RequestParam String password) {
		if (customerservice.findByUsername(username) != null) {
			Customer customer = customerservice.findByUsername(username);
			if (password.equals(customer.getPassword())) {
				user.setName(username);
				user.setPassword(password);
				user.setRole("Customer");
				session = request.getSession();
				return new ResponseEntity<User>(HttpStatus.OK);
			}
		}else if (supplierservice.findByUsername(username) != null) {
			Supplier supplier = supplierservice.findByUsername(username);
			if (password.equals(supplier.getPassword())) {
				user.setName(username);
				user.setPassword(password);
				user.setRole("Supplier");
				session = request.getSession();
				return new ResponseEntity<User>(HttpStatus.OK);
			}
		}
		return new ResponseEntity<User>(HttpStatus.UNAUTHORIZED);
		
	}
	
	@PostMapping("/logout")
	public void logout(HttpServletRequest request) {
		session = request.getSession(false);
		if(session != null) {
			session.invalidate();
			user.setName("");
			user.setPassword("");
			user.setRole("");
		}
	}
}
