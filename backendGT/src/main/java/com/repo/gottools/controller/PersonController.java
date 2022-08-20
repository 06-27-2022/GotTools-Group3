/*
 * Copyright (c) 2022. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

package com.repo.gottools.controller;


import com.repo.gottools.exception.UsrNotFoundException;
import com.repo.gottools.model.Person;
import com.repo.gottools.repository.PersonRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin ("http://localhost:3000")
public class PersonController {
    @Autowired
    private PersonRepository personRepository;

    @PostMapping("/user")
    Person newPerson(@RequestBody Person newPerson){
        return personRepository.save(newPerson);
    }

    @GetMapping("users")
    List<Person>getAllUsers(){
        return personRepository.findAll();
    }
    @GetMapping("/user/{id}")
        Person getUserById(@PathVariable Long id){
        return personRepository.findById(id)
                .orElseThrow(()->new UsrNotFoundException(id));
    }
}
