package com.projecttwo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "customer")
public class Customer {

	@Id
	@Column(name = "customer_id")
	@GeneratedValue(generator = "customer_customer_id_seq", strategy = GenerationType.AUTO)
	@SequenceGenerator(allocationSize = 1, name = "customer_customer_id_seq")
	private int customerid;
	@Column(name = "customer_username")
	private String username;
	@Column(name = "customer_password")
	private String password;
	@Column(name = "customer_email")
	private String email;
	@Column(name = "customer_phonenumber")
	private String phonenumber;
	@Column(name = "customer_address")
	private String address;
	@Column(name = "customer_city")
	private String city;
}
