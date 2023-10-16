package com.app.controller;

import java.util.List;
import java.util.Optional;

import com.app.entity.Admin;
import com.app.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class AdminController {

    @Autowired
    private AdminService service;

    @GetMapping("/list")
    private List<Admin> getProduct(){
        return service.getData();
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<Admin> getProductById(@PathVariable long id){
        Optional<Admin> admin = Optional.ofNullable(service.findById(id));
        return admin.map(value -> new ResponseEntity<>(value,HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }



    @PostMapping("/add")
    public ResponseEntity<Admin> addProducts(@RequestBody Admin admin){
        Admin addedProduct=service.addData(admin).getBody();
        return new ResponseEntity<>(addedProduct, HttpStatus.CREATED);
    }


    @PutMapping("/edit/{id}")
    public ResponseEntity<Admin> updateProduct(@PathVariable Long id, @RequestBody Admin admin){
        Optional<Admin> existingUser = Optional.ofNullable(service.findById(id));
        if(existingUser.isPresent()) {
           admin.setCid(id);
            Admin updatedUser = service.editData(id,admin);
            return new ResponseEntity<>(updatedUser,HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }


    @DeleteMapping("/delete/{id}")
    public String deleteProducts(@PathVariable Long id){
        Optional<Admin> existingUser = Optional.ofNullable(service.findById(id));
        if(existingUser.isPresent()) {
            service.deleteData(id);
            return "Deleted successfully";
        }
        else {
            return "No user found";
        }
    }

}
