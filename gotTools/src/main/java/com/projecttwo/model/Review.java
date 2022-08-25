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
@Table(name = "review")
public class Review {

	@Id
	@Column(name = "review_id")
	@GeneratedValue(generator = "review_review_id_seq", strategy = GenerationType.AUTO)
	@SequenceGenerator(allocationSize = 1, name = "review_review_id_seq")
	private int reviewid;
	@Column(name = "review_score")
	private int reviewscore;
	@Column(name = "review_comment")
	private String reviewcomment;
	@ManyToOne
	@JoinColumn(name = "supplies")
	private Supplies Supplies;
}
