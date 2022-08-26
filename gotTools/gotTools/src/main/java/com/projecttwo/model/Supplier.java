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
@Table(name = "supplier")
public class Supplier {

	@Id
	@Column(name = "supplier_id")
	@GeneratedValue(generator = "supplier_supplier_id_seq", strategy = GenerationType.AUTO)
	@SequenceGenerator(allocationSize = 1, name = "supplier_supplier_id_seq")
	private int supplierid;
	@Column(name = "supplier_companyname")
	private String companyname;
	@Column(name = "supplier_contactname")
	private String contactname;
	@Column(name = "supplier_username")
	private String username;
	@Column(name = "supplier_password")
	private String password;
	@Column(name = "supplier_email")
	private String email;
	@Column(name = "supplier_phonenumber")
	private String phonenumber;
	@Column(name = "supplier_address")
	private String address;
	@Column(name = "supplier_city")
	private String city;
	
}
