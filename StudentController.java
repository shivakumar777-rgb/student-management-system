package com.nec.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.nec.entity.Student;
import com.nec.service.StudentService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("api/student")
public class StudentController {

	@Autowired
	private StudentService service;
	
	@PostMapping
	public Student addStudent(@RequestBody Student stu) {
		return service.save(stu);
	} 
	
	@GetMapping
	public  List<Student> getAll() {
		return service.getAll();
	}
	
	@GetMapping("/{id}")
	public Optional<Student> getStudent(@PathVariable Long id) {
		return service.getById(id);
	}
	
	@DeleteMapping("/{id}")
	public void deleteStudent(@PathVariable Long id) {
		service.delete(id);
	}
	
	@PutMapping("/{id}")
	public Student updateStudent(@PathVariable Long id,@RequestBody Student updateStudent) {
		
		return service.update(id,updateStudent);
	}
	
	
	
}
