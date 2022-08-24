package com.projecttwo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "supplies")
public class Supplies {

	@Id
	@Column(name = "supplies_id")
	@GeneratedValue(generator = "supplies_supplies_id_seq", strategy = GenerationType.AUTO)
	@SequenceGenerator(allocationSize = 1, name = "supplies_supplies_id_seq")
	private int suppliesid;
	@Column(name = "supplies_name")
	private String name;
	@Column(name = "supplies_category")
	private String category;
	@Column(name = "supplies_quantity")
	private int quantity;
	@Column(name = "supplies_price")
	private float price;
	@Column(name = "supplies_description")
	private String description;
	@Column(name = "supplies_rating")
	private float rating;
	@ManyToOne
	@JoinColumn(name = "supply_supplier")
	private Supplier supplier;
}
