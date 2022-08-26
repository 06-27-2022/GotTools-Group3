package com.projecttwo.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "invoice")
public class Invoice {

	@Id
	@Column(name = "invoice_id")
	@GeneratedValue(generator = "invoice_invoice_id_seq", strategy = GenerationType.AUTO)
	@SequenceGenerator(allocationSize = 1, name = "invoice_invoice_id_seq")
	private int invoiceid;
	@Column(name = "invoice_total")
	private int total;
	@Column(name = "invoice_quantities")
	private int[][] quantities;
	@OneToMany(fetch = FetchType.EAGER)
	@JoinColumn(name = "invoice_supplies")
	private Set<Supplies> supplies;
	@OneToOne
	@JoinColumn(name = "invoice_customer")
	private Customer customer;

}
