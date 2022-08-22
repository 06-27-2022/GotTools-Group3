package com.projecttwo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projecttwo.model.Supplies;
import com.projecttwo.repository.SuppliesRepository;

@Service("suppliesService")
public class SuppliesService {
	
	@Autowired
	private SuppliesRepository suppliesRepository;

	public SuppliesService() {
		
	}
	
	public List<Supplies> findAll(){
		return this.suppliesRepository.findAll();
	}
	
	public Supplies findById(int id) {
		return this.suppliesRepository.findById(id);
	}
	
	public void save(Supplies supplies) {
		this.suppliesRepository.save(supplies);
	}
	
	public void delete(Supplies supplies) {
		this.suppliesRepository.delete(supplies);
	}
	
	public List<Supplies> findByCategory(String category) {
		return this.suppliesRepository.findByCategory(category);
	}
}
